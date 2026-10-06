import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AttestaHeader from "@/components/AttestaHeader";
import AttestaFooter from "@/components/AttestaFooter";
import { ATTESTA_APPSTORE_URL, SUPPORT_EMAIL } from "@/lib/config";
import { breadcrumbJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Attesta Anleitung - So funktioniert die App",
  description:
    "Anleitung zu Attesta: Einrichtung, Rechnungen, Steuerbehandlung, VIES-Prüfung, Erstattungen, Vorlagen, Tarife sowie DATEV- und GoBD-Exporte.",
  path: "/attesta/docs",
  locale: "de_DE",
  languages: {
    "de-DE": "/attesta/docs",
    en: "/en/attesta/docs",
    "x-default": "/attesta/docs",
  },
});

const faqSchema = faqJsonLd([
  {
    question: "Reicht eine PDF-Rechnung nicht aus?",
    answer:
      "Nein. Betroffene B2B-Rechnungen müssen ab Januar 2027 strukturierte, maschinenlesbare Daten enthalten. ZUGFeRD bettet diese Daten in das PDF ein.",
  },
  {
    question: "Beginnt Attesta meine Rechnungsnummernfolge neu?",
    answer:
      "Nein. Trage die zuletzt vergebene Nummer ein. Attesta setzt die Folge anschließend fort.",
  },
  {
    question: "Verlangsamt Attesta meinen Shopify-Shop?",
    answer:
      "Nein. Attesta arbeitet über Shopify-Webhooks im Hintergrund und lädt keine zusätzlichen Ressourcen im Storefront.",
  },
  {
    question: "Was passiert mit meinen Daten, wenn ich Attesta deinstalliere?",
    answer:
      "Der Zugriff wird entzogen und Shopify fordert die Löschung der Shop-Daten an. Exportiere vor der Deinstallation alle Unterlagen, die du weiterhin aufbewahren musst.",
  },
]);

type TocItem = { id: string; label: string };

const toc: TocItem[] = [
  { id: "overview", label: "Was Attesta macht" },
  { id: "start", label: "Erste Schritte" },
  { id: "dashboard", label: "Dashboard" },
  { id: "invoices", label: "Rechnungen" },
  { id: "tax", label: "Steuerbehandlung" },
  { id: "vatid", label: "USt-IdNr. und VIES" },
  { id: "storno", label: "Erstattungen und Korrekturen" },
  { id: "template", label: "Rechnungsgestaltung" },
  { id: "settings", label: "Einstellungen" },
  { id: "exports", label: "Archiv und Exporte" },
  { id: "plans", label: "Tarife und Abrechnung" },
  { id: "faq", label: "FAQ und Fehlerbehebung" },
];

/** Inline badge marking a feature that needs the Accounting plan. */
function PlanTag({ children }: { children: string }) {
  return (
    <span className="ml-2 inline-flex items-center rounded-[6px] bg-[#E8F5EE] px-2 py-[2px] align-middle font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0F6B4A]">
      {children}
    </span>
  );
}

/**
 * A captioned figure, framed to match the app's card style. The images are cropped out of
 * the App Store artwork by `_dev/brand/gen/crop_docs.sh` in the Attesta repo, so their
 * intrinsic sizes differ and each one passes its own.
 */
