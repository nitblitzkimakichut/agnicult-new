# AgniCult Project Setup

This file contains instructions for setting up the AgniCult project and resolving common issues you might encounter during development.

## Project Structure

The project is a Next.js application with TypeScript, TailwindCSS, and Framer Motion. The directory structure is as follows:

```
/
├── public/               # Static assets (images, fonts)
│   ├── images/           # Image files
│   └── fonts/            # Font files
├── src/                  # Source code
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   └── styles/           # CSS and style-related files
├── README.md             # Project documentation
└── SETUP.md              # This file
```

## Initial Setup

1. **Install Node.js and npm**

   Before running the project, make sure you have Node.js (v16 or later) and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Resolving TypeScript Errors

You may notice TypeScript errors related to React imports and JSX elements. These are due to the way the project is set up without having all the type declarations available. Here's how to fix them:

### Method 1: Install dependencies

```bash
npm install
```

This should install all the required TypeScript type declarations and resolve most errors.

### Method 2: Manually fix specific errors

1. **React module not found**

   The error `Cannot find module 'react'` can be fixed by ensuring you have installed React and its type declarations:

   ```bash
   npm install react react-dom @types/react @types/react-dom
   ```

2. **JSX element type errors**

   The errors like `JSX element implicitly has type 'any'` are TypeScript errors that occur when JSX is used without proper type declarations. Adding a `global.d.ts` file in the `src` directory can help:

   ```typescript
   // src/global.d.ts
   import React from 'react';

   declare global {
     namespace JSX {
       interface IntrinsicElements {
         [elemName: string]: any;
       }
     }
   }
   ```

### Method 3: Disable TypeScript checks temporarily

If you just want to see the site in action without fixing TypeScript errors, you can modify the next.config.js file:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
```

## Required Images

The project references several images that need to be placed in the `/public/images/` directory:

1. dark-fire-bg.jpg
2. warrior-meditation.jpg
3. sacred-geometry.svg
4. noise-pattern.png
5. ember-pattern.jpg
6. discord-community.jpg
7. testimonial-1.jpg
8. testimonial-2.jpg
9. testimonial-3.jpg

You'll also need the `Ksatria.woff2` font file in `/public/fonts/`.

If you don't have these files, you can:
1. Use placeholder images from services like [placeholder.com](https://placeholder.com) or [unsplash.com](https://unsplash.com)
2. Replace the image references in the code with your own images
3. Comment out or modify the sections that use these images

## Deployment

For deployment instructions, please see the [README.md](./README.md) file. 