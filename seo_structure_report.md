# Eventkro (Agra Mandal Events) — SEO & Website Structure Report

This report provides a comprehensive audit and structural breakdown of the Eventkro website, built with Next.js. It highlights the routing architecture, SEO metadata implementation, structured data details, technical gaps, and competitive recommendations.

---

## 1. Project Overview

*   **Next.js Version:** `^14.0.4` (React `^18.2.0`, TypeScript `^5.3.3`)
*   **Routing System:** Next.js **App Router** (exclusively, using the `src/app` directory)
*   **Main Styling & Technologies:** Tailwind CSS (`^3.3.0`), Autoprefixer, PostCSS, React Icons, React Slick (for slider carousels), and EmailJS (client-side email submission).
*   **Folder Structure:**
    ```
    eventkro/
    ├── src/
    │   ├── app/                # Route directories, layout, robots, sitemap, metadata
    │   │   ├── blog/           # Blog page layout and routing
    │   │   ├── cities/         # Location hub and static city routing (agra, mathura, etc.)
    │   │   ├── contact/        # Booking forms and local FAQ schemas
    │   │   ├── data/           # Hardcoded datasets (eventData, faq, servicesData)
    │   │   ├── events/         # Dynamic event routing
    │   │   ├── gallery/        # Client-side gallery grid
    │   │   ├── pricing/        # Pricing packages
    │   │   ├── privacy/        # Privacy policy page
    │   │   ├── services/       # Dynamic service details and city combinations
    │   │   └── terms/          # Terms of service page
    │   ├── components/         # Global layout and page components (Header, Footer, etc.)
    │   ├── lib/                # SEO configurations, cities setup, schemas, analytics
    │   └── styles/             # Global CSS stylesheets
    ├── public/                 # Static assets (favicons, images, sitemaps)
    ├── package.json            # Configuration and script dependencies
    └── vercel.json             # Deployment settings (caching, redirects)
    ```

---

## 2. Routes & Pages

### Static Routes
*   `/` (Home): Renders the main marketing page with booking highlights.
*   `/services` (Services Hub): Categorized lists of balloon and wedding ceremony setups.
*   `/gallery` (Gallery): High-resolution photo showcase of past setups with client-side filters.
*   `/blog` (Blog Hub): Houses all event planning advice, guides, and trends.
*   `/cities` (Cities Hub): Hub linking to location pages.
*   `/cities/agra` (Agra Location): Localized info focusing on events near the Taj Mahal.
*   `/cities/mathura` (Mathura Location): Localized info highlighting Holi and temple events.
*   `/cities/firozabad` (Firozabad Location): Localized info emphasizing glass decor and weddings.
*   `/cities/mainpuri` (Mainpuri Location): Localized info emphasizing traditional and rural fairs.
*   `/pricing` (Pricing): Package overview (Basic, Premium, Elite).
*   `/contact` (Contact): Event inquiry form.
*   `/terms` (Terms of Service): Client agreement details.
*   `/privacy` (Privacy Policy): Data usage agreement.

### Dynamic Routes (Statically Generated at Build Time via SSG)
*   `/events/[slug]`: Renders dedicated pages for specific event types (e.g. wedding, corporate). Renders 8 static paths:
    1.  `/events/agra-wedding-events`
    2.  `/events/agra-engagement-ceremony`
    3.  `/events/agra-birthday-party`
    4.  `/events/agra-anniversary-event`
    5.  `/events/agra-corporate-events`
    6.  `/events/agra-housewarming-ceremony`
    7.  `/events/agra-baby-shower`
    8.  `/events/agra-rituals-events`
*   `/services/[id]/[city]`: Combines 13 services and 4 cities to generate **42 active landing pages** targeting localized queries:
    *   *Service IDs:* `balloon-decoration`, `birthday-balloon-decoration`, `balloon-arch`, `balloon-backdrop-wall`, `wedding-balloon-decoration`, `baby-shower-balloon-decoration`, `balloon-bouquet`, `corporate-balloon-decoration`, `roka`, `tilak`, `haldi`, `mehendi`, `photoshoot`
    *   *City Slugs:* `agra`, `mathura`, `firozabad`, `mainpuri`
    *   *Example URL:* `/services/balloon-decoration/agra`, `/services/roka/mathura`, `/services/haldi/agra`

