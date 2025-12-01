# InnFit AI Virtual Fitting Room

## Overview

InnFit is a premium AI-powered virtual fitting room platform that enables users to try on clothing digitally using 3D avatars and augmented reality technology. The application allows customers to upload photos, generate accurate 3D body models, and visualize how different outfits will look and fit before making purchase decisions. The platform serves both individual consumers and retail businesses, offering features like AI style recommendations, real-time AR try-on, and high-accuracy fit predictions to reduce returns and improve shopping experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing instead of React Router
- TanStack Query (React Query) for server state management and data fetching

**UI Component Library**
- Shadcn UI component system built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Framer Motion for complex animations and transitions (swimming/floating effects, parallax scrolling, hover interactions)
- Custom design system with neon blue (#00D4FF) and purple (#B537F2) accent colors
- Glassmorphism effects and 3D depth layering throughout the interface

**Animation & Interaction Design**
- Continuous "swimming" animations on major elements creating fluid, train-like motion
- Scroll-triggered animations with staggered entrances using Framer Motion's `useInView` hook
- Cursor proximity interactions with image tilt and rotation effects
- Physics-based easing with soft acceleration/deceleration curves
- Parallax scrolling with multi-layer depth perception
- Responsive touch interactions for mobile devices

**Page Structure**
- Home: Hero section with carousel, 3-step product demo, features grid, and CTA section
- Services: Detailed service offerings with AR try-on, 3D avatar generation, and AI recommendations
- Pricing: Four-tier pricing model (Freemium, Pro, Business, Enterprise)
- API: Developer documentation with code examples and endpoint references
- About: Team information, mission/vision, careers, and contact form

### Backend Architecture

**Server Framework**
- Express.js as the web server framework
- Node.js runtime with ES modules (type: "module")
- Custom build pipeline using esbuild for server bundling
- Development mode uses Vite middleware for seamless HMR integration

**API Design**
- RESTful API structure with `/api` prefix for all endpoints
- OpenAI GPT-4 integration for AI chat assistant functionality
- System prompt defines InnFit platform knowledge and conversational tone
- Middleware for JSON parsing, URL encoding, and raw body access (for webhooks)
- Request/response logging middleware tracking duration and status codes

**Session & State Management**
- In-memory storage implementation (MemStorage class) for user data
- Interface-based storage abstraction (IStorage) for easy database migration
- User authentication prepared with schema for username/password

### Data Storage Solutions

**Database Schema (Drizzle ORM)**
- PostgreSQL as the target database (configured via DATABASE_URL environment variable)
- Drizzle ORM for type-safe database queries and migrations
- Drizzle Kit for schema management and migration generation
- Users table with UUID primary keys, username (unique), and password fields
- Zod integration for runtime schema validation via drizzle-zod
- Migration files stored in `/migrations` directory

**Current Implementation**
- Development uses in-memory storage (Map-based) for rapid prototyping
- Production-ready database configuration exists but not actively used
- Easy migration path from MemStorage to PostgreSQL via IStorage interface

### External Dependencies

**AI & ML Services**
- OpenAI API (GPT-4o model) for intelligent chat assistance and customer support
- API key required via `OPENAI_API_KEY` environment variable
- System prompt customized for InnFit platform knowledge and brand voice

**Database & Infrastructure**
- Neon serverless PostgreSQL (@neondatabase/serverless) configured but not actively used
- Connection pooling via Neon's serverless driver for production scalability
- Environment-based configuration for database URL

**UI Component Libraries**
- Radix UI primitives for accessible, unstyled component foundations (dialogs, dropdowns, tooltips, etc.)
- Shadcn UI as the component architecture pattern
- Lucide React for icon system
- Embla Carousel for image carousels
- React Hook Form with Zod resolvers for form validation

**Styling & Animation**
- Tailwind CSS v3+ with custom configuration for brand colors and design tokens
- PostCSS with Autoprefixer for vendor prefixes
- Framer Motion for declarative animations and gesture recognition
- Class Variance Authority (CVA) for component variant management

**Development Tools**
- TypeScript for static type checking across client, server, and shared code
- ESBuild for fast server-side bundling in production
- Vite for frontend development and production builds
- Replit-specific plugins for error overlay, cartographer, and dev banner in development mode

**Font System**
- Google Fonts: Inter (sans-serif primary) and Space Grotesk (monospace/headings)
- Preconnected to fonts.googleapis.com for performance optimization

**Asset Management**
- Static assets served from `/attached_assets` directory
- Generated images for hero sections, product demos, and AR mockups
- Stock photography for fashion models and team members
- Custom alias resolution: `@` for client source, `@shared` for shared code, `@assets` for attached assets