# LADENWERK — Website-Vorlage

Eine schlichte, fertig gestaltete Website, um Ladenbesitzer:innen und
Geschäften Websites zu verkaufen. Reines HTML/CSS/JS — keine Installation,
kein Build-Prozess nötig.

## Dateien

```
ladenwerk/
├── index.html          Startseite (Hero, Leistungen, Beispiele, Ablauf, Preise, Kontakt)
├── impressum.html       Platzhalter-Impressum (unbedingt anpassen!)
├── css/style.css        Gesamtes Design (Farben, Typografie, Layout)
├── js/script.js         Mobiles Menü, Formular-Feedback, Einblend-Animation
└── assets/favicon.svg   Icon für den Browser-Tab
```

## Vor der Veröffentlichung anpassen

1. **Texte & Preise** in `index.html` durch Ihre echten Angebote ersetzen.
2. **Kontaktdaten** (Telefon, E-Mail) in `index.html` aktualisieren.
3. **Impressum** in `impressum.html` mit echten Angaben füllen — in
   Deutschland für gewerbliche Websites Pflicht (§ 5 TMG).
4. **Kontaktformular anbinden:** Das Formular funktioniert aktuell nur
   optisch. Damit Anfragen wirklich bei Ihnen ankommen, brauchen Sie einen
   Formular-Dienst wie z. B. Formspree, Netlify Forms oder ein eigenes
   Skript, das die Daten per E-Mail verschickt. Die Stelle dafür ist in
   `js/script.js` markiert.
5. **Eigene Beispiel-Websites:** Die drei Karten unter „Beispiele" sind
   aktuell einfache Skizzen (SVG). Ersetzen Sie sie später gerne durch
   echte Screenshots Ihrer Projekte.

## Veröffentlichen

Die einfachste Variante: den Ordner z. B. bei Netlify, Vercel oder GitHub
Pages hochladen — alle drei bieten kostenlosen Hosting-Plan für statische
Websites wie diese. Alternativ per FTP auf klassisches Webhosting laden.

## Technik

- Schriften: Fraunces (Überschriften), Work Sans (Fließtext), IBM Plex Mono
  (Labels) — eingebunden über Google Fonts.
- Keine externen Frameworks, keine Abhängigkeiten.
- Responsive bis zur Mobilansicht getestet, inkl. mobilem Menü.
- Respektiert `prefers-reduced-motion`.
