import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { type TocItem } from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Nutzungsbedingungen - Attesta",
  description:
    "Bedingungen für die Nutzung von Attesta: Leistungsumfang, Verantwortung des Rechnungsausstellers, Tarife, Abrechnung und Haftung.",
  path: "/attesta/terms",
  locale: "de_DE",
  languages: {
    "de-DE": "/attesta/terms",
    en: "/en/attesta/terms",
    "x-default": "/attesta/terms",
  },
});

const toc: TocItem[] = [
  { id: "service", label: "Leistungsumfang" },
  { id: "no-advice", label: "Keine Steuerberatung" },
  { id: "your-details", label: "Ihre Angaben" },
  { id: "numbering", label: "Nummerierung" },
  { id: "billing", label: "Tarife und Abrechnung" },
  { id: "data", label: "Daten und Aufbewahrung" },
  { id: "availability", label: "Verfügbarkeit" },
  { id: "acceptable-use", label: "Zulässige Nutzung" },
  { id: "warranties", label: "Gewährleistung" },
  { id: "liability", label: "Haftungsbeschränkung" },
  { id: "termination", label: "Beendigung" },
  { id: "changes", label: "Änderungen" },
  { id: "contact", label: "Kontakt" },
];

export default function AttestaTermsPage() {
  return (
    <LegalLayout
      path="/attesta/terms"
      title="Nutzungsbedingungen"
      intro={`Diese Nutzungsbedingungen regeln Ihre Nutzung der von Obarito („wir“ oder „uns“) betriebenen App Attesta. Mit der Installation oder Nutzung der App stimmen Sie diesen Bedingungen für sich und den von Ihnen vertretenen Shop zu.`}
      toc={toc}
      active="terms"
      brand="attesta"
      lastUpdated="7. Oktober 2026"
      effectiveDate="26. August 2026"
    >
      <h2 id="service">Leistungsumfang</h2>
      <p>
        Attesta liest Ihre bezahlten Shopify-Bestellungen und erstellt die
        zugehörigen Rechnungen. Die App wendet eine Steuerbehandlung an, vergibt
        eine Nummer und erzeugt eine ZUGFeRD-2.2-Datei im Format PDF/A-3 mit
        eingebetteter XML nach EN 16931. Für öffentliche Auftraggeber kann sie eine
        XRechnung erstellen. Attesta archiviert die Dokumente und versendet sie per
        E-Mail. Die App erstellt außerdem Gutschriften bei Erstattungen und
        Bestelländerungen sowie Exporte für Ihre Buchhaltung. Sie unterstützt
        Rechnungsaussteller nach deutschen Vorgaben. Andere Märkte werden nicht
        unterstützt. Der Funktionsumfang richtet sich nach Ihrem Tarif und kann im
        Zuge der Weiterentwicklung geändert werden.
      </p>

      <h2 id="no-advice">Keine Steuer- oder Rechtsberatung</h2>
      <p>
        Attesta ist Software und kein Steuerberater. Die App automatisiert die
        Dokumenterstellung nach EN 16931 und den nach unserem Verständnis geltenden
        deutschen Rechnungsvorschriften. Inhalte und Ausgaben der App stellen keine
        Steuer- oder Rechtsberatung dar. Die Nutzung allein gewährleistet keine
        Rechtskonformität.
      </p>
      <p>
        Die Steuerbehandlung wird aus den von Shopify bereitgestellten Daten
        abgeleitet, insbesondere Käuferland, USt-IdNr. und Ihren Einstellungen.
        Unvollständige oder falsche Daten können zu einer falschen Behandlung führen.
        Sie bleiben Aussteller jeder Rechnung und für deren Richtigkeit in Ihrem
        Unternehmen verantwortlich. Lassen Sie Ihre Einrichtung steuerlich prüfen
        und kontrollieren Sie die ersten von der App erstellten Rechnungen.
      </p>

      <h2 id="your-details">Ihre Angaben</h2>
      <p>
        Sie tragen rechtlichen Namen und Anschrift, USt-IdNr., Steuernummer,
        Kleinunternehmerstatus, Bankdaten und Zahlungsbedingungen selbst ein. Diese
        Angaben erscheinen auf Dokumenten, die nach dem Versand nicht zurückgerufen
        werden können. Prüfen Sie sie, bevor Sie die automatische Erstellung
        aktivieren. Wir prüfen weder Ihre Berechtigung zur Nutzung der Angaben noch
        deren Richtigkeit.
      </p>

      <h2 id="numbering">Nummerierung</h2>
      <p>
        Attesta führt Rechnungsnummern innerhalb der App lückenlos ab der von Ihnen
        angegebenen letzten Nummer fort. Wenn Sie außerhalb der App Rechnungen im
        selben Nummernkreis ausstellen, können Lücken oder Doppelungen entstehen.
        Für deren Korrektur sind Sie verantwortlich.
      </p>

      <h2 id="billing">Tarife und Abrechnung</h2>
      <ul>
        <li>
          Attesta bietet den Tarif <strong>Free</strong>,{" "}
          <strong>Compliance</strong> für 9 $ pro Monat und{" "}
          <strong>Accounting</strong> für 19 $ pro Monat. Bei jährlicher Zahlung
          werden 90 $ beziehungsweise 190 $ einmalig berechnet. Dies entspricht
          zwei kostenlosen Monaten. Alle Preise verstehen sich zuzüglich Umsatzsteuer.
        </li>
        <li>
          Die Abrechnung erfolgt in US-Dollar über Shopify und erscheint auf Ihrer
          Shopify-Rechnung. Wir verarbeiten oder speichern keine Zahlungsdaten.
        </li>
        <li>
          Der Free-Tarif enthält einen monatlichen Rechnungsrichtwert. Wird er
          überschritten, empfiehlt die App ein Upgrade, erstellt Rechnungen aber
          weiterhin.
        </li>
        <li>
          Sie können Ihren Tarif jederzeit in der App wechseln oder kündigen. Nach
          einer Kündigung wechseln Sie zu Free und die Rechnungserstellung bleibt
          aktiv. Bereits berechnete Beträge werden nur erstattet, soweit dies
          gesetzlich vorgeschrieben ist.
        </li>
        <li>
          Maßgeblich sind die in der App und im App-Store-Eintrag angegebenen Preise.
          Über Preisänderungen informieren wir vor ihrem Inkrafttreten.
        </li>
      </ul>

      <h2 id="data">Ihre Daten und Aufbewahrung</h2>
      <p>
        Solange die App installiert bleibt, bewahrt ihr Standardarchiv ausgestellte
        Rechnungen als Bestandteil des Dienstes zehn Jahre auf. Diese Produktzusage
        ist von der gesetzlichen Frist zu unterscheiden. Rechnungen sind in
        Deutschland grundsätzlich acht Jahre aufzubewahren; in bestimmten Fällen
        können längere Fristen gelten. Sie müssen die für Ihr Unternehmen geltende
        Frist bestimmen. Über den GoBD-Export können Sie jederzeit eine eigene Kopie
        des Journals sichern. Exportieren Sie Ihre Daten insbesondere vor der
        Deinstallation, da wir sie nach der entsprechenden Mitteilung von Shopify
        löschen. Welche Daten wir wie lange speichern, regelt die{" "}
        <Link href="/attesta/privacy">Datenschutzerklärung</Link>. Sie ist
        Bestandteil dieser Bedingungen.
      </p>
      <p>
        Da die App Rechnungen erstellt, verarbeitet sie personenbezogene Daten Ihrer
        Käufer in Ihrem Auftrag. Sie sind Verantwortlicher und wir sind
        Auftragsverarbeiter. Die Bedingungen dieser Verarbeitung stehen im{" "}
        <Link href="/attesta/dpa">Auftragsverarbeitungsvertrag</Link>. Er ist
        Bestandteil dieser Bedingungen, tritt mit der Installation in Kraft und
        muss nicht gesondert unterzeichnet werden.
      </p>

      <h2 id="availability">Verfügbarkeit</h2>
      <p>
        Rechnungen werden im Hintergrund erstellt, normalerweise innerhalb einer
        Minute nach der Zahlung. Wir geben keine Verfügbarkeitsgarantie. Die
        Zustellung der benötigten Webhooks liegt bei Shopify. Wir können den Dienst
        für Wartungsarbeiten vorübergehend unterbrechen.
      </p>

      <h2 id="acceptable-use">Zulässige Nutzung</h2>
      <p>
        Sie dürfen die App nicht missbräuchlich nutzen, ihren Betrieb stören,
        unbefugt auf sie zugreifen oder Dokumente erstellen, die einen Geschäftsvorgang
        falsch darstellen. Eine Nutzung entgegen den Bedingungen von Shopify oder
        geltendem Recht ist ebenfalls untersagt.
      </p>

      <h2 id="warranties">Gewährleistungsausschluss</h2>
      <p>
        Die App wird im vorhandenen und verfügbaren Zustand ohne ausdrückliche oder
        stillschweigende Garantien bereitgestellt. Wir garantieren weder einen
        unterbrechungs- oder fehlerfreien Betrieb noch die Rechnungserstellung für
        jede Bestellung oder die Annahme eines Dokuments durch eine bestimmte
        Behörde, einen Käufer oder ein Buchhaltungssystem.
      </p>

      <h2 id="liability">Haftungsbeschränkung</h2>
      <p>
        Soweit gesetzlich zulässig, haftet Obarito nicht für mittelbare, zufällige
        oder Folgeschäden sowie entgangenen Gewinn, entgangene Umsätze,
        Steuernachforderungen, Geldbußen oder Datenverluste, die aus der Nutzung
        oder Nichtnutzbarkeit der App entstehen. Unsere Gesamthaftung ist auf den
        Betrag begrenzt, den Sie in den vorangegangenen drei Monaten für die App
        gezahlt haben. Gesetzlich nicht beschränkbare Haftung bleibt unberührt.
      </p>

      <h2 id="termination">Beendigung</h2>
      <p>
        Sie können die Nutzung jederzeit durch Deinstallation beenden. Bei einem
        Verstoß gegen diese Bedingungen können wir den Zugang aussetzen oder
        beenden. Exportieren Sie vorher Ihre Daten. Siehe{" "}
        <a href="#data">Ihre Daten und Aufbewahrung</a>.
      </p>

      <h2 id="changes">Änderungen dieser Bedingungen</h2>
      <p>
        Wir können diese Bedingungen aktualisieren. Wenn Sie die App nach einer
        Änderung weiter nutzen, stimmen Sie der neuen Fassung zu. Das oben genannte
        Aktualisierungsdatum zeigt den Stand der Bedingungen.
      </p>

      <h2 id="contact">Kontakt</h2>
      <p>
        Fragen zu diesen Bedingungen senden Sie an{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Hinweise zur
        täglichen Nutzung finden Sie in der{" "}
        <Link href="/attesta/docs">Anleitung</Link>.
      </p>
    </LegalLayout>
  );
}