### Redirect Routes
*   `/services/[id]`: Renders a page that automatically redirects to `/services/[id]/[city]` using the service's primary city slug (e.g., `/services/balloon-decoration` redirects to `/services/balloon-decoration/agra`).

### API Routes
*   **None.** Form submissions on `/contact` are processed entirely client-side using `emailjs-com` directly interfacing with EmailJS APIs.

---

## 3. SEO Analysis

The SEO implementation is very clean, utilizing Next.js's native metadata API and helper libraries to build a semantic tag structure.

### Page Metadata Overview

| Page / Route | Page Title | Meta Description |
| :--- | :--- | :--- |
| **Homepage (`/`)** | Best Event Planners in Agra, Mathura & Firozabad \| Eventkro | Top event planners in Agra — weddings, corporate events, catering & decoration. Free quote in 24 hrs... |
| **Services Hub (`/services`)** | Balloon Decoration & Event Services in Agra \| Eventkro | Balloon decoration services in Agra — birthday decor, balloon arch, backdrop wall... |
| **Cities Hub (`/cities`)** | Event Planners by City \| Agra, Mathura, Firozabad \| Eventkro | Eventkro serves Agra, Mathura, Firozabad, Mainpuri and nearby cities. Explore city-wise wedding... |
| **Agra Page (`/cities/agra`)** | Event Planners in Agra \| Weddings & Corporate Events \| Eventkro | Top event planners in Agra for weddings, corporate events, birthdays and cultural functions... |
| **Mathura Page (`/cities/mathura`)** | Event Planners in Mathura \| Holi & Wedding Events \| Eventkro | Professional event planners in Mathura for Lathmar Holi, weddings, engagements... |
| **Firozabad Page (`/cities/firozabad`)** | Event Planners in Firozabad \| Weddings & Parties \| Eventkro | Best event planners in Firozabad for weddings, birthdays, corporate events and exhibitions... |
| **Mainpuri Page (`/cities/mainpuri`)** | Event Planners in Mainpuri \| Rural & Traditional Events \| Eventkro | Event planners in Mainpuri for weddings, village fairs, cultural events and family celebrations... |
| **Pricing (`/pricing`)** | Event Package Pricing in Agra \| Basic, Premium & Elite \| Eventkro | Transparent event package pricing in Agra Mandal — Basic, Premium and Elite plans for weddings... |
| **Contact (`/contact`)** | Book Event Planner in Agra \| Contact Eventkro | Contact Eventkro — top event planners in Agra for weddings, catering & decor. Call +91 7017520811... |
| **Blog Hub (`/blog`)** | Event Planning Blog \| Tips for Agra, Mathura & Firozabad \| Eventkro | Read event planning tips, wedding guides, Holi celebrations in Mathura, and corporate event ideas... |
| **Dynamic Service Pages (`/services/[id]/[city]`)** | `[Service Name]` in `[City]` \| Eventkro | Book `[service name]` in `[City]` with Eventkro. Premium decor, on-time setup, and stress-free event styling... |
| **Dynamic Event Pages (`/events/[slug]`)** | Custom Title (e.g. "Wedding Planners in Agra \| Eventkro") | Custom description (e.g. "Top wedding planners in Agra — decor, catering services...") |

### Technical Tags Setup
*   **Canonical URLs:** Configured dynamically on every page inside `alternates: { canonical: url }` through `pageMetadata`. The canonical URL points consistently to the absolute URL `https://www.eventkro.in` with appropriate path structures. The homepage handles trailing slash requirements (`https://www.eventkro.in/`).
*   **Open Graph & Twitter Tags:** Implemented in `src/lib/seo.ts`. Generates standard `og:title`, `og:description`, `og:url`, `og:site_name`, `og:locale` (`en_IN`), `og:type` (`website`), and `og:image` tags. Generates Twitter-specific tags using `summary_large_image` cards.
*   **robots.txt:** Dynamically generated at `/robots.txt` using Next.js Metadata Route. Allows all crawlers and points to the sitemap XML:
    ```
    User-agent: *
    Allow: /
    Sitemap: https://www.eventkro.in/sitemap.xml
    ```
*   **sitemap.xml:** Dynamically generated at `/sitemap.xml` using `src/app/sitemap.ts`. It resolves 13 static pages, 8 dynamic event routes, and 42 dynamic service-city pages (total of **63 compiled URLs**). All pages are tagged with a `lastModified` timestamp, custom priorities (`1.0` for home, `0.8` for key routes, `0.75` for service pages), and crawl frequencies.

