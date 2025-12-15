# 3D Developer Portfolio

Immersive single-page portfolio that blends React and interactive 3D scenes to showcase work, skills, and contact. Built as a learning project and ready to tailor to your own story.

## Table of Contents
- Overview
- Skills & Tools
- Features
- How I Build This Project
- Getting Started
- Scripts
- Assets & Credits
- Contact

## Overview of project
This project pairs React with Three.js (via React Three Fiber and Drei) to deliver a responsive, animation-rich portfolio. Sections cover an animated hero, experience, 3D skill highlights, projects, testimonials, and a contact form powered by EmailJS.

## Skills & Tools
- React 18 + Vite
- Three.js, React Three Fiber, Drei
- Framer Motion for UI animations
- Tailwind CSS for styling
- EmailJS for contact delivery
- React Router for navigation
- Lucide/React Icons for UI polish
- Maath utilities for 3D helpers

## Features
- Customizable 3D hero with an animated desktop model
- Experience and work sections with motion-driven interactions
- 3D skill highlights using geometries and lighting
- Animated projects and testimonials
- Contact section with 3D Earth model + EmailJS form handling
- Progressive starfield background
- Responsive layout across devices

## How I Build This Project
1) Plan the narrative: define sections (About, Work, Projects, Testimonials, Contact) and map navigation.
2) Layout and styling: scaffold components, set spacing/typography scales, and theme with Tailwind utility classes.
3) 3D integration: compose Canvas scenes with Drei helpers (models, lights, controls) and manage assets/textures.
4) Animation pass: wire Framer Motion variants for entrances, parallax, and hover states; tune timings for cohesion.
5) Forms & email: connect the contact form to EmailJS templates using environment keys, and add basic validation.
6) Performance & QA: compress assets, test on multiple viewports, and prepare for deploy (Vercel/Netlify/Static hosting).

## Getting Started
**Prerequisites**: Node.js 18+ and npm.

```bash
git clone <your-fork-url>
cd 3dfolio
npm install
```

Create a `.env` file in the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Run the dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```


## Contact
Adapt this portfolio with your own projects, socials, and branding. If you have feedback or want to collaborate, feel free to reach out after forking your copy.
