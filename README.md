# Soumyosish's Portfolio

Welcome to the source code for Soumyosish's personal portfolio website built with React and TailwindCSS along with different library packages.

## Overview

This project is a full-featured responsive portfolio showcasing various sections such as projects, skills, certifications and achievements. It is built with:
- React (with React 18 features)
- Vite as the build tool for fast development and optimized production builds
- Tailwind CSS for styling and layout
- Framer Motion and GSAP for animation effects
- Deployed on Vercel for seamless hosting and CDN delivery

## Features

- Responsive design optimized for desktop and mobile
- Multiple interactive sections showcasing skills, projects, certifications, achievements
- Smooth animations and transitions powered by Framer Motion
- Support for client-side routing with Vercel rewrites for SPA
- Easy navigation with fixed header and smooth scroll effects

## Getting Started

- View the portfolio website: 

### Prerequisites

- Node.js (version 20.19 or later recommended)
- npm or yarn package manager

### Installation

1. Clone the repository  
    ```
    git clone https://github.com/Soumyosish/Portfolio.git
    cd Portfolio
    ```

2. Install dependencies  
    ```
    npm install
    # or
    yarn install
    ```

3. Run development server  
    ```
    npm run dev
    # or
    yarn dev
    ```

4. Open `http://localhost:5173` in your browser to see the live dev version.


## Project Structure

 ```
.
├── node_modules/
├── public/
│   ├── algerian.ttf
│   ├── logo.jpg
│   ├── resume.pdf
│   └── video.mp4
├── src/
│   ├── assets/
│   └── components/
│       ├── Achievements.jsx
│       ├── Certifications.jsx
│       ├── Footer.jsx
│       ├── HeroSection.jsx
│       ├── HomePage.jsx
│       ├── Navbar.jsx
│       ├── Projects.jsx
│       └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└── vite.config.js

```

## Notes

- Make sure static files like `resume.pdf` and any videos or fonts are placed in the `public/` folder for correct access in production.
- The project uses relative imports for assets; verify paths if adding new assets.
- ESLint and other linting tools may require add-ons for full React and Tailwind CSS support.


Thank you for viewing! Feel free to contribute or reach out via GitHub.
