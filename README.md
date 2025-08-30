# Yash Vora - Portfolio Website

A modern, responsive portfolio website built with React, showcasing professional experience, projects, skills, and education.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Comprehensive Sections**: 
  - Hero section with professional photo
  - About section with contact information
  - Professional experience with detailed achievements
  - Featured projects with technology stacks
  - Technical skills organized by category
  - Education background
  - Contact section with social links

## Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Project Structure

```
yash-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   └── profile-photo.png
│   ├── components/        # Reusable UI components
│   │   └── ui/           # shadcn/ui components
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.css         # Base styles
│   └── main.jsx          # Application entry point
├── dist/                  # Production build (generated)
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or pnpm

### Installation

1. Navigate to the project directory:
   ```bash
   cd yash-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

### Development

To start the development server:

```bash
npm run dev
# or
pnpm run dev
```

The website will be available at `http://localhost:5173`

### Production Build

To create a production build:

```bash
npm run build
# or
pnpm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
pnpm run preview
```

## Deployment Options

### Option 1: Static Hosting (Recommended)
Upload the contents of the `dist/` folder to any static hosting service:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Upload to a GitHub repository and enable Pages
- **AWS S3**: Upload to an S3 bucket with static website hosting

### Option 2: Traditional Web Hosting
Upload the contents of the `dist/` folder to your web hosting provider's public directory (usually `public_html` or `www`).

## Customization

### Updating Content
- Edit the data arrays in `src/App.jsx` to update experience, projects, skills, and education
- Replace `src/assets/profile-photo.png` with your own professional photo
- Update contact information in the contact section

### Styling
- Modify colors and themes in `src/App.css`
- Adjust component styling using Tailwind CSS classes in `src/App.jsx`

### Adding New Sections
- Add new sections by creating components in `src/App.jsx`
- Update the navigation menu to include new sections

## Browser Support

This website supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for performance:
- Lazy loading of images
- Optimized bundle size
- Responsive images
- Minimal JavaScript footprint

## Contact

For any questions or modifications, contact:
- **Email**: yashvora2711@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/yochamp
- **GitHub**: https://github.com/yochamp

---

© 2025 Yash Vora. All rights reserved.

