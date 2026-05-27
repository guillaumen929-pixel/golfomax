# GolfoMax — Claude Code Project Instructions

## Project Overview
GolfoMax is an indoor golf simulator and bar venue in Candiac, Quebec. The site is dark, premium, and animation-forward. Target audience: adults 18+, local South Shore QC community, golf enthusiasts, and corporate/group event planners.

## Tech Stack
- React 18 + Vite 5
- React Router v6 (SPA, hash or history mode)
- Tailwind CSS v3 (install explicitly: `npm install -D tailwindcss@3 postcss autoprefixer`)
- Framer Motion (all animations — page transitions, scroll reveals, hover states)
- Lucide React (icons)
- i18n: custom lightweight solution via `/src/lang/en.js` and `/src/lang/fr.js`
- Deploy: Cloudflare Pages

## CRITICAL RULES
1. NO hardcoded text strings in components — all copy lives in `/src/lang/en.js` and `/src/lang/fr.js`
2. NO templates, NO generic layouts — every section must feel custom-designed
3. Default language is FRENCH (`fr`) — EN toggle available in nav
4. Tailwind MUST be v3: `npm install -D tailwindcss@3 postcss autoprefixer`
5. All animations use Framer Motion — no CSS keyframe animations except for subtle bg effects
6. Dark theme only — background never goes lighter than #242424 except text/cards
7. Images use placeholder divs with correct aspect ratios until real photos are provided
8. Mobile responsive — design mobile-first

## Brand Tokens (use these exact values via CSS variables or Tailwind config)
```
--color-brand:        #C1272D   (primary red — CTAs, accents, highlights)
--color-brand-dark:   #9E1F24   (hover state for red)
--color-bg-primary:   #1C1C1E   (main background)
--color-bg-surface:   #242424   (cards, sections)
--color-bg-elevated:  #2E2E2E   (elevated cards, modals)
--color-text-primary: #FFFFFF   (headlines)
--color-text-secondary:#999999  (body, descriptions)
--color-text-muted:   #555555   (captions, metadata)
--color-border:       #2E2E2E   (all borders)
```

## Typography
- Display/Hero: 'Bebas Neue' (Google Fonts) — hero headlines, section titles, logo
- Heading: 'Barlow Condensed' weight 600/700 — subsection titles, nav
- Body: 'Barlow' weight 400/500 — paragraphs, descriptions, UI text
- Import in index.html: `https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700&display=swap`

## Tailwind Config Extensions
Add to tailwind.config.js:
```js
theme: {
  extend: {
    colors: {
      brand: '#C1272D',
      'brand-dark': '#9E1F24',
      'bg-primary': '#1C1C1E',
      'bg-surface': '#242424',
      'bg-elevated': '#2E2E2E',
      'text-muted': '#555555',
    },
    fontFamily: {
      display: ['Bebas Neue', 'sans-serif'],
      heading: ['Barlow Condensed', 'sans-serif'],
      body: ['Barlow', 'sans-serif'],
    },
  }
}
```

## Animation System (Framer Motion)
Use these reusable variants — define once in `/src/lib/animations.js` and import everywhere:

```js
// Fade up — used on most section content
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Stagger container — wraps lists of items
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

// Fade in — for images, overlays
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

// Slide in from left
export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Slide in from right
export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Scale up — for cards on hover
export const scaleUp = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } }
}
```

All scroll-triggered animations use `whileInView` with `viewport={{ once: true, amount: 0.2 }}`.

## Page Structure
Build these 5 pages with React Router:

### 1. Home (`/`)
Sections in order:
- `<Hero>` — Full viewport, Bebas Neue headline, red CTA button, animated background (subtle red particle or grid effect), golf ball arc SVG animation
- `<FeaturesGrid>` — 4 feature cards: Simulators / Bar & Drinks / Live Sports / Events — stagger reveal on scroll
- `<SimulatorShowcase>` — Left/right split layout, landscape placeholder image, animated stats (holes played, avg score, etc)
- `<AtmosphereSection>` — Dark mood section, portrait + landscape placeholder images in a masonry-style grid
- `<BookingCTA>` — Full-width red section, big Bebas Neue text, booking button
- `<ReviewsStrip>` — Google Reviews embed placeholder, star ratings, 3 review cards
- `<MapSection>` — Google Maps embed (Candiac QC) + hours + address

### 2. Simulators (`/simulators`)
Sections:
- `<SimHero>` — Page hero with headline
- `<SimPackages>` — 3 pricing cards (1hr, 2hr, half-day), animated on scroll
- `<HowItWorks>` — 3-step process with animated numbered steps
- `<BookingForm>` — Date picker, time, number of players, name, email → sends to owner email via EmailJS or Formspree

### 3. Bar & Entertainment (`/bar`)
Sections:
- `<BarHero>`
- `<DrinkMenu>` — Card grid for drink categories
- `<EntertainmentGrid>` — Sports channels, pool table, lottery (18+ badge), table games — icon cards
- `<FoodPolicy>` — "Bring your own food" friendly section
- `<AgeGate>` — Subtle 18+ reminder banner at top

### 4. Events (`/events`)
Sections:
- `<EventsHero>`
- `<EventPackages>` — Corporate, Stag/Bachelor, Birthday — 3 cards
- `<EventGallery>` — Placeholder image grid (masonry)
- `<EventContactForm>` — Group inquiry form

### 5. Contact (`/contact`)
Sections:
- `<ContactHero>`
- `<ContactSplit>` — Left: form / Right: map + info
- `<HoursTable>` — Weekly hours in a styled table
- `<SocialLinks>` — Instagram, Facebook icons

