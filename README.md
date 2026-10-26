# Apex Calisthenics - Bodyweight Training Platform (React)

A modern, responsive React web application for bodyweight fitness enthusiasts to access calisthenics guides, free workout routines, and premium meal plans.

Rewritten from the original static/Dynamic project as a full React SPA using Vite, TypeScript, and React Router.

## Features

- **Muscle Building Guides**: Learn leverage progression, joint-angle drills, and proper calisthenics techniques.
- **Free Workouts**: Full-body calisthenics routines with exercise breakdowns, tempo guidelines, and rep schemes.
- **Workout Detail**: In-depth Push–Pull Reset routine with interactive exercise list and coach cues.
- **Premium Meal Plans**: Recomposition Blueprint, Lean Mass Protocol, and Competition Cut meal plans with macro breakdowns and sample day menus.
- **Plan Reservation & Checkout**: Interactive plan selection with order summary calculation, form validation, and spot reservation confirmation.
- **Responsive Navigation**: Mobile navigation drawer, active state indicators, and smooth anchor scrolling.
- **Scroll Reveal Animations**: Smooth scroll-triggered fade-ins across sections.
- **Newsletter Signup**: Live interactive newsletter form with feedback state.
- **Custom 404 Route**: Branded fallback page for missing routes.

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **React Router 7**

## Project Structure

```
apex-calisthenics/
├── public/
│   └── assets/icons/favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation bar with mobile drawer
│   │   └── Footer.tsx      # Site footer with newsletter form
│   ├── data/
│   │   └── content.ts      # Plans, exercises, meals, testimonials
│   ├── hooks/
│   │   └── useScrollReveal.ts # IntersectionObserver scroll reveal
│   ├── pages/
│   │   ├── HomePage.tsx          # Landing page with hero, guides, workouts, plans
│   │   ├── WorkoutDetailPage.tsx # Push-Pull Reset routine
│   │   ├── MealPlanPage.tsx      # Recomposition Blueprint detail
│   │   ├── CheckoutPage.tsx      # Plan reservation flow
│   │   └── NotFoundPage.tsx      # 404 error page
│   ├── App.tsx             # Route definitions & scroll restoration
│   ├── main.tsx            # App entry point
│   └── styles.css          # Design system & responsive styles
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build config
```

## Getting Started

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

## License
MIT
