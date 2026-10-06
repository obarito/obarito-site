import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { type TocItem } from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Auftragsverarbeitungsvertrag - Attesta",
  description:
    "Vereinbarung nach Art. 28 DSGVO zur Verarbeitung personenbezogener Käuferdaten durch Obarito bei der Rechnungserstellung mit Attesta.",
  path: "/attesta/dpa",
  locale: "de_DE",
  languages: {
    "de-DE": "/attesta/dpa",
    en: "/en/attesta/dpa",
    "x-default": "/attesta/dpa",
  },
});

const toc: TocItem[] = [
  { id: "parties", label: "Parteien und Geltungsbereich" },
  { id: "subject", label: "Gegenstand und Dauer" },
  { id: "nature", label: "Art und Zweck" },
  { id: "categories", label: "Daten und betroffene Personen" },
  { id: "instructions", label: "Ihre Weisungen" },
  { id: "confidentiality", label: "Vertraulichkeit" },
  { id: "security", label: "Sicherheitsmaßnahmen" },
  { id: "retention", label: "Aufbewahrung und Löschung" },
  { id: "subprocessors", label: "Unterauftragsverarbeiter" },
  { id: "assistance", label: "Unsere Unterstützung" },
  { id: "breach", label: "Meldung von Verletzungen" },
  { id: "audit", label: "Prüfung" },
  { id: "termination", label: "Vertragsende" },
  { id: "contact", label: "Kontakt" },
];

