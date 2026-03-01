# UniFy BDU - Render.com Deploy

## Static Site Deployment

### Configuration:
- **Build Command:** (leave empty or use `echo 'No build needed'`)
- **Publish Directory:** `.` (root directory)
- **Auto Deploy:** Yes

### Files:
- All HTML/CSS/JS files in root
- PWA manifest and service worker included
- Icons and images cached

### Environment:
- No environment variables required
- Pure frontend application
- No backend dependencies

### Performance:
- CDN enabled
- HTTP/2 support
- Gzip compression
- Cache headers optimized

## Deploy Steps:

1. Go to [Render.com](https://render.com)
2. Click "New Static Site"
3. Connect GitHub: `guyu6821-gif/buyyub`
4. Settings:
   - Name: `unify-bdu` (or your choice)
   - Branch: `main`
   - Build Command: (empty)
   - Publish Directory: `.`
5. Click "Create Static Site"

## After Deploy:

Your site will be available at:
`https://unify-bdu.onrender.com` (or your chosen name)

## PWA Testing:

1. Open deployed URL
2. Click "Quraşdır" button
3. Test offline mode
4. Verify splash screen

## Updates:

Push to `main` branch will auto-deploy to Render.com
