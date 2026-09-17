# Airbnb Listing Page Clone - Submission Notes

## Project Overview
A pixel-perfect clone of an Airbnb vacation rental listing page built with Next.js 16, TypeScript, and Tailwind CSS. The clone replicates the real Airbnb listing page for "Amor De Goa" in Candolim, Goa.

## Tech Stack
- Framework: Next.js 16 (App Router, Server Components)
- Language: TypeScript
- Styling: Tailwind CSS v4
- Icons: Custom SVGs (from Airbnb) + lucide-react (modal)
- Fonts: Inter (Google Fonts)

## Components Built (18 total)
- Header.tsx - Main navigation with search bar, logo, profile menu
- StickyNav.tsx - Scroll-triggered sticky nav with section tracking (IntersectionObserver)
- PhotoGallery.tsx - 5-image mosaic grid (hero section)
- PhotoTour.tsx - Full photo tour modal with category tabs
- Lightbox.tsx - Fullscreen image viewer with keyboard navigation
- ListingInfo.tsx - Title, host info, property stats
- HostInfo.tsx - Host highlights (entertainment, AC, self check-in)
- Description.tsx - Collapsible property description
- SleepSection.tsx - Bedroom arrangements with images
- Amenities.tsx - Top 10 amenities grid with custom SVG icons
- AmenitiesModal.tsx - Full 50-amenity modal with categorized sections
- BookingCard.tsx - Sticky booking card with price breakdown
- Calendar.tsx - Dual-month calendar with availability
- Reviews.tsx - Guest Favourite badge, rating breakdown, review cards
- MeetYourHost.tsx - Host profile card with stats and highlights
- LocationSection.tsx - Embedded Google Maps
- ThingsToKnow.tsx - House rules, safety, cancellation policy
- MoreStaysNearby.tsx - Similar listings carousel

## Key Features
- Scroll-triggered sticky navigation with active section highlighting
- Smooth slide-in animation for sticky nav on scroll past hero
- Photo tour with category-based filtering
- Full lightbox with arrow key / escape key support
- Interactive calendar with booked/unavailable dates
- Responsive layout across all breakpoints
- Guest Favourite badge with laurel wreath design
- 50 amenities in categorized modal
- Custom SVG icons matching Airbnb design system

## Project Structure
```
airbnb_clone/
  app/
    page.tsx              # Main listing page
    layout.tsx            # Root layout with fonts
    globals.css           # Global styles
    data/
      listing.ts          # All listing data (centralized)
    components/
      (18 component files)
  public/
    images/               # All property photos (.jpeg, .png)
    svg/                  # All SVG icons
    review/               # Review profile images
```

## Architecture Diagram
File: system.excalidraw (in parent directory)
Open with Excalidraw VS Code extension or excalidraw.com

Covers 4 tiers:
1. Client Tier: Web (Next.js SSR), Mobile (React Native), Host Dashboard, Admin Panel, CDN
2. API Gateway: Kong/ALB with rate limiting, JWT auth, SSL termination
3. Backend Services: Listing, Booking, User, Search, Payment, Review, Messaging, Notification, Media + Kafka + Redis
4. Data/Storage: PostgreSQL (primary + replicas), Elasticsearch, S3, MongoDB, Redis Cluster
5. Deployment: AWS ECS/K8s, Terraform, GitHub Actions CI/CD, Datadog, Sentry

## Prompt Sequence (AI-Assisted Development)

1. Initial setup - Next.js project scaffolding and reference screenshot analysis
2. Header component - Logo, search bar, profile menu matching Airbnb design
3. Photo gallery - 5-image mosaic grid matching the listing hero section
4. Photo tour modal - Full-screen modal with category tabs and image grid
5. Lightbox viewer - Fullscreen image viewing with keyboard navigation
6. Listing info section - Title, host details, property stats
7. Host highlights - 3 highlight cards with SVG icons
8. Description section - Collapsible text with "Show more" toggle
9. Sleep section - Bedroom cards with images
10. Amenities section - 10-item grid with custom SVGs, then updated to use external SVG files
11. Amenities modal - Full 50-amenity categorized modal with lucide-react icons
12. Booking card - Sticky sidebar with price calculation and date picker
13. Calendar - Dual month view with availability states
14. Reviews section - Guest Favourite badge, rating bars, review cards
15. Meet your host - Host profile card with verification badges
16. Location section - Google Maps embed
17. Things to know - Three-column rules/safety/cancellation layout
18. More stays nearby - Similar listings carousel
19. Sticky navigation - Scroll-triggered header with section tracking using IntersectionObserver
20. Asset reorganization - Moved all images to /images/ and SVGs to /svg/
21. Code cleanup - Removed all unnecessary comments across the codebase
22. Architecture diagram - Production-scale system design in Excalidraw
