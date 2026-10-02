# Suleiman Portfolio

Personal portfolio for Suleiman, a WordPress and WooCommerce developer. Built with Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui and Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Where to edit content

| What | File |
| --- | --- |
| Name, role, tagline, contact details, socials, stats, skills, services, experience, education, certifications | `src/data/profile.ts` |
| Project list (name, category, description, tags, screenshot, demo video, live URL) | `src/data/projects.ts` |
| Screenshots and web-sized demo videos | `public/projects/` |
| Colours, fonts, animation keyframes | `src/app/globals.css` |

Social profile URLs (LinkedIn, Fiverr, Upwork) are left empty in `src/data/profile.ts`; the links appear automatically once filled in.

## Structure

- `src/app/` – root layout (fonts, metadata) and the single-page home route.
- `src/components/site/` – page sections: navbar, hero, tech marquee, projects grid with filter and lightbox, services, about, contact and footer.
- `src/components/ui/` – shadcn primitives plus registry components (Marquee, Blur Fade, Border Beam, Dot Pattern, Shimmer Button, Number Ticker from Magic UI; Spotlight and Text Generate Effect from Aceternity).
- `raw-media/` – original uncompressed demo recordings (ignored by git). Re-encode with ffmpeg if you replace them.