## Language System
Every component receives text from the lang context, never inline.

### `/src/lang/en.js` structure:
```js
export const en = {
  nav: {
    simulators: 'Simulators',
    bar: 'Bar & Entertainment',
    events: 'Events',
    contact: 'Contact',
    book: 'Book a Lane',
    langToggle: 'FR'
  },
  hero: {
    eyebrow: 'Candiac\'s Premier Golf Experience',
    headline: 'Hit the Course\nTonight.',
    sub: 'Indoor golf simulators, full bar, live sports — no tee time needed.',
    cta: 'Book Your Lane',
    ctaSub: 'Walk-ins welcome · 18+'
  },
  features: {
    title: 'Everything Under One Roof',
    items: [
      { title: 'Golf Simulators', desc: 'State-of-the-art full swing simulators. Play any course in the world.' },
      { title: 'Full Bar', desc: 'Cold drinks, great shots. Craft beers, cocktails, and more.' },
      { title: 'Live Sports', desc: 'All major sports channels on big screens throughout the venue.' },
      { title: 'Events & Groups', desc: 'Corporate, stag, birthday — we host it all. Private bays available.' }
    ]
  },
  booking: {
    headline: 'Ready to Play?',
    sub: 'Reserve your simulator lane now.',
    cta: 'Book a Lane'
  },
  footer: {
    address: '123 Rue Exemple, Candiac, QC',
    hours: 'Mon–Thu 3pm–midnight · Fri 3pm–2am · Sat–Sun 12pm–2am',
    age: '18+ establishment. Please drink responsibly.',
    rights: '© 2026 GolfoMax. All rights reserved.'
  }
  // expand per page as needed
}
```

### `/src/lang/fr.js` — identical keys, French values (to be filled after English approval)

### `/src/context/LangContext.jsx`:
```jsx
import { createContext, useContext, useState } from 'react'
import { en } from '../lang/en'
import { fr } from '../lang/fr'

const LangContext = createContext()
const langs = { en, fr }

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const t = langs[lang]
  const toggle = () => setLang(l => l === 'fr' ? 'en' : 'fr')
  return <LangContext.Provider value={{ t, lang, toggle }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
```

Usage in any component:
```jsx
const { t } = useLang()
// then use t.hero.headline, t.nav.book, etc.
```

## Component Architecture
```
/src
  /components
    /layout
      Navbar.jsx         — sticky, transparent→solid on scroll, EN/FR toggle
      Footer.jsx
    /sections
      Hero.jsx
      FeaturesGrid.jsx
      SimulatorShowcase.jsx
      AtmosphereSection.jsx
      BookingCTA.jsx
      ReviewsStrip.jsx
      MapSection.jsx
      (+ all other page sections)
    /ui
      Button.jsx         — variant: primary | secondary | ghost
      Card.jsx
      Badge.jsx          — variant: red | dark | outline
      SectionLabel.jsx   — small uppercase red label above headings
      PlaceholderImage.jsx — aspect-ratio box with subtle shimmer, accepts ratio prop
  /pages
    Home.jsx
    Simulators.jsx
    Bar.jsx
    Events.jsx
    Contact.jsx
  /context
    LangContext.jsx
  /lib
    animations.js        — all Framer Motion variants
  /lang
    en.js
    fr.js
  App.jsx
  main.jsx
  index.css              — Tailwind directives + CSS variables
```

## Navbar Behavior
- Default: transparent background, white logo
- On scroll >60px: background becomes `#1C1C1E` with `border-bottom: 1px solid #2E2E2E`, smooth transition via Framer Motion
- Mobile: hamburger menu, full-screen overlay slide-in from right
- EN/FR toggle: pill button top right, switches language instantly

## Button Component
```jsx
// variants: primary (red fill), secondary (white outline), ghost (red outline)
<Button variant="primary" size="lg">Book a Lane</Button>
```

## PlaceholderImage Component
All images use this until real photos are delivered:
```jsx
<PlaceholderImage ratio="16/9" label="Simulator Bay" />
<PlaceholderImage ratio="9/16" label="Bar Interior" />
```
Renders a dark `#2E2E2E` box with a subtle animated shimmer and centered label text. Correct aspect ratio locked via padding-top trick.

## Forms
- Use Formspree (free tier) for all contact and booking forms
- On submit: show inline success message with Framer Motion fade, never redirect
- Validate required fields client-side before submit

## Google Maps
Embed via iframe for the Candiac, QC address. Style: dark map tiles using Google Maps styling JSON (dark theme to match site).

## SEO
Each page gets:
```jsx
<title>GolfoMax | {pageTitle} — Candiac, QC</title>
<meta name="description" content="..." />
```
Use React Helmet or just update document.title per page in a useEffect.

## Cloudflare Pages Deployment
- `npm run build` outputs to `/dist`
- Add `/public/_redirects`:
  ```
  /* /index.html 200
  ```
- Build command: `npm run build`
- Output directory: `dist`

## DO NOT
- Do not use any CSS framework other than Tailwind v3
- Do not hardcode any text strings in JSX
- Do not use any animation library other than Framer Motion
- Do not use light backgrounds anywhere
- Do not use Inter, Roboto, or Arial fonts
- Do not use localStorage or sessionStorage
- Do not install unnecessary packages

## START COMMAND
When ready to build, run:
```
npm create vite@latest golfomax -- --template react
cd golfomax
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion react-router-dom lucide-react
```
