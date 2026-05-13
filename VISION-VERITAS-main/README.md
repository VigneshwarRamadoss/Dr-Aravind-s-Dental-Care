# Dr. Aravind's Dental Care – Website

A premium, mobile‑first React/Vite application that showcases Dr. Aravind's dental clinic. The site features:

- **Hero section** with a high‑resolution clinic image and clear call‑to‑actions.
- **Why Choose Us & State‑of‑the‑Art** sections highlighting modern dental care technology.
- **Services overview** displaying comprehensive dental services (General, Cosmetic, Orthodontics, Pediatric, Emergency, Restorative).
- **Smile Gallery** showcasing before/after transformations.
- **Patient testimonials** with a curated review carousel.
- **Clinic Location** with an interactive map and contact details.
- **Accessibility, SEO, and performance optimizations** (lazy‑loaded images, proper heading hierarchy, meta tags).

## How it works

The app uses React components styled with Tailwind CSS and animated with Framer Motion. Images are served from Unsplash for demonstration purposes. Navigation is handled by React Router.

## Run locally

**Prerequisites:** Node.js (v18+)

1. Install dependencies (already done)
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

## Build for production

```bash
npm run build
```

Deploy the generated `dist` folder to any static hosting provider.

## Website Structure

- **Home** (`/`) - Hero, Services, Why Choose Us, Technology, Reviews, Location
- **About** (`/about`) - Dr. Aravind's story, Mission & Values
- **Services** (`/services`) - Services overview hub
  - General Dentistry (`/services/general-dentistry`)
  - Cosmetic Dentistry (`/services/cosmetic-dentistry`)
- **Smile Gallery** (`/smile-gallery`) - Before/after transformations
- **Contact** (`/contact`) - Location, hours, contact details with map

## Design System

Based on the Frost Orthodontics Design System:
- **Primary Color:** #2D68FF (Action Blue)
- **Dark Color:** #34394D (Charcoal)
- **Accent Color:** #BCD9DE (Teal)
- **Typography:** Montserrat (headings), Times New Roman (body)
- **Max Width:** 1200px
- **Responsive:** Mobile-first design

## Next Steps

1. **Update Contact Information:**
   - Replace placeholder phone: 214.555.1234
   - Replace placeholder email: info@draravindsdental.com
   - Replace placeholder address: 123 Dental Street, Dallas, TX 75201

2. **Add Real Images:**
   - Replace hero image with actual clinic photo
   - Add real before/after photos to Smile Gallery
   - Add team photos to About page

3. **Optional Enhancements:**
   - Add more service pages (Orthodontics, Pediatric, Emergency)
   - Add Patient Resources section (New Patients, Insurance, FAQs)
   - Add Blog section
   - Add online appointment booking

## Documentation

- `TRANSFORMATION_SUMMARY.md` - Complete transformation details
- `HERO_IMAGE_GUIDE.md` - Guide for replacing hero image
- `Dental structure.md` - Original design system reference

---

**Status:** ✅ Complete and ready for deployment  
**Version:** 1.0.0  
**Last Updated:** May 13, 2026