### Structured Data (Schema Markup)
The project excels in schema implementation, embedding JSON-LD graphs across multiple sections:
1.  **Organization & LocalBusiness Schema (Global Layout):** Injected inside `src/app/layout.tsx`. Specifies Eventkro as a `LocalBusiness` in the Agra region, listing phone numbers, coordinates, address region, and a detailed list of 13 served towns under `areaServed` (Agra, Mathura, Firozabad, Mainpuri, Etah, Etawah, Hathras, Tundla, etc.).
2.  **FAQPage Schema (Contact Page):** Injected inside `src/app/contact/layout.tsx`. Contains 5 pre-configured Q&As detailing booking schedules, refund/cancellations, pricing, and coverage regions.
3.  **BreadcrumbList Schema (Events and Services):** Injected dynamically on `/events/[slug]` (Home -> Event) and `/services/[id]/[city]` (Home -> Services -> Service in City) to help engines build visual breadcrumbs in SERPs.
4.  **LocalBusiness & Service Combo Graph (Service-City Pages):** Injected dynamically in `ServiceCitySchema.tsx`. Builds a complex schema graph that lists:
    *   `Service` specifications (e.g. name: "Balloon Arch Decoration in Mathura", provider details).
    *   A localized `LocalBusiness` schema with the coordinates, postal code, and address specific to the selected city.
    *   A `makesOffer` array presenting a localized `Offer` pointing to the `/contact` form with `InStock` availability.
    *   An `FAQPage` containing 5 customized Q&As answering queries for that specific service-city pair.

---

## 4. Homepage Analysis

The homepage is heavily optimized to capture traffic for event planning and decoration queries in the Agra region.

### Heading Structure
*   **H1:** `Best Event Planners in Agra, Mathura & Firozabad | Eventkro` (Rendered inside the hero slideshow banner)
*   **H2s:**
    *   `Our Event Planning Services in Agra` (Event services header)
    *   `Balloon Decoration Services in Agra` (Balloon decor hub)
    *   `Catering & Decoration in Agra` (Service introduction)
    *   `Our Most Popular Party Packages` (Pricing packages)
    *   `What Our Clients Say` (Client testimonials)
    *   `Latest from Our Blog` (Recent articles showcase)
*   **H3s:**
    *   Event Card Titles (e.g. *Wedding Events*, *Corporate Events*, *Birthday*)
    *   Balloon Decoration Card Titles (e.g. *Birthday Party Decoration*, *Balloon Arch Decoration*)
    *   Feature Headings: *Event Decoration in Agra*, *Catering Services in Agra*
    *   Pricing packages: *Basic*, *Premium*, *Elite*
    *   Client Testimonials author names (*Priya Sharma*, *Rahul Verma*)
    *   Blog Post titles (*Top 5 Wedding Venues in Agra*, etc.)

### Main Content Sections
1.  **Hero Carousel:** Auto-rotating sliding cards with clear Call-to-Actions for weddings, corporate, and rituals.
2.  **SEO Intro Paragraph:** Text-heavy block targeting search engines for core terms (event planners, wedding planners, caterers) with internal linking.
3.  **Core Event Services Grid:** 8 clean cards showcasing specific events (anniversary, baby shower, tilak, housewarming).
4.  **Balloon Decor Grid:** Features 4 top balloon layouts (arch, bouquet, backdrop, birthday) with ratings.
5.  **Catering & Decor Highlight:** Two informational boxes presenting event setup and food catering options.
6.  **Pricing Plans:** 3 transparent pricing cards showing price per person, features, and minimum guest sizes.
7.  **Testimonials Grid:** Authentic client reviews with localized attributes (e.g. "Wedding in Agra", "Holi Festival in Mathura").
8.  **Blog Highlights:** Previews 3 relevant local guide articles.

### Target Keywords Detected
*   Primary focus: `event planner in agra`, `event planners in agra`, `best event planner in agra`
*   Secondary focus: `wedding planners in agra`, `catering services agra`, `agra decoration`, `event management company`
*   Secondary locations: `serving Mathura & Firozabad`

