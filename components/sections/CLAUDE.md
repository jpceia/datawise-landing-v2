# Section Components

Main landing page sections, rendered in order in `pages/index.tsx`:

## Hero.tsx
Full-height hero with Globe3D on right side, animated headline, dual CTAs (Calendly + anchor link), scroll indicator. White background with blob animations.

## TransformBusiness.tsx
Value proposition section with 3 benefit cards.

## Services.tsx
6 ServiceCard components in responsive 3-column grid. Light gray background. Uses `Services.items[]` translations array.

## SuccessCases.tsx
Case study carousel with stats, tags, and blog links. Images from Sanity CDN.

## TechMaturity.tsx
Technology maturity matrix visualization.

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
