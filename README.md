# ShopHub - E-Commerce Application

A production-quality e-commerce web application built with Next.js 15, featuring product browsing, search, filtering, cart management, and responsive design.



## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Zustand (cart state management)
- Framer Motion (subtle animations)
- Lucide React (icons)
- next/image (optimized images)

## Features

- Product Catalog — Browse products in a responsive grid layout
- Featured Product — Highlighted premium product showcase
- Search — Debounced, case-insensitive product search
- Filters — Category, price range, and brand filters
- URL Sync — Filters reflected in URL (`?category=electronics&price=0-500&search=phone`)
- Product Details — Dynamic routes with image gallery and quantity selector
- Shopping Cart — Add, remove, increase/decrease quantity, clear cart
- Persistence — Cart saved to localStorage via Zustand persist
- Responsive — Mobile drawer sidebar, adaptive grid columns
- Accessibility— ARIA labels, semantic HTML, keyboard navigation

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd whatbytes-ecommerce

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
app/
  page.tsx                 # Home page
  cart/page.tsx            # Cart page
  product/[id]/page.tsx    # Product detail page
  layout.tsx               # Root layout
  globals.css              # Global styles

components/
  layout/                  # Header, Footer, Sidebar
  ui/                      # Button, Badge, Avatar, etc.
  product/                 # ProductCard, FeaturedProduct, Gallery
  filters/                 # CategoryFilter, PriceSlider, BrandDropdown
  cart/                    # CartItem

lib/
  data/products.ts         # Mock product dataset
  utils/index.ts           # Utility functions

store/
  cartStore.ts             # Zustand cart store with persist

types/
  index.ts                 # TypeScript interfaces

hooks/
  useDebounce.ts           # Debounce hook
  useProductFilters.ts     # Filter logic + URL sync

public/
  images/                  # Static assets
```


```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

