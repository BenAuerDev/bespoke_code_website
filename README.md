# Bespoke Code Website

A modern, responsive website for Bespoke Code - Custom Development Solutions.

## Features

- 🎨 Modern gradient design with glassmorphism effects
- 📱 Fully responsive (mobile and desktop)
- ✨ Smooth animations and interactive elements
- 📝 Contact form with validation
- 🚀 Floating code elements animation
- 👥 Client showcase section (hidden currently)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

This will automatically open your browser to `http://localhost:3000`

## Alternative: Run without setup

You can also simply open `index.html` directly in your browser, but using the development server is recommended for the best experience.

## File Structure

```text
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── package.json        # Project configuration
└── README.md          # This file
```

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript
- Live Server (for development)

## Deployment to GitHub Pages

This project is set up for automatic deployment to GitHub Pages:

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on every push to main

3. **Custom Domain Setup:**
   - In repository settings > Pages
   - Add your custom domain (e.g., `yoursite.com`)
   - Create a `CNAME` file in your repository root with your domain
   - Set up DNS records with your domain provider:
     - For apex domain: Add A records pointing to GitHub's IPs
     - For subdomain: Add CNAME record pointing to `yourusername.github.io`

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
