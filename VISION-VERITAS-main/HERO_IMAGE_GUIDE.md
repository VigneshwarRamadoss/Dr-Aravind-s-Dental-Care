# Hero Image Replacement Guide

## Current Status
The website has been successfully transformed from an eye care clinic to a dental clinic. However, the hero section image still needs to be replaced with a dental-related image.

## What Needs to Be Done

### 1. Replace Hero Image
**Location:** `public/assets/hero.png`

**Current:** Eye clinic interior image  
**Needed:** Modern dental clinic interior or a professional dental team photo

**Recommended Image Specifications:**
- **Resolution:** Minimum 1920x1080px (Full HD)
- **Aspect Ratio:** 16:9 or wider
- **Format:** PNG or JPG
- **File Size:** Optimized for web (under 500KB if possible)
- **Content:** Should show:
  - Modern dental clinic interior with dental chairs
  - Clean, professional, welcoming atmosphere
  - Good lighting
  - OR: Professional dental team photo
  - OR: Happy patient with beautiful smile

### 2. How to Replace
1. Find or create a high-quality dental clinic image
2. Save it as `hero.png` in the `public/assets/` folder
3. The image will automatically be used on the homepage hero section

### 3. Alternative: Use Unsplash URL
If you want to use a temporary image from Unsplash, update the Hero component:

**File:** `src/components/Hero.tsx`  
**Line:** Look for `backgroundImage` prop

Replace:
```tsx
<Hero backgroundImage="/assets/hero.png" />
```

With a dental clinic image URL from Unsplash:
```tsx
<Hero backgroundImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1920&auto=format&fit=crop" />
```

### 4. Other Images to Consider Replacing
While the hero image is the most important, you may also want to replace these placeholder images:

- **Diagnostic equipment images** - Currently using generic medical equipment
- **Team photos** - Currently using stock photos
- **Clinic interior photos** - Currently using generic clinic images

All images in the `public/assets/` folder can be replaced with dental-specific images.

## Image Resources
- **Unsplash:** https://unsplash.com/s/photos/dental-clinic
- **Pexels:** https://www.pexels.com/search/dental%20clinic/
- **Your Own Photos:** Use professional photos of your actual clinic for authenticity

## Notes
- The website design and structure are complete
- All text content has been updated for dental services
- Color scheme follows the dental design system (#2D68FF primary, #34394D dark, #BCD9DE accent)
- The site is fully responsive and optimized for all devices
