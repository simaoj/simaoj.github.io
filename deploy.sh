#!/bin/bash

# Deploy script for GitHub Pages
# This script builds the Next.js site and deploys it to the gh-pages branch

set -e

echo "🔨 Building the site..."
npm run build

echo "📦 Preparing deployment files..."

# Create a temporary directory for the build output
TEMP_DIR="./.gh-pages-temp"
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

# Copy the static files to the temporary directory
cp -r .next/static "$TEMP_DIR/"
cp -r public/* "$TEMP_DIR/"

# Create .nojekyll file to disable Jekyll processing
touch "$TEMP_DIR/.nojekyll"

# Store the current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "📤 Deploying to gh-pages branch..."

# Check if gh-pages branch exists
if git rev-parse --verify gh-pages >/dev/null 2>&1; then
  git checkout gh-pages
else
  git checkout --orphan gh-pages
fi

# Remove all files and copy new build
rm -rf *
rm -rf .nojekyll
cp -r "$TEMP_DIR"/* .
cp "$TEMP_DIR/.nojekyll" .

# Stage and commit
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

# Push to gh-pages
git push origin gh-pages

# Return to the original branch
git checkout "$CURRENT_BRANCH"

# Clean up
rm -rf "$TEMP_DIR"

echo "✅ Deployment complete!"
echo "🌐 Your site will be published at: https://simaoj.github.io"
