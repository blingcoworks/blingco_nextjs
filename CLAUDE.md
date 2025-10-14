# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**BLING.CO** is a Korean fashion goods production solution platform for creators. Built with Next.js 15, this is a marketing/landing page with an integrated contact form system that sends inquiries via Resend email service.

## Tech Stack

- **Framework**: Next.js 15.4.4 (App Router) with React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom CSS
- **Animations**: Framer Motion 12
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API
- **Analytics**: Vercel Analytics
- **Fonts**: Multiple Google Fonts + Pretendard (Korean font via CDN)

## Development Commands

```bash
# Development (with Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Architecture

### Directory Structure

```
app/
├── api/
│   └── contact/
│       └── route.ts          # POST endpoint for contact form
├── components/
│   ├── section/              # Page section components
│   │   ├── Navigation.tsx    # Global navigation
│   │   ├── hero.tsx          # Hero section with fixed background
│   │   ├── slogan.tsx        # Slogan section
│   │   ├── tagline.tsx       # Tagline section
│   │   ├── about.tsx         # About section
│   │   ├── service.tsx       # Service section
│   │   ├── contact.tsx       # Contact section wrapper
│   │   └── footer.tsx        # Global footer
│   ├── ContactForm.tsx       # Main contact form with validation
│   ├── Blingco.tsx           # Logo components
│   └── MarqueeText.tsx       # Marquee animation component
├── contact/
│   └── page.tsx              # Contact page
├── layout.tsx                # Root layout with fonts and Navigation/Footer
├── page.tsx                  # Home page (assembles all sections)
└── globals.css               # Global styles and CSS variables
```

### Key Architectural Patterns

#### 1. **Page Section Architecture**
The homepage ([page.tsx](app/page.tsx)) is composed of modular section components that are imported and stacked vertically. Each section is self-contained and handles its own styling and animations.

#### 2. **Font System**
Multiple font families are loaded in [layout.tsx](app/layout.tsx) and exposed as CSS variables:
- Google Fonts: DM Sans, Roboto Mono, Crimson Text, Playfair Display, Passion One, Manrope, Poppins, Lato, Inter, Righteous
- Korean Font: Pretendard (loaded via CDN in [globals.css](app/globals.css))
- Usage: Apply via inline styles `fontFamily: 'Pretendard, sans-serif'` or CSS variables

#### 3. **Contact Form Flow**
- **Client**: [ContactForm.tsx](app/components/ContactForm.tsx) uses React Hook Form with Zod schema validation
- **API**: [api/contact/route.ts](app/api/contact/route.ts) validates again server-side and sends email via Resend
- **Email Target**: `blingcoworks@gmail.com`
- **Environment**: Requires `RESEND_API_KEY` in `.env.local`

#### 4. **Styling Approach**
- **Tailwind**: Primary styling method with inline classes
- **CSS Variables**: Brand colors defined in `:root` ([globals.css](app/globals.css))
  - Blingco brand colors: `--blingco-green` (#95FF8D), `--blingco-blue` (#1F41FF), etc.
- **Custom CSS**: Hero section uses custom CSS classes (`.hero-container`, `.hero-fixed-image`)
- **Animations**: Framer Motion for form interactions and status messages

#### 5. **Image Handling**
- Uses Next.js `<Image>` component with `priority` for above-the-fold images
- Static assets in `/public` directory
- Hero background: `/main_visual_img.png` with fixed positioning

## Important Conventions

### Form Validation
Both client and server share the same Zod schema structure:
```typescript
const contactSchema = z.object({
  name: z.string().min(2),
  contact: z.string().min(5),
  links: z.array(z.object({ url: z.string().url() })).min(1),
  content: z.string().min(5)
})
```

### TypeScript Configuration
- Path alias: `@/*` maps to root directory
- Strict mode enabled
- Target: ES2017

### Korean Language
Most UI text is in Korean. Error messages, form labels, and content are Korean-first.

### Environment Variables
Required for production:
- `RESEND_API_KEY`: Email service API key (from https://resend.com)

### Email Service Configuration
- The API gracefully handles missing `RESEND_API_KEY` during build to prevent build failures
- Returns 503 error when API key not configured at runtime
- Uses Resend's default domain: `onboarding@resend.dev`

## Common Tasks

### Adding a New Section
1. Create component in `app/components/section/`
2. Import and add to [page.tsx](app/page.tsx) in desired order
3. Follow existing pattern: self-contained with own styles

### Modifying Contact Form
- Update Zod schema in both [ContactForm.tsx](app/components/ContactForm.tsx) and [api/contact/route.ts](app/api/contact/route.ts)
- Adjust email template in route handler if fields change

### Adding New Fonts
1. Import from `next/font/google` in [layout.tsx](app/layout.tsx)
2. Create font variable with `variable` option
3. Add to body className string
4. Use via CSS variable in components

### Updating Brand Colors
Modify CSS variables in [globals.css](app/globals.css) under `/* Bling.co Brand Colors */`
