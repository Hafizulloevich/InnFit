# InnFit AI Virtual Fitting Room - Design Guidelines

## Design Aesthetic & Visual Language

**Premium Futuristic Fashion-Tech Design**
- Soft neutral base (off-white, light gray) with strategic white space
- Neon accent colors: Electric blue (#00D4FF) and vibrant purple (#B537F2) for CTAs, highlights, and interactive elements
- Glassmorphism effects: frosted glass panels with subtle blur, translucent overlays with backdrop filters
- 3D depth layering: floating elements with soft shadows (0 4px 20px rgba(0,0,0,0.08))
- Modern typography: Bold sans-serif headlines (Inter/SF Pro Display), clean body text with generous line-height (1.6)

## Motion & Animation System

**Continuous Swimming Animations**
- All major elements move on slow, fluid motion paths creating organic "train-like" drift
- Parallax scrolling with multi-layer depth (background moves 30% slower than foreground)
- Physics-based easing: ease-in-out curves with soft acceleration/deceleration
- Scroll-triggered staggered entrances: fade-in + slide-up with 100ms delays between elements
- Cursor proximity interactions: images tilt 3-5° toward cursor on hover

**Interactive Micro-animations**
- Buttons: Scale to 1.05, add soft glow, subtle color shift on hover
- Images: Tilt on hover, rotate slightly (2-3°), enlarge with smooth zoom on click
- Cards: Lift upward 8px with expanded shadow on hover
- Icons: Bounce, pulse, or gentle rotate animations on hover

## Page Structure & Layout

### Home Page (Landing)
**Hero Section** (100vh)
- Full-width cinematic background with animated 3D avatar or AR try-on scene
- Bold headline: "Try On Any Outfit. Anytime. In Seconds." (72px, weight 700)
- Subheadline: "AI-powered 3D virtual fitting room that shows exactly how clothes look on you." (24px, weight 400)
- Dual CTAs: "Try the Demo" (primary neon gradient button), "Upload Photo" (secondary glass button)
- Floating phone mockup (right side, 40% width) with looping AR try-on animation, continuous gentle rotation
- Automatic swimming image carousel background with 5-7 fashion/AR lifestyle images fading/sliding every 4 seconds

**Interactive Product Demo** (3-Step Process)
- Horizontal layout with animated progression arrows
- Step cards with icons, minimalist illustrations, scroll-triggered animations
- Step 1: Upload Photo → Step 2: Generate 3D Avatar → Step 3: Try Outfits in Real Time

**Features Grid**
- 6 cards in 3-column desktop layout (2-column tablet, 1-column mobile)
- Each card: Large icon (64px), bold title, 2-line description
- Features: 3D Body Avatar Builder, Photo Try-On Technology, Live AR Camera Try-On, AI Style Recommendations, High Accuracy Fit Prediction, Clothing Rendering Engine
- Hover: Lift effect, glow border, scale icon 1.1x

### About Us Page
**Vision & Mission Section**
- Full-width split layout: Text left (60%), abstract visual right (40%)
- Company story with fade-in paragraphs on scroll
- Mission statement in large quote styling (36px italic)

**Our Team Section**
- 4 founder profiles in 2x2 grid (desktop), stacked on mobile
- Square founder images (300x300px) with tilt-on-hover and subtle border glow
- Images: ashik.jpg, hasib.jpg, samandar.jpg, photo_3_4.jpg from GitHub
- Name, role, 2-line bio for each founder

**Careers Section** (Within About Page)
- 5-7 job listings in expandable cards
- Roles: AI Engineer, 3D Graphics Developer, Full Stack Engineer, Product Designer, UX Researcher, Marketing Manager, DevOps Engineer
- Each listing: Job title, location (Remote/Hybrid), salary range, brief description, "Apply Now" CTA
- Application modal/form: Name, Email, Resume upload, Cover letter textarea

**Contact Section** (Within About Page)
- Two-column layout: Form (60%) + Info sidebar (40%)
- Form fields: Name, Email, Subject dropdown, Message textarea, Submit button
- Sidebar: Office location, Email, Phone, Social media icons with hover animations
- Form validation with error states and success message

### Services Page
- Hero: Bold headline "What We Offer" with animated background
- Feature showcases with large visuals demonstrating:
  - AR Virtual Try-On with phone mockup animation
  - 3D Avatar Generation with body scan visualization
  - AI Outfit Recommendations with smart matching interface
  - Photo Try-On Technology with before/after slider
- Each section alternates left/right image-text layout with parallax depth
- Interactive hotspots on images triggering tooltips/popups

### API Page
- Clean documentation layout with fixed sidebar navigation
- Code examples in dark syntax-highlighted blocks
- Interactive endpoint explorer with "Try It" buttons
- API key section with copy-to-clipboard functionality
- Response examples with expandable JSON viewers
- SDKs section with language tabs (JavaScript, Python, iOS, Android)

### Pricing Page
**4-Tier Comparison Cards**
- Horizontal card layout, equal width, centered
- **Freemium**: Free tier with basic features, "Get Started Free" CTA
- **Pro**: Commission-based 1-2% per item, "Popular" badge, highlighted with neon border glow
- **Business**: $535/month, comprehensive features, "Start Trial" CTA
- **Enterprise**: Custom pricing, "Contact Sales" CTA, subtle gradient background
- Feature comparison list with checkmarks, animated expand/collapse for full feature set
- Interactive toggle: Monthly/Yearly billing with discount badge

## AI Chatbot Widget

**Bottom-right floating widget**
- Glass-morphic circular button (64px) with message icon
- Unread badge (red dot with pulse animation)
- Expanded state: 400x600px chat panel with rounded corners
- Header: InnFit logo, minimize/close buttons
- Message bubbles: User (right, neon gradient), Assistant (left, glass effect)
- Typing indicator: Three animated dots
- Input: Text field with send button, smooth focus state
- Entry animation: Slide-up + fade-in, exit: Slide-down + fade-out

## Component Specifications

**Buttons**
- Primary: Neon gradient background, white text, 12px rounded corners, blur background when over images
- Secondary: Glass effect with border, hover fill
- Sizes: Large (56px height), Medium (48px), Small (40px)

**Cards**
- Rounded corners (16px), subtle shadow, white/glass background
- Padding: 32px desktop, 24px mobile
- Hover: Lift 8px, expand shadow

**Typography Scale**
- H1: 72px / 56px mobile, weight 700
- H2: 48px / 36px mobile, weight 600
- H3: 36px / 28px mobile, weight 600
- Body: 18px / 16px mobile, weight 400
- Caption: 14px, weight 400

**Spacing System**
- Section padding: py-32 desktop, py-16 mobile
- Container max-width: 1280px
- Grid gaps: 32px desktop, 16px mobile

## Images & Visual Assets

**Hero Background Images**
- High-resolution fashion photography (1920x1080+)
- AR try-on demonstrations in lifestyle settings
- 3D avatar renders with clothing
- Modern retail/tech environments

**Product Mockups**
- Phone screens showing AR interface
- 3D body scans and avatars
- Before/after clothing try-on comparisons
- AI recommendation interfaces

**Team Photos**
- Professional headshots with consistent styling
- Natural lighting, soft backgrounds
- Square crop (1:1 aspect ratio)

**Icon Library**
- Use Heroicons for UI elements
- Custom 3D icons for features (avatar, AR camera, AI brain, clothing hanger)

## Responsive Behavior

- Desktop (1280px+): Full multi-column layouts, enhanced animations
- Tablet (768-1279px): 2-column grids, simplified motion
- Mobile (<768px): Single column, touch-optimized interactions, reduced animation complexity
- All animations scale gracefully, motion paths adjust to viewport
- Touch interactions: Press states, drag gestures, tap feedback