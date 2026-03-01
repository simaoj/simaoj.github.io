#!/bin/bash

# Deploy script for GitHub Pages
# This script builds the Next.js site and deploys to gh-pages branch

set -e

echo "🔨 Building the site..."
npm run build

echo "📦 Preparing deployment files..."

# Create a temporary directory for deployment
DEPLOY_DIR="./gh-deploy"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# Copy the .next/static directory (built assets)
cp -r .next/static "$DEPLOY_DIR/"

# Copy public directory
cp -r public/* "$DEPLOY_DIR/"

# Create a .nojekyll file to tell GitHub Pages not to use Jekyll
touch "$DEPLOY_DIR/.nojekyll"

# Create a simple index.html that redirects to /pt (Portuguese - default locale)
cat > "$DEPLOY_DIR/index.html" << 'EOF'
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Redirecting...</title>
    <meta http-equiv="refresh" content="0; url=/pt/" />
    <link rel="canonical" href="/pt/" />
  </head>
  <body>
    <h1>Site está sendo redirecionado...</h1>
    <p><a href="/pt/">Clique aqui se não for redirecionado automaticamente</a></p>
  </body>
</html>
EOF

# Store the current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "📤 Deploying to gh-pages branch..."

# Check if gh-pages branch exists
if git rev-parse --verify gh-pages >/dev/null 2>&1; then
  git checkout gh-pages
else
  git checkout --orphan gh-pages
fi

# Remove all files except .git
git ls-files -z | xargs -0 rm -f
rm -rf * .nojekyll

# Copy deployment files
cp -r "$DEPLOY_DIR"/* .
cp "$DEPLOY_DIR/.nojekyll" .

# Stage and commit
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

# Push to gh-pages
git push origin gh-pages

# Return to the original branch
git checkout "$CURRENT_BRANCH"

# Clean up
rm -rf "$DEPLOY_DIR"

echo "✅ Deployment complete!"
echo "🌐 Your site will be published at: https://simaoj.github.io"
