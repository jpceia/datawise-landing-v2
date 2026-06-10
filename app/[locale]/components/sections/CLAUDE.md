# Section Components

Main landing page sections, rendered in order in `app/[locale]/page.tsx`:

## Hero.tsx
Full-height hero with animated headline, dual CTAs (contact modal + anchor link), decorative hero SVG, scroll indicator. Primary blue gradient background.

## ClientLogos.tsx
Client logos marquee strip.

## TransformBusiness.tsx
Value proposition section with 3 benefit cards.

## Services.tsx
6 ServiceCard components in responsive 3-column grid. Light gray background. Uses `Services.items[]` translations array.

## SuccessCases.tsx
Case study carousel with stats, tags, and blog links. Images from Sanity CDN.

## OurProcess.tsx
Step-by-step methodology/process section.

## MissionValues.tsx
Company mission and values display.

## Recruitment.tsx
Careers/hiring section.

## Technologies.tsx
Tech stack logos gallery.

## CallToAction.tsx
Final conversion CTA with light/dark variant prop. Calendly popup button.

## Conventions
- Translations via `useTranslations()` with section-specific namespace
- Animations via Framer Motion (motion.div with whileInView)
- Tailwind CSS for all styling (primary color palette, no custom dw-* tokens)
