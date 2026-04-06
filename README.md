# 🏷️ Angebote Finder – Docker PWA

Supermarkt-Angebote (Lidl, Aldi, Edeka, Netto & mehr) als selbst-gehostete Progressive Web App.

## Features
- 🏷️ Direkte Angebots-Browser (Kaufda, Lidl, Aldi, Edeka, Netto, Rewe, Penny...)
- ⭐ Eigene Artikel-Wunschliste mit Kategorien
- 🔍 Artikel direkt bei Kaufda suchen
- 🏪 Märkte aktivieren/deaktivieren, eigene hinzufügen
- 📱 Als App installierbar (PWA) auf Android & iOS
- 💾 Einstellungen werden lokal gespeichert (localStorage)

---

## Schnellstart

```bash
# 1. Dateien auf deinen Server kopieren
scp -r angebote-pwa/ user@deinserver:/opt/angebote/

# 2. Starten
cd /opt/angebote
docker compose up -d

# 3. Öffnen
# http://deinserver:8080
```

---

## Icon erstellen (optional)

Für ein schönes App-Icon auf dem Homescreen, lege PNG-Dateien ab:
- `public/icon-192.png` (192×192 px)
- `public/icon-512.png` (512×512 px)

Einfaches Tool: https://realfavicongenerator.net

---

## Auf dem Handy als App installieren

**Android (Chrome):**
1. Seite öffnen
2. Menü → "Zum Startbildschirm hinzufügen"
3. Fertig! Startet wie eine native App

**iPhone (Safari):**
1. Seite öffnen
2. Teilen → "Zum Home-Bildschirm"

---

## Mit eigenem Domain + HTTPS (Traefik)

In der `docker-compose.yml` die Traefik-Labels anpassen:

```yaml
- "traefik.http.routers.angebote.rule=Host(`angebote.meinedomain.de`)"
```

Oder mit Nginx Proxy Manager einfach als Proxy-Host eintragen.

---

## Port ändern

In `docker-compose.yml`:
```yaml
ports:
  - "80:80"   # statt 8080:80
```

---

## Märkte anpassen

Direkt in der App unter dem Tab **Märkte** — kein Neustart nötig!
Oder dauerhaft in `public/index.html` im Abschnitt `DEFAULT_MAERKTE`.
