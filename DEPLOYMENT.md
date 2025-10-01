# 🚀 Deployment Guide - ryxu-xo Portfolio

## GitHub Pages Deployment

### Method 1: GitHub Actions (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: "GitHub Actions"
   - Save settings

3. **Automatic Deployment:**
   - Every push to `main` branch will trigger deployment
   - Your site will be available at: `https://ryxu-xo.github.io/ryxu-xo-one`

### Method 2: Manual Deployment

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

### Method 3: Vercel (Alternative)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts and your site will be live!**

## 🔧 Configuration

### GitHub Pages Settings
- **Repository**: `ryxu-xo/ryxu-xo-one`
- **Branch**: `gh-pages` (auto-generated)
- **Custom Domain**: Optional (e.g., `ryxu-xo.tech`)

### Environment Variables
No environment variables needed for this static site.

## 📁 File Structure
```
ryxu-xo-one/
├── .github/workflows/deploy.yml  # GitHub Actions
├── dist/                         # Built files (auto-generated)
├── src/                         # Source code
└── package.json                 # Dependencies
```

## 🌐 Live URLs
- **GitHub Pages**: `https://ryxu-xo.github.io/ryxu-xo-one`
- **Custom Domain**: `https://ryxu-xo.tech` (if configured)

## 🔄 Updates
Every time you push changes to the `main` branch, the site will automatically rebuild and deploy!

## 🛠️ Troubleshooting

### Common Issues:
1. **Build fails**: Check GitHub Actions logs
2. **Site not updating**: Clear browser cache
3. **404 errors**: Check file paths in build output

### Support:
- GitHub Actions logs: Repository → Actions tab
- GitHub Pages logs: Repository → Settings → Pages
