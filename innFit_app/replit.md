# Replit Agent Documentation

## Overview

This is a full-stack web application built with React and Express, utilizing a modern tech stack including TypeScript, Vite for frontend tooling, and Drizzle ORM for database interactions. The application appears to be an e-commerce or shopping platform based on the landing page content ("Your only store needed"). It uses shadcn/ui components for a polished, accessible user interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite (configured for fast development and optimized production builds)
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui (Radix UI primitives with Tailwind CSS)
- **Styling**: Tailwind CSS with custom design tokens

**Design Decisions:**
- The application uses a component-based architecture with shadcn/ui providing pre-built, accessible components
- Custom CSS variables define a comprehensive design system with colors for both light/dark themes
- Path aliases (`@/`, `@shared/`, `@assets/`) simplify imports and improve code organization
- The frontend is configured as a Single Page Application (SPA) with client-side routing

**Pros:**
- Fast development with Vite's HMR (Hot Module Replacement)
- Type safety throughout the application
- Highly accessible UI components built on Radix UI primitives
- Consistent styling through Tailwind's utility classes

**Cons:**
- Initial bundle size may be larger due to comprehensive UI component library
- Learning curve for developers unfamiliar with shadcn/ui patterns

### Backend Architecture

**Technology Stack:**
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (via Neon serverless)
- **Build Tool**: esbuild for production builds

**Design Decisions:**
- Express server configured with middleware for JSON parsing and URL-encoded data
- Custom logging middleware tracks API request duration and responses
- Storage abstraction layer (`IStorage` interface) allows for multiple storage implementations
- Currently implements in-memory storage (`MemStorage`) with interface ready for database migration
- Vite integration in development mode for seamless frontend/backend development experience

**Rationale:**
- The storage interface pattern allows the application to start with in-memory storage and migrate to PostgreSQL without changing business logic
- Express provides a minimal, flexible foundation for REST API development
- TypeScript ensures type safety across the entire stack

**Pros:**
- Clean separation between storage interface and implementation
- Easy to test with in-memory storage before database setup
- Shared types between frontend and backend via `shared/` directory

**Cons:**
- In-memory storage is not persistent (data lost on server restart)
- Requires migration work to move from `MemStorage` to actual database implementation

### Data Storage

**Current Implementation:**
- In-memory storage using JavaScript Map for users
- UUID-based user IDs generated with crypto module

**Database Schema (Prepared):**
- **Users Table**: Stores user credentials with UUID primary key, unique username, and password fields
- Drizzle schema defined with PostgreSQL dialect
- Validation schemas using Drizzle-Zod integration

**Migration Strategy:**
- Database migrations configured to output to `./migrations` directory
- Schema located in `shared/schema.ts` for use across frontend/backend
- Environment variable `DATABASE_URL` required for production database connection

**Rationale:**
- Starting with in-memory storage allows rapid prototyping
- Drizzle provides type-safe database queries and automatic schema validation
- Neon serverless PostgreSQL offers scalable, managed database infrastructure

### Authentication & Authorization

**Current State:**
- User schema includes username and password fields
- No authentication implementation present yet
- Session management dependencies installed (`connect-pg-simple`)

**Prepared Infrastructure:**
- Session store library ready for PostgreSQL-backed sessions
- User creation and lookup methods defined in storage interface

**Future Implementation Considerations:**
- Password hashing (recommend bcrypt or argon2)
- JWT or session-based authentication
- Protected API routes with middleware

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL provider (`@neondatabase/serverless`)
- **Drizzle ORM**: Type-safe ORM with PostgreSQL support
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI Component Libraries
- **Radix UI**: Comprehensive suite of accessible, unstyled UI primitives
  - Accordion, Dialog, Dropdown, Select, Toast, Tooltip, and 20+ other components
  - Provides keyboard navigation and ARIA compliance out of the box
- **shadcn/ui**: Pre-styled Radix components using Tailwind CSS (configured in "new-york" style)
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command palette component
- **Lucide React**: Icon library

### Form Management
- **React Hook Form**: Form state management with `@hookform/resolvers`
- **Zod**: Schema validation (integrated via `drizzle-zod`)

### Utilities
- **class-variance-authority**: Type-safe variant styling
- **clsx** & **tailwind-merge**: Conditional className composition
- **date-fns**: Date manipulation and formatting

### Development Tools
- **Replit Plugins**: Custom Vite plugins for Replit-specific features
  - Runtime error modal overlay
  - Cartographer (development mode)
  - Dev banner

### Build & Bundling
- **Vite**: Frontend build tool and dev server
- **esbuild**: Backend bundling for production
- **PostCSS**: CSS processing with Tailwind and Autoprefixer