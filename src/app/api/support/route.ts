import { NextResponse } from "next/server";
import { SUPPORT_EMAIL } from "@/lib/config";

export const runtime = "nodejs";

const MAX_FILE_BYTES = 3 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "application/pdf",
  "video/mp4",
]);

function value(form: FormData, key: string) {
  const entry = form.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sendEmail(payload: Record<string, unknown>, apiKey: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Email provider returned ${response.status}`);
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.SUPPORT_FORM_FROM;

  if (!apiKey || !from) {
    return NextResponse.json(
      { message: "The support form is not configured yet. Please email support@obarito.com." },
      { status: 503 }
    );
  }

  const form = await request.formData();
  if (value(form, "companyWebsite")) {
    return NextResponse.json({ ok: true });
  }

  const firstName = value(form, "firstName");
  const lastName = value(form, "lastName");
  const email = value(form, "email");
  const storeUrl = value(form, "storeUrl");
  const product = value(form, "product");
  const themeVersion = value(form, "themeVersion");
  const collaboratorCode = value(form, "collaboratorCode");
  const description = value(form, "description");

  if (!firstName || !lastName || !email || !storeUrl || !product || !description) {
    return NextResponse.json({ message: "Please complete every required field." }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  const attachment = form.get("file");
  const attachments: Array<{ filename: string; content: string }> = [];

  if (attachment instanceof File && attachment.size > 0) {
    if (attachment.size > MAX_FILE_BYTES) {
      return NextResponse.json({ message: "The file must be 3 MB or smaller." }, { status: 400 });
    }
    if (!ALLOWED_FILE_TYPES.has(attachment.type)) {
      return NextResponse.json(
        { message: "Upload a JPG, PNG, WebP, GIF, PDF or MP4 file." },
        { status: 400 }
      );
    }
    attachments.push({
      filename: attachment.name.replace(/[^a-zA-Z0-9._-]/g, "_"),
      content: Buffer.from(await attachment.arrayBuffer()).toString("base64"),
    });
  }

  const safe = {
    firstName: escapeHtml(firstName),
    lastName: escapeHtml(lastName),
    email: escapeHtml(email),
    storeUrl: escapeHtml(storeUrl),
    product: escapeHtml(product),
    themeVersion: escapeHtml(themeVersion || "Not provided"),
    collaboratorCode: escapeHtml(collaboratorCode || "Not provided"),
    description: escapeHtml(description).replaceAll("\n", "<br>"),
  };

  await sendEmail(
    {
      from,
      to: [SUPPORT_EMAIL],
      reply_to: email,
      subject: `${product} support request from ${firstName} ${lastName}`,
      html: `<h1>New support request</h1><p><strong>Name:</strong> ${safe.firstName} ${safe.lastName}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Store:</strong> ${safe.storeUrl}</p><p><strong>Product:</strong> ${safe.product}</p><p><strong>Theme version:</strong> ${safe.themeVersion}</p><p><strong>Collaborator code:</strong> ${safe.collaboratorCode}</p><p><strong>Problem:</strong><br>${safe.description}</p>`,
      attachments,
    },
    apiKey
  );

  await sendEmail(
    {
      from,
      to: [email],
      subject: "We have received your Obarito support request",
      html: `<p>Hi ${safe.firstName},</p><p>Thanks for getting in touch. We have received your request about ${safe.storeUrl} and will reply within one business day, Monday to Friday.</p><p><strong>What you sent:</strong><br>${safe.description}</p><p>Deckle documentation: <a href="https://obarito.com/deckle/docs">https://obarito.com/deckle/docs</a></p><p>If you plan to change theme code, duplicate the theme first under Online Store, Themes, then work on the copy.</p><p>Obarito</p>`,
    },
    apiKey
  );

  return NextResponse.json({ ok: true });
}
