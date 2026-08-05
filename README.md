
# 🚀 Radhe — Software Developer Portfolio

A **production-quality, multi-page portfolio website** built with modern web technologies. Features a luxurious Midnight Sapphire + Gold design, smooth animations, dark/light mode, and a fully responsive layout.

---

## ✨ Features

- **9 Pages** — Home, About, Skills, Projects, Experience, Certifications, Blog, Contact, Resume
- **Dark & Light Mode** — System-aware with manual toggle
- **Smooth Animations** — Page transitions, scroll reveals, hover effects via Framer Motion
- **Glassmorphism UI** — Frosted glass cards with elegant blur effects
- **Project & Blog Filtering** — Real-time search and category filtering
- **Contact Form** — Validated with react-hook-form + Zod, Server Actions integration
- **SEO Optimized** — Dynamic metadata, JSON-LD, sitemap, robots.txt, Open Graph
- **Fully Responsive** — Mobile-first design, tested across all breakpoints
- **Accessible** — WCAG compliant, keyboard navigation, skip links, focus management
- **Custom 404** — Branded error page
- **Toast Notifications** — Success/error/info feedback system
- **Scroll-to-Top** — Floating navigation button
- **Print-Ready Resume** — Styled HTML resume with download and print support

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.x | Framework (App Router, SSR/SSG) |
| [React](https://react.dev) | 19.x | UI Library |
| [TypeScript](https://typescriptlang.org) | 5.x | Type Safety |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first Styling |
| [Framer Motion](https://www.framer.com/motion) | 12.x | Animations |
| [Lucide React](https://lucide.dev) | Latest | Icon Library |
| [next-themes](https://github.com/pacocoursey/next-themes) | Latest | Dark/Light Mode |
| [react-hook-form](https://react-hook-form.com) | Latest | Form Management |
| [Zod](https://zod.dev) | Latest | Schema Validation |
| [ESLint](https://eslint.org) | 9.x | Linting |
| [Prettier](https://prettier.io) | Latest | Code Formatting |

---

## 📁 Project Structure

```
src/
├── actions/              # Next.js Server Actions
│   └── contact.ts        # Contact form submission handler
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── blog/             # Blog list + [slug] detail pages
│   ├── certifications/   # Certifications page
│   ├── contact/          # Contact page
│   ├── experience/       # Experience timeline page
│   ├── projects/         # Projects page with filtering
│   ├── resume/           # Resume page
│   ├── skills/           # Skills page
│   ├── error.tsx         # Error boundary
│   ├── globals.css       # Tailwind v4 theme + design system
│   ├── layout.tsx        # Root layout with providers
│   ├── loading.tsx       # Global loading state
│   ├── not-found.tsx     # Custom 404 page
│   ├── page.tsx          # Home page
│   ├── robots.ts         # Dynamic robots.txt
│   ├── sitemap.ts        # Dynamic sitemap.xml
│   └── template.tsx      # Page transition animations
├── components/
│   ├── features/         # Feature-specific components
│   │   ├── HeroSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SkillCard.tsx
│   │   ├── Timeline.tsx
│   │   ├── BlogCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── TestimonialSlider.tsx
│   │   └── ... (16 components)
│   ├── layout/           # Layout components
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   └── ... (7 components)
│   ├── providers/        # Context providers
│   │   ├── ThemeProvider.tsx
│   │   └── ClientProviders.tsx
│   └── ui/               # UI primitives
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Modal.tsx
│       ├── Toast.tsx
│       └── ... (15 components)
├── data/                 # Local data files (API-ready)
│   ├── blog-posts.ts
│   ├── certifications.ts
│   ├── experience.ts
│   ├── navigation.ts
│   ├── personal.ts
│   ├── projects.ts
│   ├── site-metadata.ts
│   ├── skills.ts
│   └── testimonials.ts
├── hooks/                # Custom React hooks
│   ├── use-debounce.ts
│   ├── use-media-query.ts
│   ├── use-scroll-position.ts
│   ├── use-scroll-to-top.ts
│   └── use-toast.tsx
├── lib/                  # Utilities and configuration
│   ├── fonts.ts
│   ├── utils.ts
│   └── validations/
│       └── contact.ts
├── types/                # TypeScript type definitions
│   ├── blog.ts
│   ├── certification.ts
│   ├── contact.ts
│   ├── experience.ts
│   ├── index.ts
│   ├── navigation.ts
│   ├── project.ts
│   ├── skill.ts
│   └── testimonial.ts
└── utils/                # Helper functions
    ├── filter.ts
    ├── format-date.ts
    ├── reading-time.ts
    └── slugify.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ (or pnpm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/radhe-dev/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (with Turbopack) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Customization

### Personal Information

Edit `src/data/personal.ts` to update your name, title, bio, social links, and contact details.

### Projects

Edit `src/data/projects.ts` to add, remove, or modify projects. Each project follows the `Project` interface defined in `src/types/project.ts`.

### Blog Posts

Edit `src/data/blog-posts.ts` to add new articles. Content is stored as HTML strings and rendered with the `.prose-luxury` styles.

### Colors & Theme

The design system is defined in `src/app/globals.css` using CSS custom properties. Modify the `:root` and `.dark` selectors to change the color palette.

### Skills, Experience & Certifications

Edit the respective files in `src/data/` — each follows strongly-typed interfaces that can be swapped for API calls later.

---

## 🔧 Environment Variables

No environment variables are required for local development. If you add a backend for the contact form, create a `.env.local` file:

```env
# Example (not required for local dev)
# CONTACT_EMAIL_SERVICE_API_KEY=your-api-key
# NEXT_PUBLIC_SITE_URL=https://radhe.dev
```

---

## 📊 Performance Targets

- ⚡ Lighthouse Performance: 95+
- 🎯 Lighthouse Accessibility: 95+
- 🔍 Lighthouse SEO: 100
- ✅ Lighthouse Best Practices: 95+

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by **Radhe**
=======
# Demo-Portfolio-Website
Demo Portfolio Website
>>>>>>> f27518b36270b0f8284cd0db96126b298a516d5b