### Internal Links
*   **Header & Footer Navigation:** Standard route index links.
*   **CTA Buttons:** Deep link to `/events/[slug]`, `/services/[id]/[city]` (particularly `/services/balloon-decoration/agra`), and `/contact`.
*   **Page body links:** Linking to `/events/agra-wedding-events` and `/contact` directly from standard copy.

---

## 5. Service Pages Analysis

Service details are handled by a dynamic hub/directory system.

### Services Listing
There are **13 distinct service entries** defined in `src/app/data/servicesData.ts`:
1.  `balloon-decoration` (Balloon Decoration Services)
2.  `birthday-balloon-decoration` (Birthday Party Decoration)
3.  `balloon-arch` (Balloon Arch Decoration)
4.  `balloon-backdrop-wall` (Balloon Backdrop / Wall)
5.  `wedding-balloon-decoration` (Wedding Balloon Decoration)
6.  `baby-shower-balloon-decoration` (Baby Shower Decoration)
7.  `balloon-bouquet` (Balloon Bouquet)
8.  `corporate-balloon-decoration` (Corporate Event Balloon Decoration)
9.  `roka` (Roka / Engagement Ceremony)
10. `tilak` (Tilak / Sagai Ceremony)
11. `haldi` (Haldi Ceremony)
12. `mehendi` (Mehendi Ceremony)
13. `photoshoot` (Pre-Wedding Photoshoot)

### Content Length Estimate
Each `/services/[id]/[city]` page renders a uniform template containing about **400 words**:
*   Hero heading & breadcrumbs: ~30 words.
*   Intro paragraph: ~30-40 words.
*   Feature bullets: ~30-50 words.
*   Alternative cities grid: ~15 words.
*   FAQ accordion: ~180 words (5 items).
*   Global elements (header/footer): ~100 words.

### SEO Optimization Status
Technically very advanced. They generate metadata dynamically on request, establish proper canonicals, and inject highly detailed schema graphs (BreadcrumbList, FAQPage, Service, and LocalBusiness). However, the page content itself is heavily templated (the same intro sentence is used across all cities, only replacing the city name), which carries search engine crawling risks.

---

## 6. Local SEO Analysis

Local optimization is the strongest search element on this website, directly targeting regional queries.

### Cities Currently Targeted
Four primary cities are configured in the system:
1.  **Agra** (Slug: `agra`, Postal Code: `282001`, Coordinates: `27.1767, 78.0081`)
2.  **Mathura** (Slug: `mathura`, Postal Code: `281001`, Coordinates: `27.4924, 77.6737`)
3.  **Firozabad** (Slug: `firozabad`, Postal Code: `283203`, Coordinates: `27.1592, 78.3957`)
4.  **Mainpuri** (Slug: `mainpuri`, Postal Code: `205001`, Coordinates: `27.2296, 79.0234`)

### Location-Specific Pages
*   **Static City Guides:** Dedicated subfolders with custom layout and static pages under `/cities/[city]` (e.g. `/cities/agra`, `/cities/mathura`, `/cities/firozabad`, `/cities/mainpuri`).
*   **Dynamic Service-City Matches:** The router dynamically spins up dedicated paths combining every service with its respective served cities, creating hyper-targeted local landing pages like `/services/haldi/mathura` or `/services/balloon-arch/mainpuri`.
*   *Note on Shikohabad:* There is an empty folder at `src/app/cities/shikohabad` without any files. It is not an active route, nor is it indexed, despite being mentioned in the global layout schema.

### LocalBusiness Schema Usage
*   **Global Schema:** The root layout sets a main `LocalBusiness` entry representing Eventkro overall, based in Agra. It uses coordinates `27.1767, 78.0081` and lists 13 cities under `areaServed`.
*   **Dynamic Local Schema:** On each `/services/[id]/[city]` landing page, a specific `LocalBusiness` schema is generated using coordinates and postal codes mapped to that particular city slug (fetched from `ALL_CITIES` in `src/lib/cities.ts`). This tells search engines that the business operates locally in that exact municipality.

---

## 7. Technical SEO Analysis

### SSR / SSG / ISR Implementation
The site runs on **Static Site Generation (SSG)** for all dynamic routes. By employing `generateStaticParams()` in `/events/[slug]/page.js` and `/services/[id]/[city]/page.tsx`, Next.js compiles all possible route combinations at build time.
*   *SEO Impact:* Excellent. Pages load instantly with pre-rendered HTML, allowing search bots to crawl page headers and content without waiting for JavaScript execution.

