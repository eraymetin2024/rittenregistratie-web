# Rittenregistratie.app — website

Marketing-website voor **Rittenregistratie.app**, gebouwd met **Astro + Tailwind**.
Statische output → ultra-snel, ultra-SEO. Te hosten op **Coolify**.

## Lokaal

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statische output in dist/
npm run preview  # preview van de build
```

## Pagina's

`/` · `/functies` · `/hoe-het-werkt` · `/voor-zzp` · `/beacon` · `/prijzen` ·
`/faq` · `/download` · `/contact` · `/over-ons` · `/privacy` · `/voorwaarden`

SEO: per pagina eigen `<title>`/meta/OG, JSON-LD (Organization, SoftwareApplication,
Product, HowTo, FAQPage), `sitemap-index.xml`, `robots.txt`.

## Deployen op Coolify

**Optie A — Dockerfile (aanbevolen, meest betrouwbaar):**
1. Push deze repo naar GitHub.
2. Coolify → **+ New Resource** → **Public/Private Repository** → kies deze repo.
3. Build Pack: **Dockerfile** (Coolify vindt de `Dockerfile` automatisch).
4. Port: **80**.
5. Domein: zet **rittenregistratie.app** (en `www`) → Coolify regelt Let's Encrypt SSL.
6. **Deploy**. Bij elke `git push` bouwt Coolify opnieuw.

**Optie B — Static (Nixpacks):**
- Build command: `npm run build`
- Output directory: `dist`
- Coolify serveert de statische bestanden.

## Na deploy
- Controleer `https://rittenregistratie.app/sitemap-index.xml` en `/robots.txt`.
- Dien de sitemap in bij **Google Search Console** + **Bing Webmaster Tools**.
- Vul in `src/consts.ts` de echte **playUrl** / **appStoreUrl** in zodra de apps live zijn.

## Aanpassen
- Merk/teksten/navigatie/prijzen: `src/consts.ts`.
- Globale stijl/animaties: `src/styles/global.css`.
- Layout + SEO-head: `src/layouts/Layout.astro`.