function Figure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="my-7">
      <div className="overflow-hidden rounded-[12px] border border-[#E6EDEA] bg-[#F5F8F7]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 744px"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-2.5 text-[13px] leading-[1.55] text-[#64746E]">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function AttestaDocsPage() {
  return (
    <div lang="de-DE" className="attesta-scope">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Obarito", path: "/" },
            { name: "Attesta", path: "/attesta" },
            { name: "Anleitung", path: "/attesta/docs" },
          ]),
          faqSchema,
        ]}
      />
      <AttestaHeader alternatePath="/en/attesta/docs" />

      {/* Title block */}
      <section className="mx-auto max-w-[1000px] px-5 pt-[clamp(44px,6vw,72px)] sm:px-8">
        <Breadcrumbs
          items={[
            { name: "Obarito", path: "/" },
            { name: "Attesta", path: "/attesta" },
            { name: "Anleitung" },
          ]}
        />
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#0E8058]">
          Attesta · Anleitung
        </div>
        <h1 className="m-0 mb-[18px] text-[clamp(34px,5vw,48px)] font-semibold tracking-[-0.035em] text-[#16202E]">
          So funktioniert Attesta
        </h1>
        <p className="m-0 mb-[26px] max-w-[640px] text-[18px] leading-[1.6] text-[#5A6B80]">
          Bei der Installation beantwortest du etwa fünf Fragen. Danach erstellt
          Attesta die Rechnung für jede bezahlte Bestellung automatisch. Diese
          Anleitung erklärt die einzelnen Bereiche der App.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={ATTESTA_APPSTORE_URL}
            className="rounded-[9px] bg-[#0F4B3C] px-[18px] py-[10px] text-[14px] font-medium text-white"
          >
            Attesta installieren
          </a>
          <Link
            href="/support"
            className="rounded-[9px] border border-[#D9E4E0] px-[18px] py-[10px] text-[14px] font-medium text-[#33463F]"
          >
            Support kontaktieren
          </Link>
        </div>
        <div className="mt-[26px] border-b border-[#E6EDEA] pb-2 font-mono text-[12px] text-[#64746E]">
          ZULETZT AKTUALISIERT · 7. Oktober 2026
        </div>
      </section>

      {/* Body: sticky TOC + content */}
      <section className="mx-auto grid max-w-[1000px] grid-cols-1 items-start gap-10 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-[200px_1fr] md:gap-[56px]">
        <nav className="toc top-[90px] hidden md:sticky md:block">
          <div className="mb-[14px] font-mono text-[10px] uppercase tracking-[0.14em] text-[#64746E]">
            Auf dieser Seite
          </div>
          <div className="flex flex-col gap-2.5">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[13.5px] text-[#5A6B80]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="legal-body">
          <h2 id="overview">Was Attesta macht</h2>
          <p>
            Attesta verarbeitet deine bezahlten Shopify-Bestellungen. Sobald eine
            Bestellung bezahlt ist, wählt die App die passende deutsche
            Steuerbehandlung, vergibt die nächste Rechnungsnummer, erstellt die
            Rechnung in deinem Design, bettet die maschinenlesbare XML-Datei ein,
            archiviert das Dokument für zehn Jahre und versendet es per E-Mail.
            Du musst die Bestellung dafür nicht öffnen.
          </p>
          <p>
            Das Ergebnis ist eine <strong>ZUGFeRD-2.2-Rechnung</strong>: eine
            lesbare PDF/A-3-Datei mit eingebetteten CII-XML-Daten nach{" "}
            <strong>EN 16931</strong>. Diese strukturierten Daten fehlen in einer
            einfachen PDF-Rechnung. Für öffentliche Auftraggeber mit Leitweg-ID
            erstellt Attesta stattdessen eine <strong>XRechnung 3.0</strong>.
          </p>
          <p>
            Attesta ist für Unternehmen in Deutschland entwickelt. Shops mit Sitz
            außerhalb Deutschlands werden nicht unterstützt.
          </p>

          <h2 id="start">Erste Schritte</h2>
          <p>
            Nach der Installation aus dem Shopify App Store führt dich ein kurzer
            Assistent durch die Einrichtung. Du beantwortest etwa fünf Fragen,
            danach ist die App einsatzbereit.
          </p>
          <ul>
            <li>
              <strong>Unternehmens- und Steuerdaten.</strong> Hinterlege den
              rechtlichen Namen, die Anschrift, USt-IdNr. und Steuernummer sowie
              die Angabe, ob du die Kleinunternehmerregelung nach § 19 UStG nutzt.
              Diese Daten erscheinen auf jeder Rechnung. Verwende deshalb die
              eingetragenen Unternehmensdaten und nicht nur den Shopnamen.
            </li>
            <li>
              <strong>Rechnungsregeln.</strong> Lege fest, ob Attesta Rechnungen
              nach der Zahlung automatisch oder erst nach deiner Freigabe erstellt,
              wie die Nummerierung aufgebaut ist und ob USt-IdNr. von
              Geschäftskunden erfasst werden sollen. Wenn du bereits einen
              Nummernkreis verwendest, trägst du die zuletzt vergebene Nummer ein.
              Attesta setzt die Reihe dort fort.
            </li>
            <li>
              <strong>Abschluss.</strong> Währung, Kundenanschriften, Positionen
              und Steuersätze übernimmt Attesta aus deinem Shop.
            </li>
          </ul>
          <p>
            Die Einrichtung bleibt bewusst kurz. Alles Weitere ist entweder schon
            in deinem Shop hinterlegt oder durch die gesetzlichen Vorgaben bestimmt.
          </p>

          <h2 id="dashboard">Dein Dashboard</h2>
          <p>
            Auf der Startseite siehst du, ob für deinen Shop noch etwas zu tun ist.
            Die Statuskarte zeigt das Ergebnis und die vier zugrunde liegenden
            Prüfungen: ZUGFeRD- und XRechnung-Erstellung, lückenlose Nummerierung,
            Umsatzsteuerlogik einschließlich Reverse-Charge sowie das zehnjährige
            GoBD-Archiv.
          </p>
          <p>
            Darunter findest du den Countdown bis Januar 2027, Zähler für die
            Rechnungen des laufenden Monats, Stornorechnungen und offene
            Bestellungen. Eine Checkliste erinnert an Logo, IBAN, Zahlungsangaben
            und DATEV-Einrichtung. Außerdem werden die zuletzt erstellten Dokumente
            angezeigt. Alle Werte stammen aus deinen tatsächlichen Daten.
          </p>
          <p>
            Im kostenlosen Tarif zeigt die Seite außerdem, wie viele Rechnungen du
            im laufenden Monat bereits erstellt hast.
          </p>
          <Figure
            src="/attesta/docs/dashboard.png"
            alt="Attesta-Dashboard mit Statuskarte, Countdown bis Januar 2027, Monatszählern, Einrichtungscheckliste und letzten Aktivitäten"
            width={890}
            height={690}
            caption="Die Startseite zeigt den Status mit vier Prüfungen, den Countdown bis Januar 2027, die Monatswerte, offene Einrichtungsschritte und die zuletzt erstellten Dokumente."
          />

          <h2 id="invoices">Deine Rechnungen</h2>
          <p>
            Unter <strong>Rechnungen</strong> findest du alle von Attesta erstellten
            Dokumente, beginnend mit dem neuesten. Jede Zeile zeigt Nummer und
            Dokumenttyp, die zugehörige Bestellung, den Käufer, die angewandte
            Steuerbehandlung, den Status sowie PDF und XML. Du kannst suchen und
            nach Dokumenttyp filtern. Über <strong>Export</strong> lädst du das
            vollständige Journal als GoBD-ZIP-Datei herunter.
          </p>
          <Figure
            src="/attesta/docs/invoices.png"
            alt="Attesta-Rechnungsliste mit Dokumentnummer, Typ, Bestellung, Käufer, Steuerbehandlung, Status sowie PDF- und XML-Links"
            width={1404}
            height={538}
            caption="Alle von Attesta erstellten Dokumente mit angewandter Steuerbehandlung sowie den zugehörigen PDF- und XML-Dateien."
          />
          <p>Beim Öffnen eines Dokuments siehst du den Beleg übersichtlich aufbereitet:</p>
          <ul>
            <li>
              Eine Vorschau der erstellten Rechnung und die <strong>XML</strong> in
              einem eigenen Tab.
            </li>
            <li>
              Ein <strong>Prüfprotokoll</strong> für Erstellung, Validierung und
              Archivierung einschließlich des GoBD-Hashwerts.
            </li>
            <li>
              <strong>Versand und Format</strong> mit Angaben zum ausgegebenen
              Format, etwa ZUGFeRD 2.2, EN 16931 und PDF/A-3.
            </li>
            <li>
              Den gespeicherten <strong>VIES-Nachweis</strong>, wenn der Käufer
              eine USt-IdNr. angegeben hat.
            </li>
          </ul>
          <p>
            Über <strong>Download</strong> lädst du genau die archivierte Datei
            herunter, nicht eine neu erzeugte Version. Einen Button zum manuellen
            Erstellen gibt es hier nicht, denn jedes Dokument gehört zu einer
            bezahlten Bestellung.
          </p>
          <Figure
            src="/attesta/docs/invoice-detail.png"
            alt="Attesta-Rechnungsansicht mit Rechnungsvorschau, XML-Tab, Prüfprotokoll, Ausgabeformat und VIES-Nachweis"
            width={966}
            height={826}
            caption="Die Dokumentansicht enthält Rechnung und XML sowie das Prüfprotokoll, das Ausgabeformat und den gespeicherten VIES-Nachweis."
          />
          <p>
            Kann Attesta eine Bestellung nicht abrechnen, wird das Problem sichtbar
            erfasst. Die Anzahl offener Fälle erscheint auf der Startseite. Unter
            <strong>Probleme</strong> kannst du die Ursache beheben und die
            Verarbeitung erneut starten.
          </p>

          <h2 id="tax">Steuerbehandlung</h2>
          <p>
            Attesta bestimmt die Steuerbehandlung für jede Bestellung anhand der
            Käuferdaten. Du musst dafür keine Einstellung manuell wechseln:
          </p>
          <ul>
            <li>
              <strong>Regelbesteuerung</strong> mit 19 % oder 7 % deutscher
              Umsatzsteuer bei einem Verkauf innerhalb Deutschlands.
            </li>
            <li>
              <strong>Reverse-Charge (§ 13b UStG)</strong> bei einem
              Geschäftskunden in einem anderen EU-Land mit gültiger USt-IdNr. Die
              Rechnung weist 0 % Steuer und den entsprechenden Hinweis aus.
            </li>
            <li>
              <strong>Innergemeinschaftliche Lieferung</strong> mit 0 % bei Waren,
              die an ein umsatzsteuerlich registriertes Unternehmen in einem
              anderen EU-Land geliefert werden. Die USt-IdNr. dient als Nachweis.
            </li>
            <li>
              <strong>Ausfuhrlieferung (§ 6 UStG)</strong> ohne Umsatzsteuer für
              Waren, die die EU verlassen.
            </li>
            <li>
              <strong>Kleinunternehmer (§ 19 UStG)</strong>, wenn du dies bei der
              Einrichtung angegeben hast. Die Rechnung weist keine Umsatzsteuer,
              sondern den Hinweis nach § 19 UStG aus.
            </li>
          </ul>
          <p>
            Die Steuerbehandlung bestimmt den rechtlichen Hinweis auf der Rechnung
            und die Steuercodes in der XML-Datei. Sie wird außerdem direkt in der
            Rechnungsliste angezeigt.
          </p>

          <h2 id="vatid">USt-IdNr. und VIES</h2>
          <p>
            Reverse-Charge setzt eine gültige USt-IdNr. des Käufers voraus. Attesta
            erfasst sie deshalb vor der Zahlung. Geschäftskunden können die Nummer
            im <strong>Checkout</strong>, im <strong>Warenkorb</strong> oder in
            ihrem <strong>Kundenkonto</strong> eingeben.
          </p>
          <p>
            Attesta prüft die Nummer über <strong>VIES</strong>, den Dienst der
            Europäischen Kommission zur Prüfung von Umsatzsteuer-Identifikationsnummern.
            Das Prüfergebnis wird zusammen mit der Rechnung gespeichert und in der
            Dokumentansicht angezeigt.
          </p>
          <Figure
            src="/attesta/docs/vat-id.png"
            alt="Formular für Unternehmensdaten im Checkout mit geprüfter EU-USt-IdNr. und Hinweis zur gespeicherten VIES-Prüfung"
            width={710}
            height={620}
            caption="Der Geschäftskunde gibt seine USt-IdNr. vor der Zahlung ein. Attesta prüft sie über VIES und speichert das Ergebnis mit der Rechnung."
          />

          <h2 id="storno">Erstattungen und Korrekturen</h2>
          <p>
            Eine ausgestellte Rechnung wird nicht nachträglich verändert. Die
            Korrektur erfolgt über eine <strong>Stornorechnung</strong>, die Attesta
            für dich erstellt.
          </p>
          <ul>
            <li>
              <strong>Erstattest du eine bezahlte Bestellung</strong>, erstellt
              Attesta eine Gutschrift nach EN 16931. Sie storniert den erstatteten
              Betrag, verweist auf die ursprüngliche Rechnung und erhält die
              nächste Nummer im selben Nummernkreis.
            </li>
            <li>
              <strong>Bearbeitest du eine bezahlte Bestellung</strong>, vergleicht
              Attesta sie mit der gespeicherten Rechnung. Haben sich Beträge oder
              Umsatzsteuer geändert, wird die alte Rechnung vollständig storniert
              und eine korrigierte Rechnung erstellt. Der Käufer erhält zuerst die
              Stornierung und anschließend die neue Rechnung.
            </li>
            <li>
              Änderungen ohne Auswirkung auf den Betrag, etwa Tags, Notizen,
              Fulfillment oder eine korrigierte Anschrift, erzeugen kein neues
              Dokument.
            </li>
            <li>
              Bleibt nach einer Bearbeitung kein abrechenbarer Betrag übrig, wird
              die Rechnung ohne Ersatz storniert.
            </li>
          </ul>
          <Figure
            src="/attesta/docs/storno.png"
            alt="Erstattung mit ursprünglicher Rechnung und zugehöriger Stornorechnung samt negativem Betrag, Referenz und Dokumenttyp 381"
            width={780}
            height={520}
            caption="Bei einer Erstattung entsteht eine Gutschrift, die den Betrag storniert, auf die ursprüngliche Rechnung verweist und die nächste Nummer im selben Nummernkreis erhält."
          />

          <h2 id="template">Deine Rechnungsgestaltung</h2>
          <p>
            Unter <strong>Rechnungsvorlage</strong> passt du die Rechnung an dein
            Erscheinungsbild an. Der Editor besteht aus drei Bereichen.
          </p>
          <ul>
            <li>
              Links stehen die Bausteine der Rechnung. Empfänger, Positionen,
              Summen, Zahlungsangaben, Hinweise und Fußzeile lassen sich per
              Drag-and-drop anordnen. Gesetzlich erforderliche Bausteine sind
              gesperrt und können nicht versehentlich entfernt werden.
            </li>
            <li>
              In der Mitte siehst du eine Live-Vorschau. Du kannst verschiedene
              Steuerfälle einschließlich einer Gutschrift auswählen und so vorab
              prüfen, wie etwa eine Reverse-Charge- oder §-19-Rechnung aussieht.
              Ein Klick in die Vorschau wählt den jeweiligen Baustein aus.
            </li>
            <li>
              Rechts findest du die Tabs für Baustein, Marke und Vorlage. Dort
              bestimmst du sichtbare Positionsspalten, Logo, Akzentfarbe,
              Schriftart und Grundlayout.
            </li>
          </ul>
          <p>
            Die Gestaltung verändert keine Rechnungswerte. Jede verfügbare Vorlage
            enthält die erforderlichen Felder nach EN 16931.
          </p>
          <Figure
            src="/attesta/docs/template.png"
            alt="Attesta-Vorlageneditor mit Liste der Rechnungsbausteine, gekennzeichneten Pflichtbausteinen und Live-Vorschau in der Akzentfarbe des Shops"
            width={750}
            height={570}
            caption="Links stehen die Rechnungsbausteine, daneben die Live-Vorschau. Erforderliche Bausteine sind gesperrt."
          />

          <h2 id="settings">Einstellungen</h2>
          <p>Die Einstellungen sind in fünf Bereiche gegliedert.</p>
          <ul>
            <li>
              <strong>Unternehmen und Steuern.</strong> Hier bearbeitest du
              Unternehmensdaten, Steuerkennzeichen und die Einstellung zur
              Kleinunternehmerregelung.
            </li>
            <li>
              <strong>Rechnungsregeln.</strong> Hier legst du die automatische oder
              manuelle Erstellung, den Nummernkreis und die Erfassung von USt-IdNr.
              bei Geschäftskunden fest.
            </li>
            <li>
              <strong>Versand.</strong> Passe Betreff, Nachricht und Antwortadresse
              der Rechnungs-E-Mail an. Außerdem hinterlegst du IBAN, BIC,
              Zahlungsbedingungen und das Zahlungsziel in Tagen.
            </li>
            <li>
              <strong>Buchhaltung.</strong> Trage die E-Mail-Adresse deiner
              Steuerberatung, DATEV-Berater- und Mandantennummer sowie SKR03 oder
              SKR04 ein. Die acht verwendeten Konten lassen sich bei einem
              individuellen Kontenplan anpassen.
            </li>
            <li>
              <strong>Erweitert.</strong> Hier verwaltest du die Standard-Leitweg-ID
              für öffentliche Auftraggeber, den Versand von B2G-Rechnungen als
              XRechnung sowie Angaben zum GoBD-Archiv und Datenexport.
            </li>
          </ul>
          <p>
            Am Ende der Seite findest du die Ländereinstellungen. Für Deutschland
            ist kein Übertragungsnetz erforderlich, da die Rechnung per E-Mail an
            den Käufer gesendet wird.
          </p>

          <h2 id="exports">Archiv und Exporte</h2>
          <p>
            Attesta speichert jedes erstellte Dokument zusammen mit seiner XML-Datei,
            einem SHA-256-Hash und einer Momentaufnahme der verwendeten Vorlage. Der
            Hash ist mit dem vorherigen Dokument verkettet und macht nachträgliche
            Änderungen erkennbar. Das Standardarchiv von Attesta bewahrt Rechnungen
            zehn Jahre lang auf. Die allgemeine gesetzliche Aufbewahrungsfrist für
            Rechnungen beträgt acht Jahre. In bestimmten Fällen können längere
            Fristen gelten. Dein Unternehmen bleibt dafür verantwortlich, die
            jeweils maßgebliche Frist zu prüfen.
          </p>
          <p>Drei Exporte stehen zur Verfügung:</p>
          <ul>
            <li>
              <strong>GoBD-ZIP</strong> aus der Rechnungsliste oder dem Bereich
              „Erweitert“. Das Archiv enthält XML und PDF jedes Dokuments sowie
              eine Manifestdatei mit der Hashkette. Es kann auch für eine
              DSGVO-Datenauskunft verwendet werden.
            </li>
            <li>
              <strong>Verfahrensdokumentation</strong> als deutsches PDF, das mit
              deinen Angaben und der Beschreibung des Ablaufs vorausgefüllt wird.
              Einige unternehmensspezifische Stellen bleiben als sichtbare
              Platzhalter für deine Ergänzungen offen.
            </li>
            <li>
              <strong>DATEV-Buchungsstapel</strong> im EXTF-Format für einen
              ausgewählten Zeitraum. Bei Rechnungen mit mehreren Steuersätzen wird
              je Steuersatzgruppe eine Zeile erzeugt und deinem SKR03- oder
              SKR04-Konto zugeordnet. Der Zeitraum muss innerhalb eines
              Wirtschaftsjahres liegen. Berater- und Mandantennummer sind für den
              Import erforderlich. Die Buchungen werden nicht als festgeschrieben
              markiert und können vor der Verbuchung geprüft werden.
              <PlanTag>Accounting</PlanTag>
            </li>
          </ul>
          <p>
            Das GoBD-ZIP ist in jedem Tarif einschließlich Free verfügbar. Für den
            DATEV-Buchungsstapel benötigst du den Accounting-Tarif.
          </p>
          <Figure
            src="/attesta/docs/archive.png"
            alt="Drei verkettete Archivdokumente mit eigenem SHA-256-Hash und dem Hash des vorherigen Dokuments sowie einer GoBD-ZIP-Exportfunktion"
            width={780}
            height={560}
            caption="Jedes Dokument enthält einen eigenen SHA-256-Hash und den Hash des vorherigen Dokuments. So werden nachträgliche Änderungen erkennbar."
          />
          <Figure
            src="/attesta/docs/datev.png"
            alt="DATEV-Export mit Zeitraum, SKR03-Kontenplan und Vorschau der EXTF-Buchungszeilen"
            width={780}
            height={560}
            caption="Der DATEV-Export enthält Zeitraum, Kontenplan und die EXTF-Buchungszeilen für die Steuerberatung."
          />

          <h2 id="plans">Tarife und Abrechnung</h2>
          <p>
            Alle bezahlten Tarife enthalten die Funktionen für die Rechnungserstellung.
            Sie unterscheiden sich nach Umfang und Buchhaltungsablauf, nicht nach
            der Gültigkeit der erstellten Rechnungen.
          </p>
          <ul>
            <li>
              <strong>Free, 0 $</strong>: ZUGFeRD und XRechnung, manuelle oder
              automatische Erstellung, E-Mail-Versand und Nummerierung. Der
              Richtwert liegt bei 25 Rechnungen pro Monat. Danach empfiehlt Attesta
              ein Upgrade, erstellt Rechnungen aber weiterhin. Im kostenlosen Tarif
              steht auf der sichtbaren Rechnung klein „Erstellt mit Attesta“. Die
              XML-Datei bleibt davon unberührt.
            </li>
            <li>
              <strong>Compliance, 9 $ pro Monat</strong> oder 90 $ pro Jahr als
              Einmalzahlung: unbegrenzte Rechnungen, automatische Stornorechnungen,
              USt-IdNr.-Erfassung mit VIES, automatische Reverse-Charge-Behandlung
              und das zehnjährige GoBD-Archiv.
            </li>
            <li>
              <strong>Accounting, 19 $ pro Monat</strong> oder 190 $ pro Jahr als
              Einmalzahlung: alle Funktionen aus Compliance sowie DATEV-Paket,
              Übernahme des Nummernkreises, Verfahrensdokumentation und CSV-Export.
            </li>
          </ul>
          <p>
            Die Abrechnung erfolgt in US-Dollar über Shopify und erscheint auf
            deiner regulären Shopify-Rechnung. Der Jahrestarif kostet so viel wie
            zehn Monate und spart damit 16,67 %. Du kannst den Tarif jederzeit in
            der App wechseln oder kündigen. Nach einer Kündigung wechselst du zu
            Free und Attesta erstellt weiterhin E-Rechnungen.
          </p>

          <h2 id="faq">FAQ und Fehlerbehebung</h2>
          <p>
            <strong>Reicht eine PDF-Rechnung nicht aus?</strong> Betroffene
            B2B-Rechnungen müssen ab Januar 2027 strukturierte, maschinenlesbare
            Daten enthalten. ZUGFeRD bettet diese Daten in die PDF-Datei ein, sodass
            dieselbe Datei für den Käufer und seine Software nutzbar ist.
          </p>
          <p>
            <strong>Ich habe bereits einen Rechnungsnummernkreis. Beginnt er von
            vorn?</strong> Nein. Gib bei der Einrichtung oder später unter
            „Rechnungsregeln“ die zuletzt verwendete Nummer ein. Attesta setzt den
            Nummernkreis lückenlos fort.
          </p>
          <p>
            <strong>Mein Shop sitzt nicht in Deutschland.</strong> Attesta ist für
            Unternehmen entwickelt, die nach deutschen Vorgaben abrechnen. Andere
            Länder werden nicht unterstützt.
          </p>
          <p>
            <strong>Verlangsamt Attesta meinen Shop?</strong> Nein. Attesta arbeitet
            über Shopify-Webhooks im Hintergrund und lädt keine zusätzlichen
            Ressourcen im Storefront. Eine Rechnung erscheint normalerweise
            innerhalb einer Minute nach der Zahlung.
          </p>
          <p>
            <strong>Mein Käufer hat die Rechnungs-E-Mail nicht erhalten.</strong>
            Prüfe unter „Versand“ die Antwortadresse und den Nachrichtentext. Ist
            das Dokument archiviert, kannst du es herunterladen und selbst senden,
            während du die Adresse klärst.
          </p>
          <p>
            <strong>Was passiert bei der Deinstallation mit meinen Daten?</strong>
            Der Zugriff wird sofort entzogen. Anschließend fordert Shopify die
            Löschung der Shop-Daten an. Exportiere vorher das GoBD-ZIP, denn deine
            Aufbewahrungspflichten gelten nach der Deinstallation weiter. Weitere
            Informationen findest du in der{" "}
            <Link href="/attesta/privacy">Datenschutzerklärung</Link>.
          </p>
          <div className="mt-9 rounded-[12px] border border-[#E6EDEA] bg-[#F5F8F7] px-[22px] py-[18px] text-[15px] leading-[1.65] text-[#3a4654]">
            <strong>Du brauchst Hilfe?</strong> Schreibe an{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> und nenne deine{" "}
            <strong>.myshopify.com</strong>-Adresse sowie die Rechnungsnummer. Wir
            melden uns am selben Werktag.
          </div>
        </div>
      </section>

      <AttestaFooter />
    </div>
  );
}