### Image Optimization (Critical Issue)
Throughout the project (`HomePage.tsx`, `ServiceDetailContent.tsx`, and `page.js` in events), standard HTML `<img>` tags are used instead of Next.js's optimized `<Image>` component (imported from `next/image`).
*   *SEO Impact:* High risk. Raw `<img>` tags do not automatically convert JPG/PNG formats to next-generation formats like WebP or AVIF, do not provide responsive srcsets, and do not lazy-load by default. This increases page size and delays page load.

### Core Web Vitals (CWV)
*   **Cumulative Layout Shift (CLS):** High risk of layout shifts since many `<img>` elements lack predefined `width` and `height` properties. When images load, content shifts down.
*   **Largest Contentful Paint (LCP):** LCP is delayed due to heavy background images in hero sliders and standard high-resolution images in service grids.
*   **First Input Delay (FID) / Interaction to Next Paint (INP):** Low risk. JavaScript bundles are small with very light interactivity.

### Lazy Loading
*   No dynamic component imports or code-splitting is utilized.
*   The only lazy-loaded script is Google Analytics tracking, wrapped under a React `Suspense` boundary in `layout.tsx`.

---

## 8. Content Analysis

### Existing Keywords
The copy successfully targets high-intent, local search terms such as `"wedding planner in agra"`, `"balloon decorators in agra"`, `"birthday decoration in agra"`, and `"corporate event planners in agra"`.

### Keyword Gaps
1.  **Catering Services Pages:** Although catering is marketed on the homepage and footer, there are **no service entries** or dedicated pages for catering in `servicesData.ts`. The site fails to capture queries like `"best wedding caterer in agra"` or `"birthday party caterer in mathura"`.
2.  **Served Cities without Landing Pages:** Cities like Etah, Etawah, Hathras, Tundla, and Fatehabad are defined in the global layout schema as served areas, but there are zero pages or keyword targets for them.
3.  **Blog Article Visibility:** The blog page `/blog` loads articles dynamically on the client-side by modifying a component state variable (`currentBlogPost`). Because there are no dedicated URLs for individual articles (e.g. `/blog/top-wedding-venues-agra`), **none of the blog articles can be indexed by search engines**. The high-quality articles about wedding venues and Holi guides are invisible to organic search.

### Thin & Duplicate Content Risks
*   **Thin Content:** The `/cities` and `/gallery` pages contain very little text copy, serving primarily as routing and photo grids.
*   **Doorway Pages (Duplicate Content):** The 42 dynamic service pages use a single templated structure where only the city name is replaced. Search engines may identify these pages as doorway pages created solely for keyword stuffing across locations rather than presenting unique local information.

---

## 9. Internal Linking Structure

### Main Navigation Links (Header)
Consistent global menu: `Home` (`/`), `Services` (`/services`), `Gallery` (`/gallery`), `Blog` (`/blog`), `Cities` (`/cities`), `Pricing` (`/pricing`), `Contact` (`/contact`).

### Footer Links
Structured for link equity flow. It links to legal pages (`/privacy`, `/terms`) and houses high-value location-keyword links:
*   `Wedding planners in Agra` -> `/events/agra-wedding-events`
*   `Corporate events` -> `/events/agra-corporate-events`
*   `Birthday parties` -> `/events/agra-birthday-party`
*   `Cultural & ritual events` -> `/events/agra-rituals-events`
*   `Balloon decoration in Agra` -> `/services/balloon-decoration/agra`
*   `Birthday party decoration` -> `/services/birthday-balloon-decoration/agra`

### Cross-Linking Between Pages
*   **Service Pages:** Dynamically list all alternative cities where the service is available. This forms a circular linking loop (e.g., the Agra page links to Mathura, which links back to Agra), facilitating complete crawling by search spiders.
*   **Event Pages:** Programmatically link back to specific ceremony sub-services in Agra (e.g., the wedding events page links directly to `/services/haldi/agra` and `/services/mehendi/agra`).

---

## 10. Competitive SEO Readiness

### Strengths
*   High speed due to Static Site Generation (SSG).
*   Flawless JSON-LD schema implementation (Organization, LocalBusiness, Service, Breadcrumbs, FAQs).
*   Automatic canonical tags and clean URLs.
*   Dynamic Sitemap includes all dynamic locations.

