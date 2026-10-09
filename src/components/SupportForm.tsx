"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export default function SupportForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "We could not send your request.");
      }

      event.currentTarget.reset();
      setState("sent");
      setMessage(
        "Thanks, we have received your request. A copy is on its way to your inbox, and we will reply within one business day."
      );
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please email support@obarito.com."
      );
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-[10px] border border-[#CBD5E1] bg-white px-4 py-3 text-[15px] text-[#0B0F17] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20";

  return (
    <form onSubmit={handleSubmit} className="rounded-[20px] border border-[#E2E8F0] bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="text-[14px] font-medium text-[#334155]">
          First name
          <input className={fieldClass} name="firstName" autoComplete="given-name" required />
        </label>
        <label className="text-[14px] font-medium text-[#334155]">
          Last name
          <input className={fieldClass} name="lastName" autoComplete="family-name" required />
        </label>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="text-[14px] font-medium text-[#334155]">
          Email
          <input className={fieldClass} name="email" type="email" autoComplete="email" required />
        </label>
        <label className="text-[14px] font-medium text-[#334155]">
          Store URL
          <input
            className={fieldClass}
            name="storeUrl"
            type="text"
            inputMode="url"
            placeholder="your-store.myshopify.com"
            required
          />
        </label>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="text-[14px] font-medium text-[#334155]">
          Product
          <select className={fieldClass} name="product" required defaultValue="">
            <option value="" disabled>
              Choose a product
            </option>
            <option>Deckle theme</option>
            <option>Attesta</option>
            <option>Rewindly</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-[14px] font-medium text-[#334155]">
          Theme version <span className="font-normal text-[#64748B]">(optional)</span>
          <input className={fieldClass} name="themeVersion" placeholder="For example, 1.0.0" />
        </label>
      </div>

      <label className="mt-5 block text-[14px] font-medium text-[#334155]">
        Collaborator request code <span className="font-normal text-[#64748B]">(optional)</span>
        <input className={fieldClass} name="collaboratorCode" inputMode="numeric" />
        <span className="mt-2 block text-[12.5px] font-normal leading-[1.5] text-[#64748B]">
          Find it in Shopify under Settings, then Users and permissions. It lets us request access if needed.
        </span>
      </label>

      <label className="mt-5 block text-[14px] font-medium text-[#334155]">
        Problem description
        <textarea
          className={`${fieldClass} min-h-[150px] resize-y`}
          name="description"
          placeholder="Tell us what happens, on which page, and what you expected. Include a link if you can."
          required
        />
      </label>

      <label className="mt-5 block text-[14px] font-medium text-[#334155]">
        File <span className="font-normal text-[#64748B]">(optional)</span>
        <input
          className={`${fieldClass} file:mr-4 file:rounded-[7px] file:border-0 file:bg-[#EEF2FF] file:px-3 file:py-2 file:text-[13px] file:font-medium file:text-[#1D4ED8]`}
          name="file"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,application/pdf,video/mp4"
        />
        <span className="mt-2 block text-[12.5px] font-normal leading-[1.5] text-[#64748B]">
          Screenshot, PDF or short MP4, up to 3 MB. Email larger files to support@obarito.com.
        </span>
      </label>

      <label className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        Company website
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-[9px] bg-[#0B0F17] px-6 py-3 text-[14px] font-medium text-white disabled:cursor-wait disabled:opacity-60"
        >
          {state === "sending" ? "Sending..." : "Send request"}
        </button>
        <p
          className={`m-0 max-w-[560px] text-[14px] leading-[1.5] ${
            state === "error" ? "text-[#B42318]" : "text-[#3A4654]"
          }`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      </div>
    </form>
  );
}
