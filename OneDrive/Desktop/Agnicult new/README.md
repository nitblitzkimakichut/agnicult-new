# AgniCult Landing Page

An elite, invite-only fitness and transformation cult landing page built with Next.js, TailwindCSS, and Framer Motion.

## Features

- Fully responsive design for mobile, tablet, and desktop
- Custom animations and transitions
- Modern, high-contrast, brutalist design
- Optimized for performance and SEO

## Technology Stack

- Next.js 13.5.6 with App Router
- TypeScript
- TailwindCSS for styling
- Framer Motion for animations

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (v7 or later)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/agnicult.git
cd agnicult
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app`: Contains the main application pages and layout
- `src/components`: Reusable components for the application
- `src/styles`: Global styles and TailwindCSS configuration
- `public`: Static assets like images and fonts

## Deployment Options

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com/) and sign up/log in
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"

### Netlify

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://www.netlify.com/) and sign up/log in
3. Click "New site from Git" and connect your repository
4. Set the build command to `npm run build` and publish directory to `.next`
5. Click "Deploy site"

### GitHub Pages

1. Install the `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to your package.json:
```json
"scripts": {
  "build": "next build",
  "export": "next export",
  "deploy": "next build && next export && gh-pages -d out"
}
```

3. Run `npm run deploy`

## License

This project is licensed under the MIT License.

## Credits

- Design inspiration: Elite fitness and transformation programs
- Icons: Heroicons 