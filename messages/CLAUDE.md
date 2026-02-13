# Messages (i18n)

Translation files for next-intl.

## Structure
- `pt.json` - Portuguese (default)
- `en.json` - English
- `fr.json` - French
- `es.json` - Spanish

## Namespaces
Each component has a namespace:
- Metadata (SEO meta tags)
- TopBanner
- Navbar
- Hero
- TransformBusiness
- Services (uses `items[]` array for service cards)
- SuccessCases (uses `cases[]` array with nested stats/tags)
- TechMaturity (uses `stages[]` array)
- MissionValues (uses `pillars[]` array)
- Recruitment (uses `benefits[]` array)
- Technologies
- CallToAction
- Footer
- Blog
- Privacy
- TermsOfUse
- Error404

## Usage
```tsx
const t = useTranslations('Hero');
<h1>{t('title')}</h1>

// For arrays use t.raw():
const items = t.raw('cases.0.stats') as Array<...>;
```
