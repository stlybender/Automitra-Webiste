# AutoMitra AI Landing Page

A modern, responsive landing page for AutoMitra AI - an AI team that grows your pipeline through automated calling, WhatsApp follow-ups, and lead routing.

## Features

- **Next.js 15** with App Router
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Scroll-triggered animations with reduced-motion support
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Custom AI Character Illustrations** - SVG-based characters for each AI agent

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── sections/           # Page sections
│   │   ├── Navbar.tsx      # Sticky navigation bar
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── PainPoints.tsx  # Customer pain points
│   │   ├── Agents.tsx      # AI agent showcase
│   │   ├── Timeline.tsx    # Day-in-the-life timeline
│   │   ├── SocialProof.tsx # Testimonials and stats
│   │   ├── Platform.tsx    # Platform modules
│   │   ├── FAQ.tsx         # FAQ accordion
│   │   └── Footer.tsx      # Site footer
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx      # Button component
│       ├── Card.tsx        # Card component
│       └── Accordion.tsx   # Accordion component
├── hooks/
│   └── useScrollAnimation.ts # Scroll animation hook
├── public/
│   └── characters/         # AI character illustrations
│       ├── autodial.svg
│       ├── receptionist.svg
│       ├── whatsapp.svg
│       ├── router.svg
│       ├── knowledge.svg
│       ├── onboarding.svg
│       └── LICENSE.txt
└── tailwind.config.ts      # Tailwind configuration
```

## Customization

### Updating Content

All content is directly in the component files. To update:

1. **Hero Section**: Edit `/components/sections/Hero.tsx`
2. **Pain Points**: Edit `/components/sections/PainPoints.tsx`
3. **AI Agents**: Edit `/components/sections/Agents.tsx`
4. **Timeline**: Edit `/components/sections/Timeline.tsx`
5. **FAQ**: Edit `/components/sections/FAQ.tsx`

### Changing Colors & Branding

1. **Color Palette**: Edit `tailwind.config.ts` to update the `primary` and `accent` color schemes
2. **Logo**: Replace the logo placeholder in `/components/sections/Navbar.tsx` and `/components/sections/Footer.tsx`
3. **Fonts**: Update font imports in `/app/layout.tsx`

### Replacing Character Illustrations

The current characters are placeholder SVGs. To use custom illustrations:

1. Export your characters as SVG, PNG, or WebP (recommended: 200x200px or larger)
2. Place them in `/public/characters/`
3. Update the image paths in:
   - `/components/sections/Hero.tsx`
   - `/components/sections/Agents.tsx`

For AI-generated illustrations, consider:
- **Midjourney** or **DALL-E** for professional results
- **Stable Diffusion** (open-source, run locally)
- Commission a designer for consistent brand-matched characters

### CTA Links

Update the CTA button destinations:

1. **Primary CTA**: "Launch My AI Calling Team" - Update in `Hero.tsx` and `Navbar.tsx`
2. **Demo CTA**: "Watch Demo" - Update in `Hero.tsx` and `Platform.tsx`

## Design Inspiration

This landing page is inspired by [Marblism.com](https://www.marblism.com/), featuring:
- Clean, modern SaaS aesthetic
- Character-based AI agent presentation
- Timeline storytelling
- Smooth scroll animations
- Mobile-first responsive design

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus states on interactive elements
- `prefers-reduced-motion` support for animations
- Proper heading hierarchy
- Alt text for images

## Performance

- Optimized images with Next.js Image component
- Lazy loading for below-the-fold content
- Minimal JavaScript bundle
- CSS-based animations (GPU accelerated)

## License

This project is created for AutoMitra AI. The character illustrations are custom placeholders that can be freely modified or replaced.

## Support

For questions or issues, please contact the AutoMitra AI team.