### Weaknesses
*   Blog articles are completely unindexable by search engines.
*   Missing catering service landing pages.
*   Raw image elements delay loading speeds and affect Core Web Vitals.
*   Duplicate page layout templates for location landing pages.

### Actionable Roadmap

1.  **Migrate Blog to Dynamic Routing:**
    *   Move blog posts out of a hardcoded array inside `/blog/page.tsx` and place them in a dedicated folder: `src/app/blog/[slug]/page.tsx`.
    *   Generate static metadata and schema for each post.
2.  **Add Catering as a Service:**
    *   Add a `catering` item to `servicesData.ts`.
    *   This will automatically spin up pages like `/services/catering/agra` and `/services/catering/mathura` via `sitemap.ts` and `generateStaticParams()`.
3.  **Optimize Images:**
    *   Replace all `<img>` elements with Next.js's native `<Image />` component.
    *   Set sizes and enable default lazy loading.
4.  **Expand Served Cities:**
    *   Add recommended city pages in the `ALL_CITIES` list in `src/lib/cities.ts` (e.g., Shikohabad, Etah, Etawah).
    *   This will automatically expand service-location offerings, opening up dozens of new localized organic entry points.

---

## 11. Complete Route Map

| Path | File Location | Routing Type | Metadata Status | Schema Markup | Canonical URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Static | Static | Organization, LocalBusiness | `https://www.eventkro.in/` |
| `/services` | `src/app/services/page.tsx` | Static | Static | None | `https://www.eventkro.in/services` |
| `/gallery` | `src/app/gallery/page.tsx` | Static | Static | None | `https://www.eventkro.in/gallery` |
| `/blog` | `src/app/blog/page.tsx` | Static | Static | None | `https://www.eventkro.in/blog` |
| `/cities` | `src/app/cities/page.tsx` | Static | Static | None | `https://www.eventkro.in/cities` |
| `/cities/agra` | `src/app/cities/agra/page.tsx` | Static | Static | None | `https://www.eventkro.in/cities/agra` |
| `/cities/mathura` | `src/app/cities/mathura/page.tsx` | Static | Static | None | `https://www.eventkro.in/cities/mathura` |
| `/cities/firozabad` | `src/app/cities/firozabad/page.tsx` | Static | Static | None | `https://www.eventkro.in/cities/firozabad` |
| `/cities/mainpuri` | `src/app/cities/mainpuri/page.tsx` | Static | Static | None | `https://www.eventkro.in/cities/mainpuri` |
| `/pricing` | `src/app/pricing/page.tsx` | Static | Static | None | `https://www.eventkro.in/pricing` |
| `/contact` | `src/app/contact/page.tsx` | Static | Static | FAQPage | `https://www.eventkro.in/contact` |
| `/terms` | `src/app/terms/page.tsx` | Static | Static | None | `https://www.eventkro.in/terms` |
| `/privacy` | `src/app/privacy/page.jsx` | Static | Static | None | `https://www.eventkro.in/privacy` |
| `/events/[slug]` | `src/app/events/[slug]/page.js` | Dynamic (SSG) | Dynamic | BreadcrumbList | `https://www.eventkro.in/events/[slug]` |
| `/services/[id]` | `src/app/services/[id]/page.tsx` | Redirect | None | None | N/A (Redirects) |
| `/services/[id]/[city]` | `src/app/services/[id]/[city]/page.tsx` | Dynamic (SSG) | Dynamic | LocalBusiness, Service, Breadcrumb, FAQPage | `https://www.eventkro.in/services/[id]/[city]` |

---

## 12. Core SEO Implementation Code Reference