export default function AttestaDpaPage() {
  return (
    <LegalLayout
      path="/attesta/dpa"
      title="Auftragsverarbeitungsvertrag"
      intro={`Attesta erstellt Rechnungen und verarbeitet dabei personenbezogene Daten Ihrer Käufer in Ihrem Auftrag. Dieser Vertrag regelt die Verarbeitung nach Art. 28 DSGVO. Er tritt mit der Installation der App in Kraft und gilt für deren Dauer. Eine gesonderte Unterzeichnung ist nicht erforderlich.`}
      toc={toc}
      active="privacy"
      brand="attesta"
      lastUpdated="7. Oktober 2026"
      effectiveDate="28. August 2026"
    >
      <h2 id="parties">Parteien und Geltungsbereich</h2>
      <p>
        Sie als Händler, der Attesta installiert hat, sind{" "}
        <strong>Verantwortlicher</strong> für die personenbezogenen Daten Ihrer
        Käufer. Obarito betreibt Attesta und ist für diese Daten Ihr{" "}
        <strong>Auftragsverarbeiter</strong>.
      </p>
      <p>
        Dieser Vertrag gilt nur für dieses Auftragsverhältnis. Daten über Sie und
        Ihren Shop, darunter Konto-, Verkäufer- und Abrechnungsdaten, verarbeitet
        Obarito als Verantwortlicher nach der{" "}
        <Link href="/attesta/privacy">Datenschutzerklärung</Link>. Widersprechen sich
        dieser Vertrag und die{" "}
        <Link href="/attesta/terms">Nutzungsbedingungen</Link> hinsichtlich
        personenbezogener Daten, hat dieser Vertrag Vorrang.
      </p>

      <h2 id="subject">Gegenstand und Dauer</h2>
      <p>
        Wir erstellen aus Ihren bezahlten Shopify-Bestellungen deutsche
        E-Rechnungen, validieren sie nach EN 16931, archivieren sie und senden sie,
        sofern aktiviert, an Ihre Käufer. Die Verarbeitung erfolgt für die Dauer
        der Installation. Für archivierte Rechnungen gilt die unten beschriebene
        Aufbewahrungsdauer.
      </p>

      <h2 id="nature">Art und Zweck der Verarbeitung</h2>
      <p>
        Die Verarbeitung erfolgt automatisiert zur Erstellung, Validierung,
        Archivierung, Ausfuhr und Zustellung von Rechnungen nach § 14 UStG, GoBD
        und EN 16931. Wir verwenden Käuferdaten nicht für andere Zwecke. Wir
        verkaufen sie nicht, geben sie nicht zu Marketingzwecken weiter, erstellen
        keine Profile, reichern sie nicht mit externen Quellen an und nutzen sie
        nicht zum Trainieren von Machine-Learning-Modellen.
      </p>

      <h2 id="categories">Daten und betroffene Personen</h2>
      <p>
        Betroffene Personen sind Ihre Kunden und bei Geschäftskunden die für das
        jeweilige Unternehmen handelnden Personen. Wir verarbeiten Name oder
        Firmenname, Rechnungsanschrift, E-Mail-Adresse, gegebenenfalls USt-IdNr.
        sowie den Inhalt der Bestellung. Eine vollständige Übersicht und die
        jeweiligen Verarbeitungszwecke enthält die{" "}
        <Link href="/attesta/privacy">Datenschutzerklärung</Link>.
      </p>
      <p>
        Wir erheben nur die für die Aufgabe erforderlichen Daten. Telefonnummern
        werden nicht angefordert oder verwendet.
      </p>

      <h2 id="instructions">Ihre Weisungen</h2>
      <p>
        Wir verarbeiten Käuferdaten nur auf Ihre dokumentierte Weisung. Die
        Einstellungen der App und dieser Vertrag bilden diese Weisungen. Halten wir
        eine Weisung für datenschutzwidrig, informieren wir Sie und können ihre
        Ausführung ablehnen.
      </p>
      <p>
        Für Löschanfragen zu Käufern mit bereits ausgestellter Rechnung gilt: Auf
        Ihre Weisung <strong>bewahren</strong> wir die Rechnung nach Art. 17 Abs. 3
        Buchst. b DSGVO auf, soweit eine gesetzliche Aufbewahrungspflicht besteht.
        Daten, die nicht aufbewahrt werden müssen, werden gelöscht. Die Anfrage wird
        dokumentiert.
      </p>

      <h2 id="confidentiality">Vertraulichkeit</h2>
      <p>
        Alle zur Verarbeitung personenbezogener Daten befugten Personen sind
        schriftlich zur Vertraulichkeit verpflichtet. Diese Pflicht besteht nach
        Ende ihrer Tätigkeit fort. Attesta besitzt weder ein Administrationspanel
        noch einen Support-Login. Ein Zugriff auf Ihre Daten erfordert daher einen
        bewussten Serverzugriff.
      </p>

      <h2 id="security">Sicherheitsmaßnahmen</h2>
      <p>Nach Art. 32 DSGVO setzen wir mindestens folgende Maßnahmen um:</p>
      <ul>
        <li>
          TLS für die gesamte Kommunikation mit Browsern und der Shopify-API.
        </li>
        <li>
          AES-256-Verschlüsselung im Ruhezustand für personenbezogene Käuferdaten,
          Rechnungs-XML, gespeicherte Rechnungsansichten, Bestelldaten
          fehlgeschlagener Versuche, VIES-Händlerdaten und Shopify-Zugriffstoken.
        </li>
        <li>Verschlüsselung archivierter Rechnungs-PDFs im Ruhezustand.</li>
        <li>
          Strikte Mandantentrennung: Jede Datenbankabfrage ist auf den anfragenden
          Shop begrenzt.
        </li>
        <li>Authentifizierung jeder Anfrage durch ein Shopify-Sitzungstoken.</li>
        <li>
          Keine Verwaltungsoberfläche, über die Beschäftigte Händler- oder
          Käuferdaten durchsuchen können.
        </li>
        <li>
          Ein Zugriffsprotokoll für Lesezugriffe auf Käuferdaten über die App mit
          einer Aufbewahrungsdauer von einem Jahr.
        </li>
        <li>
          Trennung von Produktion, Entwicklung und Test ohne Übernahme von
          Produktionsdaten in Entwicklungs- oder Testsysteme.
        </li>
        <li>Verschlüsselte Sicherungskopien des Rechnungsarchivs außerhalb des Servers.</li>
        <li>
          Dokumentierte Verfahren für Sicherheitsvorfälle und zur Vermeidung von
          Datenverlusten.
        </li>
      </ul>

      <h2 id="retention">Aufbewahrung und Löschung</h2>
      <p>
        Solange die App installiert bleibt, bewahrt ihr Standardarchiv ausgestellte
        Rechnungen im Rahmen des von Ihnen beauftragten Dienstes zehn Jahre auf.
        Diese Konfiguration bedeutet nicht, dass für jede Rechnung eine gesetzliche
        Frist von zehn Jahren gilt. Die allgemeine Frist nach § 14b UStG beträgt
        acht Jahre; in bestimmten Fällen können längere Fristen gelten. Als
        Verantwortlicher bestimmen Sie die maßgebliche Frist und Rechtsgrundlage.
        Bestelldaten eines fehlgeschlagenen Rechnungsversuchs werden gelöscht,
        sobald der Versuch erfolgreich ist, ein Käufer die Löschung verlangt oder
        Sie uns entsprechend anweisen.
      </p>
      <p>
        Nach der Deinstallation löschen wir alle Daten, die wir als Ihr
        Auftragsverarbeiter für den Shop speichern, sobald uns Shopifys Anfrage{" "}
        <code>shop/redact</code> erreicht, üblicherweise nach etwa 48 Stunden.
        Fortbestehende Aufbewahrungspflichten bleiben bei Ihnen als Verantwortlichem.
        <strong> Exportieren Sie deshalb vor der Deinstallation Ihr GoBD-ZIP.</strong>{" "}
        Während der Installation können Sie es jederzeit aus der App exportieren.
      </p>

      <h2 id="subprocessors">Unterauftragsverarbeiter</h2>
      <p>
        Sie erteilen eine allgemeine Genehmigung für die in der{" "}
        <Link href="/attesta/privacy">Datenschutzerklärung</Link> aufgeführten
        Unterauftragsverarbeiter: Shopify, unseren Hostinganbieter, unseren
        E-Mail-Anbieter und den VIES-Dienst der Europäischen Kommission. Wir
        informieren Sie vor einer beabsichtigten Ergänzung oder Ersetzung. Sie
        können widersprechen.
      </p>
      <p>
        Die Rechnungserstellung erfolgt auf unserem eigenen Server. PDF-Erzeugung
        und ZUGFeRD-Ausgabe werden durch lokal ausgeführte Bibliotheken verarbeitet.
        Rechnungsinhalte werden dafür nicht an andere Stellen übertragen. Anbieter
        von KI- oder Sprachmodellen erhalten keine Käuferdaten.
      </p>

      <h2 id="assistance">Unsere Unterstützung</h2>
      <p>
        Wir unterstützen Sie bei Anfragen Ihrer Käufer, insbesondere über die drei
        von Attesta implementierten Shopify-Datenschutz-Webhooks. Bei einer
        Datenauskunft stellen wir Ihnen die zu den genannten Bestellungen
        gespeicherten Rechnungsdaten bereit, damit Sie dem Käufer antworten können.
      </p>
      <p>
        Wir unterstützen Sie außerdem bei Datenschutz-Folgenabschätzungen und
        Meldungen an Aufsichtsbehörden, soweit die erforderlichen Informationen aus
        unserem Verantwortungsbereich stammen.
      </p>

      <h2 id="breach">Meldung von Datenschutzverletzungen</h2>
      <p>
        Werden wir auf eine Verletzung des Schutzes Ihrer Daten aufmerksam,
        informieren wir Sie unverzüglich, spätestens innerhalb von{" "}
        <strong>48 Stunden</strong>. Damit bleibt Ihnen Zeit für die gegebenenfalls
        erforderliche Meldung innerhalb von 72 Stunden nach Art. 33 DSGVO.
      </p>
      <p>
        Unsere Mitteilung beschreibt nach aktuellem Kenntnisstand den Vorfall, die
        betroffenen Datenkategorien und die ungefähre Zahl der Datensätze, mögliche
        Folgen sowie ergriffene Maßnahmen. Noch nicht bekannte Angaben werden als
        solche gekennzeichnet.
      </p>

      <h2 id="audit">Prüfung</h2>
      <p>
        Wir stellen Ihnen die zum Nachweis der Einhaltung von Art. 28 DSGVO
        erforderlichen Informationen zur Verfügung. Nach angemessener Vorankündigung
        ermöglichen wir Prüfungen durch Sie oder einen von Ihnen beauftragten
        Prüfer, sofern der Dienst dadurch nicht beeinträchtigt wird.
      </p>

      <h2 id="termination">Vertragsende</h2>
      <p>
        Mit dem Ende der Installation löschen wir Ihre Daten wie unter
        „Aufbewahrung und Löschung“ beschrieben. Exportieren Sie Ihr Archiv vorher.
        Nach der Löschung ist es bei uns nicht mehr verfügbar, während
        fortbestehende Aufbewahrungspflichten bei Ihnen verbleiben.
      </p>

      <h2 id="contact">Kontakt</h2>
      <p>
        Fragen zu diesem Vertrag und Anfragen zur aktuellen Liste der
        Unterauftragsverarbeiter mit Unternehmen und Sitzland senden Sie an{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
