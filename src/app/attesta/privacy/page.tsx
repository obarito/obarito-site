import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { type TocItem } from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Datenschutzerklärung - Attesta",
  description:
    "Wie Attesta Shop-, Händler- und Käuferdaten bei der Erstellung deutscher E-Rechnungen verarbeitet, einschließlich Archivierung und Aufbewahrungspflichten.",
  path: "/attesta/privacy",
  locale: "de_DE",
  languages: {
    "de-DE": "/attesta/privacy",
    en: "/en/attesta/privacy",
    "x-default": "/attesta/privacy",
  },
});

const toc: TocItem[] = [
  { id: "roles", label: "Verantwortlichkeiten" },
  { id: "collect", label: "Verarbeitete Daten" },
  { id: "buyers", label: "Käuferdaten" },
  { id: "use", label: "Verwendungszwecke" },
  { id: "shopify", label: "Shopify-Berechtigungen" },
  { id: "sharing", label: "Unterauftragsverarbeiter" },
  { id: "retention", label: "Aufbewahrung und Löschung" },
  { id: "rights", label: "Ihre Rechte" },
  { id: "security", label: "Sicherheit" },
  { id: "changes", label: "Änderungen" },
  { id: "contact", label: "Kontakt" },
];

export default function AttestaPrivacyPage() {
  return (
    <LegalLayout
      path="/attesta/privacy"
      title="Datenschutzerklärung"
      intro={`Diese Datenschutzerklärung erläutert, wie die von Obarito („wir“ oder „uns“) betriebene App Attesta Daten verarbeitet, wenn Sie sie in Ihrem Shopify-Shop installieren und nutzen. Da Attesta Rechnungen erstellt, verarbeitet die App personenbezogene Daten Ihrer Käufer. Hier erfahren Sie, welche Daten wir zu welchem Zweck und wie lange verarbeiten.`}
      toc={toc}
      active="privacy"
      brand="attesta"
      lastUpdated="7. Oktober 2026"
      effectiveDate="26. August 2026"
    >
      <h2 id="roles">Verantwortlichkeiten</h2>
      <p>
        Es bestehen zwei parallele Datenschutzverhältnisse. Welches davon gilt,
        bestimmt, wer für Fragen zu den jeweiligen Daten verantwortlich ist.
      </p>
      <ul>
        <li>
          Für Daten über <strong>Sie und Ihren Shop</strong>, etwa Konto-, Händler-
          und Abrechnungsdaten, ist Obarito <strong>Verantwortlicher</strong>.
        </li>
        <li>
          Für personenbezogene Daten <strong>Ihrer Käufer</strong>, die Attesta zur
          Rechnungserstellung verarbeitet, sind <strong>Sie</strong> der
          Verantwortliche und Obarito ist Ihr <strong>Auftragsverarbeiter</strong>.
          Wir handeln nach Ihren Weisungen, die Sie durch die Konfiguration der App
          und die darüber abgewickelten Verkäufe erteilen.
        </li>
      </ul>
      <p>
        Wendet sich ein Käufer direkt an uns, verweisen wir ihn an Sie, da Sie über
        die Verarbeitung seiner Daten entscheiden.
      </p>
      <p>
        Die Auftragsverarbeitung ist vollständig in unserem{" "}
        <Link href="/attesta/dpa">Auftragsverarbeitungsvertrag</Link> geregelt,
        der mit der Installation der App in Kraft tritt.
      </p>

      <h2 id="collect">Verarbeitete Daten</h2>
      <ul>
        <li>
          <strong>Shop- und Kontodaten:</strong> Ihre{" "}
          <strong>.myshopify.com</strong>-Domain, die bei der Installation von
          Shopify bereitgestellten Shopdaten und das Zugriffstoken für die App.
        </li>
        <li>
          <strong>Ihre Verkäuferdaten:</strong> rechtlicher Name und Anschrift,
          USt-IdNr., Steuernummer, Kleinunternehmerstatus, IBAN, BIC,
          Zahlungsbedingungen, Logo und Text der Rechnungs-E-Mail. Wenn Sie die
          Buchhaltungsfunktionen nutzen, kommen die E-Mail-Adresse Ihrer
          Steuerberatung sowie DATEV-Berater- und Mandantennummer hinzu. Diese
          Angaben erscheinen auf Rechnungen oder werden für Exporte benötigt.
        </li>
        <li>
          <strong>Bestelldaten:</strong> Positionen, Beträge, Währung, Steuersätze
          und die für die Rechnung erforderlichen Käuferdaten jeder bezahlten
          Bestellung.
        </li>
        <li>
          <strong>Erstellte Dokumente:</strong> Nummer, zugehörige Bestellung,
          Käufername und USt-IdNr., Währung, Netto-, Steuer- und Bruttobeträge,
          angewandte Steuerbehandlung, XML nach EN 16931, archivierte PDF-Datei
          sowie die SHA-256-Hashes zur Verkettung der Dokumente.
        </li>
        <li>
          <strong>USt-IdNr.-Prüfungen:</strong> das Ergebnis jeder VIES-Abfrage,
          das als Nachweis der Steuerbehandlung mit der Rechnung gespeichert wird.
        </li>
        <li>
          <strong>Betriebsprotokolle:</strong> technische Aufzeichnungen zum Betrieb
          der App und zur Untersuchung von Fehlern.
        </li>
      </ul>

      <h2 id="buyers">Käuferdaten</h2>
      <p>
        Eine deutsche Rechnung muss den Rechnungsempfänger nennen. Attesta
        verarbeitet deshalb <strong>Name</strong> und gegebenenfalls{" "}
        <strong>Firmenname</strong>, <strong>Rechnungsanschrift</strong>, die für
        den Versand verwendete <strong>E-Mail-Adresse</strong>, eine vom
        Geschäftskunden angegebene <strong>EU-USt-IdNr.</strong> sowie{" "}
        <strong>Inhalt und Beträge</strong> der Bestellung. Diese Angaben werden
        nach EN 16931 und § 14 UStG für die Rechnung benötigt.
      </p>
      <p>
        Attesta erhält keine Kartennummern, Bankzugangsdaten oder sonstigen
        Zahlungsinstrumente. Zahlungen werden von Shopify und dessen
        Zahlungsdienstleistern verarbeitet. Die App erfährt nur, dass und in welcher
        Höhe eine Bestellung bezahlt wurde.
      </p>
      <p>
        Shopify gewährt den Zugriff auf Käuferdaten nach seinen Bedingungen für
        geschützte Kundendaten. Wir verwenden sie ausschließlich für die folgenden
        Zwecke.
      </p>

      <h2 id="use">Verwendungszwecke</h2>
      <ul>
        <li>
          Ermittlung der Steuerbehandlung jeder Bestellung, etwa Regelbesteuerung,
          Reverse-Charge, innergemeinschaftliche Lieferung, Ausfuhr oder § 19 UStG.
        </li>
        <li>
          Nummerierung, Erstellung, Validierung und Archivierung von Rechnungen und
          Gutschriften.
        </li>
        <li>Versand des Dokuments in Ihrem Auftrag an den Käufer.</li>
        <li>
          Prüfung der USt-IdNr. eines Geschäftskunden und Speicherung des Ergebnisses als Nachweis.
        </li>
        <li>
          Erstellung angeforderter Exporte: GoBD-ZIP, Verfahrensdokumentation und
          DATEV-Buchungsstapel.
        </li>
        <li>Anzeige Ihres Rechnungsjournals und Bearbeitung von Supportanfragen.</li>
        <li>Abrechnung des gewählten Tarifs über Shopify.</li>
      </ul>
      <p>
        Wir verkaufen keine Daten, geben sie nicht zu Werbezwecken weiter und
        verwenden Rechnungsinhalte nicht zum Trainieren von Machine-Learning-Modellen.
      </p>

      <h2 id="shopify">Shopify-Berechtigungen und Webhooks</h2>
      <p>
        Attesta fordert drei Leseberechtigungen und keine Schreibberechtigung an:{" "}
        <strong>read_orders</strong> für die Rechnungserstellung,{" "}
        <strong>read_customers</strong> für die USt-IdNr.-Erfassung aus dem
        Kundenkonto und <strong>read_products</strong> für Positionsdetails. Die
        App verändert weder Ihren Katalog noch Bestellungen oder Kundendaten.
      </p>
      <p>
        Bestell-Webhooks übermitteln bezahlte Bestellungen, Erstattungen und
        Änderungen an die Rechnungsverarbeitung. Attesta registriert außerdem die
        drei von Shopify vorgeschriebenen Datenschutz-Webhooks:
      </p>
      <ul>
        <li>
          <strong>customers/data_request:</strong> Wir stellen Ihnen die zu den
          genannten Bestellungen gespeicherten Rechnungsdaten bereit, damit Sie die
          Anfrage des Käufers beantworten können. Wir kontaktieren den Käufer nicht selbst.
        </li>
        <li>
          <strong>customers/redact:</strong> Siehe{" "}
          <a href="#retention">Aufbewahrung und Löschung</a>, da eine ausgestellte
          Rechnung nicht ohne Weiteres gelöscht werden kann.
        </li>
        <li>
          <strong>shop/redact:</strong> Shopify sendet diesen Webhook ungefähr 48
          Stunden nach der Deinstallation. Anschließend löschen wir die zu Ihrem
          Shop gespeicherten Daten.
        </li>
      </ul>

      <h2 id="sharing">Unterauftragsverarbeiter</h2>
      <p>Wir geben Daten nur weiter, soweit dies für den Betrieb der App erforderlich ist:</p>
      <ul>
        <li>
          <strong>Shopify:</strong> Plattform der App, Quelle der Bestelldaten und
          Abwickler Ihrer Abonnementzahlungen.
        </li>
        <li>
          <strong>Unser Hostinganbieter:</strong> betreibt die Anwendung und die
          Datenbank mit Ihrem Rechnungsjournal und den archivierten Dokumenten.
        </li>
        <li>
          <strong>Unser E-Mail-Anbieter:</strong> versendet Rechnungs-E-Mails in
          Ihrem Auftrag und unsere Mitteilungen an Sie.
        </li>
        <li>
          <strong>Die Europäische Kommission:</strong> Gibt ein Geschäftskunde eine
          USt-IdNr. an, werden diese Nummer, der Ländercode und Ihre eigene USt-IdNr.
          als anfragende Stelle an VIES übermittelt. Dadurch erhalten wir die als
          Nachweis gespeicherte Abfragekennung. Weitere Bestelldaten werden nicht
          übermittelt.
        </li>
      </ul>
      <p>
        Eine aktuelle Liste unserer Unterauftragsverarbeiter einschließlich
        Unternehmen und Sitzland erhalten Sie auf Anfrage unter{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2 id="retention">Aufbewahrung und Löschung</h2>
      <p>
        Eine ausgestellte Rechnung ist nicht mit gewöhnlichen App-Daten
        gleichzusetzen. Solange Attesta installiert bleibt, bewahrt das
        Standardarchiv ausgestellte Rechnungen <strong>zehn Jahre</strong> auf.
        Dies ist eine Produkt- und Servicezusage und bedeutet nicht, dass für jede
        Rechnung eine gesetzliche Frist von zehn Jahren gilt. Die allgemeine Frist nach{" "}
        <a href="https://www.gesetze-im-internet.de/ustg_1980/__14b.html">
          § 14b UStG
        </a>{" "}
        beträgt acht Jahre. In bestimmten Fällen können längere Fristen gelten.
        Als Verantwortlicher müssen Sie die für Ihre Unterlagen maßgebliche Frist
        und Rechtsgrundlage bestimmen. Art. 17 Abs. 3 Buchst. b DSGVO schließt die
        Löschung nur aus, soweit die Verarbeitung zur Erfüllung einer rechtlichen
        Verpflichtung erforderlich bleibt.
      </p>
      <ul>
        <li>
          <strong>Ein Käufer verlangt Löschung und eine Rechnung wurde erstellt.</strong>{" "}
          Wir dokumentieren die Anfrage und leiten sie an Sie als Verantwortlichen
          weiter. Weisen Sie uns wegen einer fortbestehenden gesetzlichen Pflicht
          zur Aufbewahrung an, verbleibt die Rechnung im Archiv. Andernfalls folgen
          wir Ihrer rechtmäßigen Weisung nach dem AVV.
        </li>
        <li>
          <strong>Ein Käufer verlangt Löschung und es wurde keine Rechnung erstellt.</strong>{" "}
          Die für den fehlgeschlagenen Versuch gespeicherten Bestelldaten werden
          gelöscht. Der Eintrag bleibt ohne Nutzdaten erhalten, damit erkennbar
          bleibt, dass für die Bestellung keine Rechnung erstellt wurde.
        </li>
        <li>
          <strong>Sie deinstallieren die App.</strong> Nach dem Webhook{" "}
          <code>shop/redact</code> löschen wir die als Auftragsverarbeiter für Ihren
          Shop gespeicherten Daten: Verkäuferprofil, Rechnungsjournal, archivierte
          PDF-Dateien, VIES-Nachweise und Logo. Fortbestehende Aufbewahrungspflichten
          liegen bei Ihnen. <strong>Exportieren Sie deshalb vor der Deinstallation
          Ihr GoBD-ZIP.</strong>
        </li>
      </ul>
      <p>
        Betriebsprotokolle werden nur so lange gespeichert, wie sie für Betrieb und
        Fehleranalyse erforderlich sind.
      </p>

      <h2 id="rights">Ihre Rechte</h2>
      <p>
        Soweit wir Verantwortlicher sind, stehen Ihnen die Rechte aus der DSGVO zu:
        Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit und Widerspruch. Sie können sich außerdem bei einer
        Aufsichtsbehörde beschweren. Schreiben Sie an{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Wir antworten
        innerhalb der gesetzlichen Frist.
      </p>
      <p>
        Soweit <em>Sie</em> Verantwortlicher sind und wir Käuferdaten in Ihrem
        Auftrag verarbeiten, können Sie diese Rechte für Ihre Käufer über die App
        wahrnehmen. Rechnungsjournal und Exporte enthalten die von uns gespeicherten
        Daten, vorbehaltlich der oben beschriebenen Aufbewahrung.
      </p>

      <h2 id="security">Sicherheit</h2>
      <p>
        Daten werden über HTTPS übertragen und auf zugriffsgeschützter Infrastruktur
        gespeichert. Archivierte Rechnungen liegen außerhalb des öffentlich
        erreichbaren Webverzeichnisses. Sie werden nur dem zugehörigen Shop über
        zweckgebundene, zeitlich begrenzte Links bereitgestellt. Der Hash jedes
        Dokuments ist mit dem vorherigen verkettet, sodass Änderungen an einer
        archivierten Rechnung erkennbar sind.
      </p>
      <p>
        Personenbezogene Käuferdaten sind nicht nur bei der Übertragung, sondern
        auch <strong>im Ruhezustand mit AES-256 verschlüsselt</strong>. Dies umfasst
        Käufername, USt-IdNr. und E-Mail-Adresse, die XML nach EN 16931 und die
        gespeicherte Rechnungsansicht mit vollständiger Rechnungsanschrift,
        Bestelldaten fehlgeschlagener Rechnungsversuche, von VIES zurückgegebene
        Händlerdaten und Ihr Shopify-Zugriffstoken. Auch archivierte PDF-Dateien
        sind auf dem Datenträger verschlüsselt.
      </p>
      <p>
        Es gibt weder ein Administrationspanel noch einen Support-Login, über den
        Rechnungen durchsucht werden könnten. Jede Anfrage wird mit einem
        Shopify-Sitzungstoken authentifiziert und jede Datenbankabfrage auf den
        anfragenden Shop begrenzt. Zugriffe auf Käuferdaten über die App, darunter
        Rechnungsansichten, Downloads und die beiden Sammelausfuhren, werden in einem
        getrennten Zugriffsprotokoll erfasst. Dieses enthält, wer wann worauf
        zugegriffen hat, jedoch nicht die Daten selbst, und wird ein Jahr aufbewahrt.
      </p>
      <p>
        Kein System ist vollständig sicher. Wir treffen angemessene Maßnahmen zum
        Schutz der von uns gespeicherten Daten.
      </p>

      <h2 id="changes">Änderungen dieser Erklärung</h2>
      <p>
        Wir können diese Datenschutzerklärung aktualisieren. Wesentliche Änderungen
        werden im oben angegebenen Aktualisierungsdatum kenntlich gemacht. Betrifft
        eine Änderung die Verarbeitung von Käuferdaten, informieren wir Sie vor
        ihrem Inkrafttreten.
      </p>

      <h2 id="contact">Kontakt</h2>
      <p>
        Fragen zum Datenschutz oder zur Nutzung der App senden Sie an{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Hinweise zur
        täglichen Nutzung finden Sie in der{" "}
        <Link href="/attesta/docs">Anleitung</Link>. Im Übrigen gelten unsere{" "}
        <Link href="/attesta/terms">Nutzungsbedingungen</Link>.
      </p>
    </LegalLayout>
  );
}