### Root Layout (`src/app/layout.tsx`)
```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';
import './globals.css';
import GoogleAnalytics from '../components/GoogleAnalytics';
import GoogleAnalyticsPageView from '../components/GoogleAnalyticsPageView';
import { isGaEnabled } from '../lib/analytics';
import { SITE_EMAIL, SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY, siteUrl } from '../lib/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eventkro - Best Event Planners in Agra, Mathura, Firozabad, Mainpuri & Nearby Cities',
  description:
    'Book top-rated event planners in Agra, Mathura, Firozabad, Shikohabad, Mainpuri, Etah, Etawah, Hathras, and nearby cities. We organize weddings, birthdays, and corporate events across the Agra Mandal region.',
  keywords: [
    'Event planner in Agra',
    'Event planner in Mathura',
    'Event planner in Firozabad',
    'Event planner in Shikohabad',
    'Event planner in Mainpuri',
    'Event planner in Etah',
    'Event planner in Etawah',
    'Event planner in Hathras',
    'Wedding planner Agra Mandal',
    'Corporate events Agra',
  ],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/favicon-512x512.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://www.eventkro.in'),
  alternates: {
    canonical: siteUrl('/'),
  },
  openGraph: {
    title: 'Eventkro - Agra Mandal Event Planners',
    description:
      'Hire the best event planners for weddings, birthdays, and corporate events across Agra, Mathura, Firozabad, Mainpuri, Etah, Etawah & nearby cities.',
    url: siteUrl('/'),
    siteName: 'Eventkro',
    images: [
      {
        url: '/favicon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Eventkro Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eventkro - Best Event Planners in Agra Mandal',
    description:
      'Book the best event planners in Agra, Mathura, Shikohabad, Firozabad, Mainpuri, and nearby cities with Eventkro.',
    images: ['/favicon-512x512.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="V_KaNUo2bbmXkaDavXsO7-n9ID35w4BQJQFtg6kHkxw"
        />
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Eventkro',
            image: 'https://www.eventkro.in/favicon-512x512.png',
            '@id': siteUrl('/'),
            url: siteUrl('/'),
            telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
            email: SITE_EMAIL,
            priceRange: '₹₹',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 27.1767,
              longitude: 78.0081,
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Agra Mandal Region',
              addressLocality: 'Agra',
              addressRegion: 'Uttar Pradesh',
              postalCode: '282001',
              addressCountry: 'IN',
            },
            areaServed: [
              'Agra',
              'Mathura',
              'Firozabad',
              'Shikohabad',
              'Mainpuri',
              'Etah',
              'Etawah',
              'Hathras',
              'Tundla',
              'Fatehabad',
              'Kheragarh',
              'Bah',
              'Achhnera',
            ],
            description:
              'Professional event planning and decoration services in Agra Mandal region, including Agra, Mathura, Firozabad, Mainpuri, Etah, Etawah, and more.',
            sameAs: [
              'https://www.facebook.com/eventkro.in.agra',
              'https://www.instagram.com/eventkro?igsh=MXE0eHlzNzhrdzVwMw==',
            ],
          })}
        </Script>
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {isGaEnabled() && (
          <Suspense fallback={null}>
            <GoogleAnalyticsPageView />
          </Suspense>
        )}
        {children}
      </body>
    </html>
  );
}
```

### Metadata Builder Helper (`src/lib/seo.ts`)
```typescript
import type { Metadata } from 'next';
import { SITE_NAME, siteUrl } from './site';

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path = '/',
  keywords,
  image = '/favicon-512x512.png',
}: PageMetadataOptions): Metadata {
  const url = siteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: image,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
```

