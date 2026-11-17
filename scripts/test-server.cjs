const http = require('http');
const fs = require('fs');
const path = require('path');

// Test that dist files exist and are valid
const distDir = path.join(__dirname, '..', 'dist');
const indexHtml = path.join(distDir, 'index.html');

console.log('Testing dist files existence...');
if (!fs.existsSync(indexHtml)) {
  console.error('ERROR: dist/index.html does not exist!');
  process.exit(1);
}

const content = fs.readFileSync(indexHtml, 'utf8');
console.log('dist/index.html size:', content.length, 'bytes');

const checks = [
  'Harshwardhan Pal',
  'Aspiring Data Analyst',
  'viewport',
  'vendor-recharts',
  'vendor-icons'
];

let allPassed = true;
checks.forEach(check => {
  const passed = content.includes(check);
  console.log(`- Checking for "${check}": ${passed ? 'PASSED' : 'FAILED'}`);
  if (!passed) allPassed = false;
});

// Check public assets
const assets = [
  'favicon.svg',
  'profile-placeholder.svg',
  'Harshwardhan_Pal_Resume.pdf',
  'projects/sales-analysis.svg',
  'projects/ecommerce-analysis.svg',
  'projects/hr-analytics.svg',
  'projects/netflix-analysis.svg',
  'projects/student-performance.svg'
];

console.log('\nTesting static assets existence in dist/ and public/...');
assets.forEach(asset => {
  const distPath = path.join(distDir, asset);
  const exists = fs.existsSync(distPath);
  console.log(`- Checking asset "${asset}": ${exists ? 'EXISTS' : 'MISSING'}`);
  if (!exists) allPassed = false;
});

if (allPassed) {
  console.log('\nALL VERIFICATION CHECKS PASSED SUCCESSFULLY!');
  process.exit(0);
} else {
  console.error('\nSOME VERIFICATION CHECKS FAILED!');
  process.exit(1);
}
