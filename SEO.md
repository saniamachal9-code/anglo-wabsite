# SEO Strategy — Anglo Sanskrit Senior Secondary School, Pundri

> **Website:** https://angloschool.in  
> **Location:** Pundri, Kaithal, Haryana, India  
> **Backend:** TypeScript/Express on Render  
> **Frontend:** React SPA (Vite) on Vercel  
> **Last Updated:** September 2026

---

## Table of Contents

1. [Priority Items (Implement Immediately)](#1-priority-items-implement-immediately)
2. [Per-Page Meta Tags](#2-per-page-meta-tags)
3. [Schema Markup (JSON-LD)](#3-schema-markup-json-ld)
4. [Technical SEO Checklist](#4-technical-seo-checklist)
5. [Local SEO for Pundri, Kaithal](#5-local-seo-for-pundri-kaithal)
6. [Google Business Profile Setup](#6-google-business-profile-setup)
7. [Keywords Targeting Strategy](#7-keywords-targeting-strategy)
8. [Content Strategy & Page Priorities](#8-content-strategy--page-priorities)
9. [Tracking & Analytics](#9-tracking--analytics)
10. [Ongoing SEO Tasks](#10-ongoing-seo-tasks)

---

## 1. Priority Items (Implement Immediately)

These items give the highest ROI and should be done **today**.

### CRITICAL — Do First

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 1 | **Add `react-helmet-async`** — Install the package and create a per-page `<Head>` component so each route gets its own `<title>`, `<meta description>`, Open Graph, and canonical URL. Currently every page shares the same static title from `index.html`. | 🔴 Critical | 1-2 hrs |
| 2 | **Create `sitemap.xml`** — Generate a static sitemap listing all 7 routes. Add `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>`. Place in `artifacts/arya-school/public/`. | 🔴 Critical | 30 min |
| 3 | **Update `robots.txt`** — Add `Sitemap: https://angloschool.in/sitemap.xml` reference. | 🔴 Critical | 5 min |
| 4 | **Add canonical tags** — Every page must have `<link rel="canonical" href="https://angloschool.in/path" />`. | 🔴 Critical | 1 hr |
| 5 | **Add `og:image` and `og:url`** — Create a school logo/social card image (1200×630px) and add OG image tags. | 🟠 High | 1 hr |
| 6 | **Add structured data (JSON-LD)** — EducationalOrganization schema on homepage, plus per-page schemas (see Section 3). | 🟠 High | 2 hrs |
| 7 | **Set up Google Search Console** — Verify domain, submit sitemap, check for crawl errors. | 🟠 High | 30 min |
| 8 | **Add Google Analytics 4** — Add GA4 measurement ID to index.html or use a React component. | 🟠 High | 30 min |

### Implementation Guide: `react-helmet-async`

```bash
# In artifacts/arya-school/
pnpm add react-helmet-async
```

Create a shared `SEOHead` component:

```tsx
// artifacts/arya-school/src/components/SEOHead.tsx
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
}

export function SEOHead({
  title,
  description,
  canonicalPath,
  ogImage = "/og-default.png",
  ogType = "website",
  schema,
}: SEOHeadProps) {
  const baseUrl = "https://angloschool.in";
  const fullUrl = `${baseUrl}${canonicalPath}`;
  const fullTitle = `${title} | Anglo Sanskrit Senior Secondary School, Pundri`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content="Anglo Sanskrit Senior Secondary School" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* Local Business */}
      <meta name="geo.region" content="IN-HR" />
      <meta name="geo.placename" content="Pundri, Kaithal" />
      <meta name="geo.position" content="29.8570;76.5530" />
      <meta name="ICBM" content="29.8570, 76.5530" />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </Helmet>
  );
}
```

Then wrap your app with `HelmetProvider`:

```tsx
// artifacts/arya-school/src/main.tsx (or App.tsx)
import { HelmetProvider } from "react-helmet-async";

// Wrap root
<HelmetProvider>
  <App />
</HelmetProvider>
```

---

## 2. Per-Page Meta Tags

### Homepage (`/`)

```html
<title>Anglo Sanskrit Senior Secondary School, Pundri | Best School in Kaithal, Haryana</title>
<meta name="description" content="Anglo Sanskrit Senior Secondary School, Pundri — 100+ years of academic excellence, character building, and Vedic values. Admissions open for Nursery to Class XII. CBSE affiliated, dual medium instruction." />
<link rel="canonical" href="https://angloschool.in/" />
```

**Primary Keywords:** best school in Kaithal, Anglo Sanskrit School Pundri, CBSE school Pundri Haryana

### About (`/about`)

```html
<title>About Us | Anglo Sanskrit Senior Secondary School, Pundri</title>
<meta name="description" content="Learn about the 100-year legacy of Anglo Sanskrit Senior Secondary School, Pundri. Founded on Arya Samaj principles, we combine Vedic values with modern education for holistic student development." />
<link rel="canonical" href="https://angloschool.in/about" />
```

**Primary Keywords:** Anglo Sanskrit School history, Arya Samaj school Pundri, school heritage Kaithal

### Academics (`/academics`)

```html
<title>Academics | Anglo Sanskrit Senior Secondary School, Pundri</title>
<meta name="description" content="Explore our CBSE curriculum with dual medium instruction (English & Hindi) at Anglo Sanskrit School, Pundri. Science, Commerce, and Humanities streams for Classes XI-XII. Smart classrooms and experienced faculty." />
<link rel="canonical" href="https://angloschool.in/academics" />
```

**Primary Keywords:** CBSE curriculum Kaithal, dual medium school Haryana, senior secondary streams Pundri

### Admissions (`/admissions`)

```html
<title>Admissions Open 2026-27 | Anglo Sanskrit Senior Secondary School, Pundri</title>
<meta name="description" content="Admissions open at Anglo Sanskrit Senior Secondary School, Pundri for Nursery to Class XII. Required documents, fee structure, and step-by-step admission process. Apply now for 2026-27 session." />
<link rel="canonical" href="https://angloschool.in/admissions" />
```

**Primary Keywords:** school admission Pundri, admission form Kaithal school, best school admission Haryana 2026

### Facilities (`/facilities`)

```html
<title>Facilities | Anglo Sanskrit Senior Secondary School, Pundri</title>
<meta name="description" content="State-of-the-art facilities at Anglo Sanskrit School, Pundri: fully-stocked library, science & computer labs, sports ground, medical room, and safe transport across Kaithal district." />
<link rel="canonical" href="https://angloschool.in/facilities" />
```

**Primary Keywords:** school facilities Kaithal, library sports labs school Pundri, school transport Kaithal

### Gallery (`/gallery`)

```html
<title>Photo Gallery | Anglo Sanskrit Senior Secondary School, Pundri</title>
<meta name="description" content="Browse photos of campus life at Anglo Sanskrit Senior Secondary School, Pundri — classrooms, labs, sports events, cultural celebrations, and annual day performances." />
<link rel="canonical" href="https://angloschool.in/gallery" />
```

### Contact (`/contact`)

```html
<title>Contact Us | Anglo Sanskrit Senior Secondary School, Pundri</title>
<meta name="description" content="Get in touch with Anglo Sanskrit Senior Secondary School, Pundri. Visit us in Pundri town, Kaithal district, Haryana. Call, email, or fill our inquiry form for admissions and queries." />
<link rel="canonical" href="https://angloschool.in/contact" />
```

**Primary Keywords:** Anglo Sanskrit School contact, school phone number Pundri, school address Kaithal

---

## 3. Schema Markup (JSON-LD)

### Site-Wide: EducationalOrganization (Place on Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://angloschool.in/#organization",
  "name": "Anglo Sanskrit Senior Secondary School",
  "alternateName": ["Anglo Sanskrit School Pundri", "Anglo School Pundri"],
  "description": "Anglo Sanskrit Senior Secondary School, Pundri is a CBSE-affiliated co-educational school with over 100 years of heritage, founded on Arya Samaj principles. Located in Pundri, Kaithal district, Haryana.",
  "url": "https://angloschool.in",
  "logo": "https://angloschool.in/logo.png",
  "image": "https://angloschool.in/og-default.png",
  "telephone": "+91-XXXXXXXXXX",
  "email": "info@angloschool.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pundri",
    "addressLocality": "Pundri",
    "addressRegion": "Kaithal, Haryana",
    "postalCode": "136023",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.8570,
    "longitude": 76.5530
  },
  "areaServed": {
    "@type": "State",
    "name": "Haryana"
  },
  "founder": {
    "@type": "Organization",
    "name": "Arya Samaj"
  },
  "foundingDate": "1920",
  "sameAs": [
    "https://www.facebook.com/angloschoolpundri",
    "https://www.instagram.com/angloschoolpundri"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Academic Programs",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "EducationalOccupationalProgram",
          "name": "Senior Secondary (Classes XI-XII)",
          "educationalLevel": "Senior Secondary"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "EducationalOccupationalProgram",
          "name": "Secondary (Classes IX-X)",
          "educationalLevel": "Secondary"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "EducationalOccupationalProgram",
          "name": "Primary & Middle School (Nursery-VIII)",
          "educationalLevel": "Primary"
        }
      }
    ]
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "admissions",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    }
  ]
}
```

### LocalBusiness Schema (Add to Contact Page)

```json
{
  "@context": "https://schema.org",
  "@type": "School",
  "name": "Anglo Sanskrit Senior Secondary School",
  "image": "https://angloschool.in/og-default.png",
  "url": "https://angloschool.in",
  "telephone": "+91-XXXXXXXXXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pundri",
    "addressLocality": "Pundri",
    "addressRegion": "Kaithal, Haryana",
    "postalCode": "136023",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.8570,
    "longitude": 76.5530
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:30",
      "closes": "13:30"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/angloschoolpundri",
    "https://www.instagram.com/angloschoolpundri"
  ]
}
```

### BreadcrumbList Schema (Add to All Inner Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://angloschool.in/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About Us",
      "item": "https://angloschool.in/about"
    }
  ]
}
```

### FAQ Schema (Add to Admissions Page)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What documents are required for admission to Anglo Sanskrit School?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Required documents include: birth certificate, Aadhaar card of student and parents, transfer certificate (for Class II and above), previous class marksheet, passport-size photographs, and caste certificate (if applicable)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the admission process at Anglo Sanskrit School, Pundri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit the school or fill the online inquiry form. Submit required documents, attend an interaction session, and complete fee payment to confirm admission."
      }
    },
    {
      "@type": "Question",
      "name": "Which board is Anglo Sanskrit School affiliated to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anglo Sanskrit Senior Secondary School, Pundri is affiliated with CBSE (Central Board of Secondary Education), New Delhi."
      }
    },
    {
      "@type": "Question",
      "name": "What streams are offered in Classes XI-XII?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The school offers Science (PCM/PCB), Commerce, and Humanities (Arts) streams in Senior Secondary classes."
      }
    }
  ]
}
```

---

## 4. Technical SEO Checklist

### Immediate (Week 1)

- [ ] Install `react-helmet-async` and create `SEOHead` component
- [ ] Add per-page `<title>`, meta description, canonical, OG tags
- [ ] Create `public/sitemap.xml` with all routes
- [ ] Update `public/robots.txt` with sitemap reference
- [ ] Add `og:image` (create a 1200×630 social card image)
- [ ] Add `og:url` with full canonical URLs
- [ ] Add JSON-LD structured data (EducationalOrganization + FAQ)
- [ ] Verify HTTPS is forced (no mixed content)
- [ ] Check mobile responsiveness on all pages
- [ ] Add `lang="en"` (already present ✅) and `dir="ltr"` to `<html>`

### Short-Term (Week 2-4)

- [ ] Set up Google Search Console — verify domain ownership
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Set up Google Analytics 4 (GA4)
- [ ] Add `alt` text to all images in Gallery and other pages
- [ ] Compress images (use WebP format where possible)
- [ ] Add preload for critical fonts (`<link rel="preload">`)
- [ ] Implement lazy loading for gallery images (`loading="lazy"`)
- [ ] Add breadcrumb navigation component + BreadcrumbList schema
- [ ] Ensure all internal links use clean paths (no hash routing)
- [ ] Create `404.html` or improve the not-found page with helpful links
- [ ] Add `X-Robots-Tag` header on Render API routes to noindex non-page paths

### Medium-Term (Month 2-3)

- [ ] Implement Server-Side Rendering (SSR) or Pre-Rendering for critical pages (consider Vercel Edge SSR or `prerender-spa-plugin` with Vite)
- [ ] Add page speed optimization (code splitting, tree shaking via Vite)
- [ ] Implement Core Web Vitals monitoring
- [ ] Create HTML sitemap (linked from footer)
- [ ] Set up Bing Webmaster Tools
- [ ] Add `hreflang` tags if Hindi content pages are added later
- [ ] Create an XML sitemap for images (`image-sitemap.xml`)
- [ ] Minify and gzip all static assets
- [ ] Add security headers (X-Content-Type-Options, X-Frame-Options, CSP)

### Vercel-Specific

```json
// vercel.json — add headers for SEO and security
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    },
    {
      "source": "/sitemap.xml",
      "headers": [
        { "key": "Content-Type", "value": "application/xml" },
        { "key": "Cache-Control", "value": "public, max-age=86400" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 5. Local SEO for Pundri, Kaithal

### Google Business Profile Optimization

- **Business Name:** Anglo Sanskrit Senior Secondary School
- **Category:** School (Primary), Secondary School (Secondary)
- **Secondary Categories:** CBSE School, Educational Institution
- **Address:** Pundri, Kaithal, Haryana 136023
- **Service Area:** Pundri, Kaithal district, and surrounding villages

### Local Keywords to Target

| Priority | Keyword | Monthly Search (est.) |
|----------|---------|----------------------|
| 🔴 High | school in Kaithal | 1,000+ |
| 🔴 High | best school Pundri | 500+ |
| 🔴 High | CBSE school Kaithal | 800+ |
| 🟠 Medium | English medium school Kaithal | 600+ |
| 🟠 Medium | admission in school Kaithal 2026 | 400+ |
| 🟠 Medium | senior secondary school Pundri | 300+ |
| 🟡 Low | Arya Samaj school Haryana | 200+ |
| 🟡 Low | schools near Pundri | 200+ |
| 🟡 Low | top 10 schools in Kaithal district | 500+ |

### Local Citation Building (NAP Consistency)

Ensure **Name, Address, Phone** are identical on all platforms:

| Platform | Action |
|----------|--------|
| Google Business Profile | Create / Claim and verify |
| Justdial | Add listing |
| Sulekha | Add listing |
| IndiaMART (Education) | Add listing |
| Facebook Business Page | Create with matching NAP |
| YouTube Channel | Create for school videos |
| India Education | Add listing |
| SchoolMyKids | Add listing |
| VerifiedList | Add listing |

### Local Content Ideas

1. **Blog/Page:** "Best Schools in Kaithal District 2026 — Complete Guide"
2. **Blog/Page:** "Why Pundri is Becoming an Education Hub in Haryana"
3. **Blog/Page:** "Anglo Sanskrit School: 100 Years of Education in Kaithal"
4. **Google Posts:** Share events, annual day photos, sports achievements weekly
5. **Student Testimonials:** Video testimonials from local parents

### Google Business Profile Tips

- Post weekly updates (events, achievements, photos)
- Respond to all reviews within 24 hours
- Add photos every week (campus, events, students with consent)
- Use Q&A section — add FAQs yourself and answer them
- Add all services: "CBSE Education", "Senior Secondary", "Co-curricular Activities"
- Enable messaging if available
- Keep hours updated (summer: 7:30 AM–1:30 PM, winter: 8:00 AM–2:00 PM)

---

## 6. Google Business Profile Setup

### Step-by-Step Checklist

- [ ] **Step 1:** Go to https://business.google.com
- [ ] **Step 2:** Click "Manage now" → Enter school name "Anglo Sanskrit Senior Secondary School"
- [ ] **Step 3:** If listing exists, claim it. If not, create new.
- [ ] **Step 4:** Enter exact address: Pundri, Kaithal, Haryana 136023
- [ ] **Step 5:** Select categories: Primary → "School", Secondary → "Secondary School", "CBSE School"
- [ ] **Step 6:** Add phone number (use the school's primary number)
- [ ] **Step 7:** Add website URL: https://angloschool.in
- [ ] **Step 8:** Add business hours (summer/winter schedules)
- [ ] **Step 9:** Write business description (750 chars max):

> Anglo Sanskrit Senior Secondary School, Pundri is a premier CBSE-affiliated co-educational institution with over a century of academic excellence. Located in Pundri town, Kaithal district, Haryana, the school was founded on Arya Samaj principles, blending Vedic values with modern education. We offer Nursery through Class XII with dual medium instruction (English & Hindi). Our campus features science labs, a computer center, library, sports ground, and smart classrooms. Known for strong academics, character building, and holistic student development.

- [ ] **Step 10:** Upload high-quality photos:
  - School building exterior (cover photo)
  - Classrooms
  - Science labs
  - Computer lab
  - Library
  - Sports ground
  - Annual day / cultural events
  - School logo
  - Minimum 10 photos to start
- [ ] **Step 11:** Verify the listing (postcard to school address or phone verification)
- [ ] **Step 12:** Add all services offered
- [ ] **Step 13:** Set up messaging
- [ ] **Step 14:** Post first update (admissions open announcement)
- [ ] **Step 15:** Add FAQ questions and answers

---

## 7. Keywords Targeting Strategy

### Primary Keywords (Homepage Focus)

| Keyword | Type | Target Page |
|---------|------|-------------|
| Anglo Sanskrit Senior Secondary School Pundri | Brand | Homepage |
| best school in Kaithal | Informational | Homepage |
| CBSE school in Kaithal Haryana | Informational | Homepage |
| Anglo Sanskrit School Pundri | Brand | Homepage |
| top school Pundri Kaithal | Informational | Homepage |

### Secondary Keywords (Inner Pages)

| Keyword | Target Page |
|---------|-------------|
| school admission Kaithal 2026-27 | Admissions |
| admission process Anglo Sanskrit School | Admissions |
| fee structure school Kaithal | Admissions |
| CBSE curriculum Haryana | Academics |
| senior secondary school Kaithal | Academics |
| science commerce arts streams Kaithal | Academics |
| school facilities Kaithal | Facilities |
| school library sports ground Pundri | Facilities |
| school contact number Kaithal | Contact |
| school address Pundri Haryana | Contact |

### Long-Tail Keywords (Blog/Content)

| Keyword | Content Type |
|---------|-------------|
| best CBSE schools in Kaithal district 2026 | Blog post |
| Arya Samaj schools in Haryana list | Blog post |
| how to take admission in CBSE school Kaithal | FAQ / Blog |
| English medium vs Hindi medium school Haryana | Blog post |
| benefits of Vedic education modern era | Blog post |
| senior secondary science stream Kaithal | Landing page |
| school with sports facilities Kaithal | Facilities page |
| safe school transport Kaithal district | Facilities page |
| schools near Pundri village | Local SEO |
| 100 year old school Haryana | About page |

### Keyword Mapping Summary

```
Homepage     → best school Kaithal, CBSE school Pundri, Anglo Sanskrit School
About        → Arya Samaj school, heritage school Haryana, 100 year school
Academics    → CBSE curriculum, dual medium, senior secondary streams
Admissions   → school admission Kaithal, admission process, fee structure
Facilities   → school labs, library, sports, transport Kaithal
Gallery      → school campus photos, annual day Kaithal
Contact      → school phone number, school address Pundri
```

---

## 8. Content Strategy & Page Priorities

### Priority 1 — Optimize Existing Pages (Week 1-2)

| Page | Action |
|------|--------|
| **Homepage** | Add hero section keyword-rich copy, improve H1 tag, add structured data, create compelling meta description |
| **Admissions** | Add FAQ schema, detailed fee structure section, step-by-step process with dates |
| **Contact** | Add LocalBusiness schema, full NAP with map embed, office hours |
| **About** | Expand heritage content, add timeline, founder story, add EducationalOrganization schema |

### Priority 2 — New Content Pages (Month 1-2)

| Page | Route | Keywords |
|------|-------|----------|
| **Blog** | `/blog` | Content hub for all long-tail keywords |
| **Results** | `/results` | "board results Kaithal", "pass percentage school" |
| **Events** | `/events` | "school events Kaithal", "annual day school" |
| **Faculty** | `/faculty` | "experienced teachers Kaithal" |
| **Alumni** | `/alumni` | "alumni Anglo Sanskrit School" |

### Priority 3 — Content Marketing (Month 2-6)

| Content | Type | Purpose |
|---------|------|---------|
| "Top 10 Schools in Kaithal 2026" | Blog | Local SEO, backlinks |
| "Why Choose CBSE Board?" | Blog | Informational, authority |
| "Vedic Values in Modern Education" | Blog | Brand story, unique selling |
| School Tour Video | YouTube | Engagement, local SEO |
| Student Testimonial Videos | YouTube | Trust, conversions |
| Annual Day Photo Gallery Updates | Gallery | Fresh content signal |
| Sports Day Coverage | Blog + Gallery | Local engagement |
| Teacher's Day / Children's Day Posts | Blog + Social | Fresh content |

### Page Content Recommendations

**Homepage improvements:**
- H1: "Anglo Sanskrit Senior Secondary School — 100+ Years of Academic Excellence in Pundri"
- Add a "Why Choose Us" section with keyword-rich content
- Add a testimonials section (parent/student quotes)
- Add a "Latest News/Updates" section for fresh content signals
- Add a quick "Admissions Open" CTA with dates

**New Section: Testimonials**
```html
<section>
  <h2>What Parents Say About Us</h2>
  <!-- 3-4 parent testimonials with schema markup -->
</section>
```

**New Section: Quick Stats**
```html
<section>
  <h2>Anglo Sanskrit at a Glance</h2>
  <!-- 100+ Years | 1000+ Students | 50+ Faculty | 95%+ Results -->
</section>
```

---

## 9. Tracking & Analytics

### Google Analytics 4 Setup

1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console Setup

1. Go to https://search.google.com/search-console
2. Add property → Domain type → `angloschool.in`
3. Verify via DNS TXT record (add to domain registrar)
4. Submit sitemap: `https://angloschool.in/sitemap.xml`
5. Monitor:
   - Performance (queries, clicks, impressions, CTR, position)
   - Coverage (indexed pages, errors)
   - Core Web Vitals
   - Mobile Usability
   - Manual Actions

### Key Metrics to Track Monthly

| Metric | Tool | Target |
|--------|------|--------|
| Organic sessions | GA4 | Month-over-month growth |
| Top queries | GSC | Ranking for target keywords |
| Click-through rate (CTR) | GSC | >3% average |
| Average position | GSC | Top 10 for primary keywords |
| Core Web Vitals | GSC | All "Good" |
| Bounce rate | GA4 | <60% |
| Pages per session | GA4 | >2 |
| Local pack ranking | Manual search | Top 3 for local queries |
| Backlinks | GSC | Growing monthly |
| Indexed pages | GSC | All 7+ pages indexed |

### Conversion Tracking

Set up GA4 events for:
- Inquiry form submission (Contact page)
- Apply Now button click (Admissions page)
- Phone number click (tap-to-call)
- WhatsApp click (if added)
- Direction request (Google Maps)

---

## 10. Ongoing SEO Tasks

### Weekly
- [ ] Post on Google Business Profile (event, photo, or update)
- [ ] Monitor and respond to any Google reviews
- [ ] Check Google Search Console for crawl errors

### Monthly
- [ ] Publish 1-2 blog posts targeting long-tail keywords
- [ ] Review Google Analytics for traffic trends
- [ ] Check keyword rankings in GSC
- [ ] Update photo gallery with new events
- [ ] Build 2-3 local citations (directory listings)
- [ ] Check for broken links

### Quarterly
- [ ] Comprehensive SEO audit
- [ ] Update meta descriptions based on GSC CTR data
- [ ] Refresh old content with current year and updated info
- [ ] Analyze competitor rankings
- [ ] Review and update schema markup
- [ ] Check mobile usability reports

### Annually
- [ ] Full content strategy review
- [ ] Keyword research refresh
- [ ] Competitor analysis
- [ ] Technical SEO audit
- [ ] Update all pages with new academic year info

---

## Appendix A: Sitemap XML Template

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://angloschool.in/</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://angloschool.in/about</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://angloschool.in/academics</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://angloschool.in/admissions</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://angloschool.in/facilities</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://angloschool.in/gallery</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://angloschool.in/contact</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## Appendix B: robots.txt (Updated)

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://angloschool.in/sitemap.xml
```

---

> **Estimated Impact:** Implementing Priority 1 items (react-helmet-async, sitemap, schema, GSC) should result in **indexed pages within 2-4 weeks** and measurable organic traffic improvement within **2-3 months**. Local SEO + GBP optimization should place the school in the **local 3-pack** for "school in Kaithal" queries within **3-6 months**.