### Sitemap XML Builder (`src/app/sitemap.ts`)
```typescript
import type { MetadataRoute } from 'next';
import { eventSlugs } from './data/eventData';
import { siteUrl } from '../lib/site';
import { getServiceCityParams } from '../lib/serviceSeo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/contact',
    '/services',
    '/gallery',
    '/blog',
    '/cities',
    '/cities/agra',
    '/cities/mathura',
    '/cities/firozabad',
    '/cities/mainpuri',
    '/pricing',
    '/terms',
    '/privacy',
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: siteUrl(path === '' ? '/' : path),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...getServiceCityParams().map(({ id, city }) => ({
      url: siteUrl(`/services/${id}/${city}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    ...eventSlugs.map((slug) => ({
      url: siteUrl(`/events/${slug}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ];
}
```

### Robots.txt Builder (`src/app/robots.ts`)
```typescript
import type { MetadataRoute } from 'next';
import { siteUrl } from '../lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl('/')}sitemap.xml`,
  };
}
```

### Service-City Schema Builder (`src/lib/serviceSchema.ts`)
```typescript
import type { Service } from '../app/data/servicesData';
import { cityMetaFromSlug } from './cities';
import { getServiceCityContent } from './serviceSeo';
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE_PRIMARY,
  SITE_PHONE_SECONDARY,
  siteUrl,
} from './site';

export type ServiceCityFaqItem = {
  question: string;
  answer: string;
};

export function getServiceCityFaqItems(
  service: Service,
  cityName: string
): ServiceCityFaqItem[] {
  const serviceLower = service.name.toLowerCase();
  const cityLower = cityName.toLowerCase();

  return [
    {
      question: `Do you offer ${serviceLower} in ${cityName}?`,
      answer: `Yes. Eventkro provides professional ${serviceLower} in ${cityName} and across the Agra Mandal region. We handle design, materials, on-site setup, and teardown so your event looks polished from start to finish.`,
    },
    {
      question: `How do I book ${serviceLower} in ${cityName}?`,
      answer: `Call ${SITE_PHONE_PRIMARY} or fill out our contact form at eventkro.in/contact. Share your event date, venue in ${cityName}, and guest count — we send a customized quote within 24 hours.`,
    },
    {
      question: `How much does ${serviceLower} cost in ${cityName}?`,
      answer: `Pricing depends on venue size, theme, balloon or decor quantity, and add-ons. Eventkro offers transparent quotes for ${serviceLower} in ${cityName} with no hidden charges. Contact us for a free estimate.`,
    },
    {
      question: `How far in advance should I book in ${cityName}?`,
      answer: `For weddings and peak-season weekends in ${cityName}, book 4–8 weeks ahead. Birthdays and smaller events often need 1–2 weeks. Early booking secures your preferred date and theme for ${serviceLower}.`,
    },
    {
      question: `Which areas near ${cityName} do you cover?`,
      answer: `We serve ${cityName} and nearby cities including Agra, Mathura, Firozabad, and Mainpuri. For venues outside our standard ${cityLower} coverage, ask us about travel — we accommodate many locations in the Agra Mandal.`,
    },
  ];
}

export function buildServiceCitySchemaGraph(
  service: Service,
  cityName: string,
  citySlug: string
) {
  const content = getServiceCityContent(service, cityName);
  const pageUrl = siteUrl(`/services/${service.id}/${citySlug}`);
  const cityMeta = cityMetaFromSlug(citySlug);
  const faqItems = getServiceCityFaqItems(service, cityName);
  const imageUrl = service.image.startsWith('http')
    ? service.image
    : siteUrl(service.image);

  const localBusinessId = `${siteUrl('/')}#localbusiness`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: siteUrl('/services'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: content.h1,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: content.h1,
        description: content.description,
        url: pageUrl,
        image: imageUrl,
        serviceType: service.name,
        provider: {
          '@type': 'LocalBusiness',
          '@id': localBusinessId,
          name: SITE_NAME,
          url: siteUrl('/'),
          image: siteUrl('/favicon-512x512.png'),
          telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
          email: SITE_EMAIL,
          priceRange: '₹₹',
          address: {
            '@type': 'PostalAddress',
            addressLocality: cityName,
            addressRegion: 'Uttar Pradesh',
            postalCode: cityMeta?.postalCode ?? '282001',
            addressCountry: 'IN',
          },
          ...(cityMeta
            ? {
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: cityMeta.latitude,
                  longitude: cityMeta.longitude,
                },
              }
            : {}),
          areaServed: {
            '@type': 'City',
            name: cityName,
          },
          sameAs: [
            'https://www.facebook.com/eventkro.in.agra',
            'https://www.instagram.com/eventkro?igsh=MXE0eHlzNzhrdzVwMw==',
          ],
        },
        areaServed: {
          '@type': 'City',
          name: cityName,
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': localBusinessId,
        name: SITE_NAME,
        description: `${content.h1} by Eventkro — trusted event planners and decorators in ${cityName}.`,
        url: pageUrl,
        image: siteUrl('/favicon-512x512.png'),
        telephone: [SITE_PHONE_PRIMARY, SITE_PHONE_SECONDARY],
        email: SITE_EMAIL,
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          addressLocality: cityName,
          addressRegion: 'Uttar Pradesh',
          postalCode: cityMeta?.postalCode ?? '282001',
          addressCountry: 'IN',
        },
        ...(cityMeta
          ? {
              geo: {
                '@type': 'GeoCoordinates',
                latitude: cityMeta.latitude,
                longitude: cityMeta.longitude,
              },
            }
          : {}),
        areaServed: cityName,
        makesOffer: {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: content.h1,
            description: content.description,
          },
          availability: 'https://schema.org/InStock',
          url: siteUrl('/contact'),
        },
      },
    ],
  };
}
```
