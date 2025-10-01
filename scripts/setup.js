#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Ryxu XO Portfolio...\n');

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing dependencies...');
  console.log('Run: npm install\n');
} else {
  console.log('✅ Dependencies already installed\n');
}

console.log('🎨 Portfolio Features:');
console.log('  • Cyberpunk/Hacker aesthetic');
console.log('  • Smooth animations with Framer Motion');
console.log('  • Responsive design');
console.log('  • Interactive contact form');
console.log('  • GitHub integration ready');
console.log('  • Euralink hosting showcase\n');

console.log('🚀 To start development:');
console.log('  npm run dev\n');

console.log('📝 To customize:');
console.log('  • Update personal info in components/');
console.log('  • Modify colors in tailwind.config.js');
console.log('  • Add your GitHub username in Projects.jsx\n');

console.log('🌟 Ready to build something amazing!');
