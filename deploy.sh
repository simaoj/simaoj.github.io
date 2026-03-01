#!/bin/bash

# Deploy script for GitHub Pages using gh-pages npm package
# This script builds the Next.js site and deploys the out folder to gh-pages branch

set -e
rm -rf out .next _next
echo "🔨 Building the site..."
npm run build

echo "📦 Preparing deployment files..."

# Check if out directory exists (static export)
if [ ! -d "out" ]; then
  echo "❌ Error: 'out' directory not found. Build may have failed."
  exit 1
fi

# Create a .nojekyll file to tell GitHub Pages not to use Jekyll
touch out/.nojekyll

echo "📤 Deploying to gh-pages branch..."

# Deploy using gh-pages
npx gh-pages -d out -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "✅ Deployment complete!"
echo "🌐 Your site will be published at: https://simaoj.github.io"
