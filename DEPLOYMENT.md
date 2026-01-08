# Deployment Guide

This guide explains how to deploy the Music Platform website to GitHub Pages.

## 🌐 Live Site

Once deployed, your site will be available at:
**https://thilinadilshan22.github.io/Music-Platform/**

## 📋 Prerequisites

1. Ensure you have committed all your changes to the repository
2. The repository must be public (or you have GitHub Pro for private repo Pages)
3. Node.js and npm installed locally

## 🚀 Deployment Methods

### Method 1: Automated Deployment (Recommended)

The site automatically deploys when you push to the `main` branch.

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   
2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor the deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the workflow run
   - Once complete, visit your live site!

### Method 2: Manual Deployment

Deploy manually using the npm script:

1. **Install dependencies** (if not already done):
   ```bash
   cd Front-end
   npm install
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

This will build the project and push it to the `gh-pages` branch automatically.

## 🔧 Configuration Details

### Vite Configuration
- **Base Path**: `/Music-Platform/` - Set in `vite.config.ts` to ensure assets load correctly
- **Build Output**: `build/` directory

### GitHub Actions Workflow
- **Trigger**: Automatic on push to `main` branch
- **Build**: Runs `npm ci` and `npm run build`
- **Deploy**: Uses official GitHub Pages action

## 🧪 Testing Before Deployment

Always test the production build locally before deploying:

```bash
cd Front-end
npm run build
```

Check the `build/` directory to ensure all files are generated correctly.

## 🐛 Troubleshooting

### Assets Not Loading (404 errors)
- Verify the `base` path in `vite.config.ts` matches your repository name
- Ensure the repository name is correct: `Music-Platform`

### Routing Issues (Page refresh returns 404)
- This is expected with client-side routing on GitHub Pages
- Users should navigate using the site's UI, not by manually entering URLs
- Consider adding a 404.html that redirects to index.html if needed

### Deployment Fails in GitHub Actions
1. Check the Actions tab for error logs
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the workflow has proper permissions (Settings → Actions → General → Workflow permissions)

### Manual Deployment Issues
- Ensure you have `gh-pages` installed: `npm install`
- Check you have push access to the repository
- Verify you're on the correct branch

## 📝 Notes

- The first deployment may take a few minutes to appear
- Subsequent deployments are usually faster
- Clear browser cache if changes don't appear immediately
- All routes are configured to work with the `/Music-Platform/` base path
