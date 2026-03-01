const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

// Move pt.html to pt/index.html
if (fs.existsSync(path.join(outDir, 'pt.html'))) {
  const ptDir = path.join(outDir, 'pt');
  if (!fs.existsSync(ptDir)) {
    fs.mkdirSync(ptDir, { recursive: true });
  }
  fs.renameSync(
    path.join(outDir, 'pt.html'),
    path.join(ptDir, 'index.html')
  );
  console.log('✓ Moved pt.html to pt/index.html');
}

// Move en.html to en/index.html
if (fs.existsSync(path.join(outDir, 'en.html'))) {
  const enDir = path.join(outDir, 'en');
  if (!fs.existsSync(enDir)) {
    fs.mkdirSync(enDir, { recursive: true });
  }
  fs.renameSync(
    path.join(outDir, 'en.html'),
    path.join(enDir, 'index.html')
  );
  console.log('✓ Moved en.html to en/index.html');
}

// Create root index.html that redirects to /pt
const rootIndexContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=/pt/">
  <link rel="canonical" href="/pt/">
  <title>Redirecting...</title>
  <script>
    window.location.href = '/pt/';
  </script>
</head>
<body>
  <p>Redirecting to <a href="/pt/">Portuguese version</a>...</p>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), rootIndexContent);
console.log('✓ Created root index.html with redirect to /pt/');

console.log('\n✅ Post-build restructuring complete!');
