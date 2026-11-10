# Hammad Graphics — Portfolio

Animated, fast portfolio website for **Hammad Shabir**, Graphic Designer and founder of **Hammad Graphics**.

Built with **Next.js 14** (static export), pure CSS animations and zero heavy UI libraries — so it loads fast and scores well on Lighthouse.

## Sections
Hero (typewriter + animated counters) · About · Services · Portfolio (category filter + lightbox) · Experience timeline · Skills & Tools · Process · Why Choose Me · Contact (sends to WhatsApp)

## Edit content
All text, links, experience, services and portfolio images live in **`data/site.js`**.
Change anything there and push — GitHub Actions rebuilds and redeploys automatically.

To use your own portfolio images, put them in `public/works/` and change the `img()` helper / `works` list.

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Every push to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`
(Settings → Pages → Source: **GitHub Actions**).

## Contact
📞 0310 7286467 · [LinkedIn](https://www.linkedin.com/in/hamtrix-creative-08224b2b8) · [Instagram](https://www.instagram.com/hammadshabbir001) · [Facebook](https://www.facebook.com/share/1cTmgrYENB/) · [TikTok](https://www.tiktok.com/@hammad_malik200)
