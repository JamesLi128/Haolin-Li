# GitHub Pages Deployment Workflow

This document outlines the complete workflow for developing and deploying the Haolin Li personal website to GitHub Pages.

## 📁 Branch Structure

- **`master`**: Production branch - always deployable, mirrors what's live on GitHub Pages
- **`development`**: Development branch - where you make changes and test new features
- **`gh-pages`**: Auto-generated deployment branch - contains built static files (managed by gh-pages package)

## 🔄 Development Workflow

### Step 1: Switch to Development Branch

```bash
git checkout development
```

### Step 2: Make Your Changes

- Edit files in `src/`, `public/`, or configuration files
- Test locally using:

```bash
npm run dev
```

### Step 3: Test Your Build

Before committing, ensure the build works:

```bash
npm run build
```

### Step 4: Commit Your Changes

```bash
git add .
git commit -m "Describe your changes here"
```

### Step 5: Push to Development Branch

```bash
git push origin development
```

## 🚀 Deployment Workflow

### Step 1: Switch to Master Branch

```bash
git checkout master
```

### Step 2: Merge Development Changes

```bash
git merge development
```

### Step 3: Build the Project

```bash
npm run build
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

### Step 5: Push Updated Master Branch

```bash
git push origin master
```

## 🛠️ Quick Commands Reference

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Git Commands

```bash
# Check current branch
git branch

# Check status
git status

# View recent commits
git log --oneline -10

# Check differences
git diff

# Check remote repositories
git remote -v
```

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] Code builds successfully (`npm run build`)
- [ ] No console errors in development mode
- [ ] All new features tested locally
- [ ] Commit messages are descriptive
- [ ] No sensitive information in code

## 🔧 Project Configuration

### Key Configuration Files

- **`vite.config.js`**: Build configuration with base path `/Haolin-Li/`
- **`package.json`**: Scripts and dependencies, homepage set to GitHub Pages URL
- **`src/App.jsx`**: Uses HashRouter for GitHub Pages compatibility

### Important Settings

- **Base Path**: `/Haolin-Li/` (matches repository name)
- **Router**: HashRouter (for GitHub Pages compatibility)
- **Homepage**: `https://jamesli128.github.io/Haolin-Li/`

## 🌐 Live Site Information

- **URL**: https://jamesli128.github.io/Haolin-Li/
- **Repository**: https://github.com/JamesLi128/Haolin-Li
- **Deployment Method**: GitHub Pages with gh-pages package

## ⚠️ Troubleshooting

### Site Not Updating

1. Check if deployment was successful: `npm run deploy`
2. Verify gh-pages branch was updated: `git log origin/gh-pages --oneline -5`
3. Wait 5-10 minutes for GitHub Pages to update
4. Clear browser cache

### Build Errors

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install`
3. Try building again: `npm run build`

### Routing Issues

- Ensure using HashRouter (already configured)
- Check that all routes start with `#/` in browser

## 📝 Notes

- **Always work on the `development` branch** for new features
- **Only merge to `master`** when ready to deploy
- **The `gh-pages` branch** is automatically managed - don't edit manually
- **GitHub Pages updates** may take a few minutes after deployment
- **Use absolute paths** for assets in `public/` folder

## 🎯 Quick Deployment (Emergency)

If you need to quickly deploy current changes:

```bash
# From any branch with uncommitted changes
git add .
git commit -m "Quick fix"
git checkout master
git merge development
npm run build && npm run deploy
git push origin master
git checkout development
```

---

_Last updated: August 26, 2025_
_This workflow ensures safe development and reliable deployments to GitHub Pages._
