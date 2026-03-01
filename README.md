This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

To deploy this site to GitHub Pages, use the provided deploy script:

```bash
npm run deploy
```

This script will:
1. Build the Next.js site using `npm run build`
2. Collect static assets from `.next/static` and `public` directories
3. Create or update the `gh-pages` branch
4. Push the built files to the `gh-pages` branch
5. Return to your current branch

The site will be published at: `https://simaoj.github.io`

**Note:** The first page loads redirect to `/pt` (Portuguese) by default.

### Prerequisites

Before deploying, make sure:
- You have git configured with your credentials
- Your GitHub repository has GitHub Pages enabled for the `gh-pages` branch
- The repository is pushed to `origin`

### How It Works

The deployment process:
- Copies `.next/static` (CSS, JavaScript bundles) to gh-pages branch
- Copies `public` assets (images, fonts, etc.)  
- Creates a `.nojekyll` file to tell GitHub not to process with Jekyll
- Creates an `index.html` redirect to `/pt/` (default Portuguese locale)

### Manual Alternative

If you prefer to manage the deployment manually:

```bash
npm run build                   # Build the site
# Contents of .next/static and public are deployed to gh-pages
git checkout gh-pages
cp -r .next/static/* .
cp -r public/* .
git add -A
git commit -m "Deploy: $(date)"
git push origin gh-pages
git checkout main              # or your main branch
```
