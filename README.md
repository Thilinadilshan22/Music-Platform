# 🎵 EDM Music Platform

A modern, feature-rich music streaming platform built with React, TypeScript, and Vite. This platform provides a stunning user experience for browsing EDM tracks, artists, videos, and events with a sleek futuristic design.

[![Live Demo](https://img.shields.io/badge/Demo-Live-success)](https://thilinadilshan22.github.io/Music-Platform/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4.1-purple)](https://vitejs.dev/)

## ✨ Features

### 🎼 Music Features
- **Track Library**: Browse an extensive collection of EDM tracks with album art
- **Music Player**: Full-featured music player with play/pause, seek, volume control, and queue management
- **Search & Filter**: Search tracks by name, artist, or genre with real-time filtering
- **Trending Tracks**: Discover popular tracks with playable trending section on the homepage

### 🎨 Artist Features
- **Artist Profiles**: Comprehensive artist pages with stats and track listings
- **Artist Navigation**: Click through artist profiles to view their specific tracks
- **Genre-based Browsing**: Filter artists by EDM sub-genres

### 📹 Video Features
- **Video Library**: YouTube video integration with categorized sections
- **Video Player**: Built-in player with picture-in-picture support
- **Download Option**: Download functionality for offline viewing

### 📅 Events Features
- **Event Listings**: Browse upcoming EDM events, festivals, and concerts
- **Event Details**: Detailed event information including date, location, and lineup

### 🎨 UI/UX Features
- **Dark Mode**: Beautiful dark theme with glassmorphism effects
- **Responsive Design**: Fully responsive layout for all screen sizes
- **Modern Animations**: Smooth transitions, particle backgrounds, and hover effects
- **Search Bar**: Global search functionality in the navigation bar
- **Scroll Restoration**: Smart scroll position management across page navigation

### 🔐 Authentication & Legal
- **User Authentication**: Login and signup pages
- **Legal Pages**: Privacy Policy, Terms of Service, and Cookie Policy

## 🛠️ Tech Stack

### Core
- **React** 18.3.1 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 6.4.1 - Build tool and dev server

### UI Framework & Components
- **Tailwind CSS** 3.4.18 - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
  - Accordion, Dialog, Dropdown Menu, Navigation Menu, Tabs, Tooltips, and more
- **Lucide React** - Modern icon library
- **Framer Motion** - Advanced animations

### Routing & State Management
- **React Router DOM** 7.9.6 - Client-side routing
- **Context API** - Global state management (Music & Theme contexts)

### Additional Libraries
- **next-themes** - Dark mode support
- **embla-carousel-react** - Carousel components
- **react-hook-form** - Form validation
- **recharts** - Data visualization
- **sonner** - Toast notifications

### Development Tools
- **Vite SWC Plugin** - Fast refresh
- **PostCSS** & **Autoprefixer** - CSS processing
- **gh-pages** - GitHub Pages deployment

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Thilinadilshan22/Music-Platform.git
   cd Music-Platform
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd Front-end
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

## 📦 Available Scripts

In the `Front-end` directory, you can run:

- **`npm run dev`** - Starts the development server
- **`npm run build`** - Creates a production build in the `build/` directory
- **`npm run predeploy`** - Runs build before deployment
- **`npm run deploy`** - Deploys to GitHub Pages

## 📁 Project Structure

```
EDM Site/
├── Front-end/
│   ├── src/
│   │   ├── assets/          # Images, album art, and static assets
│   │   ├── components/      # Reusable UI components
│   │   │   ├── artists/     # Artist-specific components
│   │   │   ├── events/      # Event components
│   │   │   ├── music/       # Music-related components
│   │   │   ├── player/      # Music player components
│   │   │   ├── shared/      # Shared components (Nav, Footer, etc.)
│   │   │   └── ui/          # Radix UI component wrappers
│   │   ├── contexts/        # React Context providers
│   │   │   ├── MusicContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── data/            # Mock data and constants
│   │   ├── features/        # Feature-based modules
│   │   │   ├── artists/     # Artists page
│   │   │   ├── auth/        # Login/Signup pages
│   │   │   ├── events/      # Events page
│   │   │   ├── home/        # Home page
│   │   │   ├── legal/       # Legal pages
│   │   │   ├── music/       # Music page
│   │   │   └── videos/      # Videos page
│   │   ├── styles/          # Global styles and Tailwind config
│   │   ├── App.tsx          # Main app component with routing
│   │   └── main.tsx         # App entry point
│   ├── public/              # Public assets
│   ├── build/               # Production build output
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies and scripts
│   ├── tailwind.config.js   # Tailwind configuration
│   ├── vite.config.ts       # Vite configuration
│   └── tsconfig.json        # TypeScript configuration
├── Back-end/                # Backend directory (placeholder)
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── DEPLOYMENT.md            # Detailed deployment guide
└── README.md                # This file
```

## 🌐 Deployment

This project is configured for deployment to GitHub Pages with automated CI/CD.

### Live Site
**https://thilinadilshan22.github.io/Music-Platform/**

### Automated Deployment
Every push to the `main` branch automatically triggers a GitHub Actions workflow that:
1. Builds the project
2. Deploys to GitHub Pages
3. Makes the site live

### Manual Deployment
```bash
cd Front-end
npm run deploy
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🎨 Design Philosophy

- **Modern Aesthetics**: Vibrant gradients, glassmorphism, and sleek dark mode
- **Premium Feel**: State-of-the-art design that wows users at first glance
- **Smooth Animations**: Micro-animations and transitions for enhanced UX
- **Responsive**: Mobile-first approach ensuring great experience on all devices
- **Accessibility**: Built with Radix UI primitives for keyboard navigation and screen readers

## 🔧 Configuration

### Base Path
The app is configured to run at `/Music-Platform/` base path for GitHub Pages deployment. This is set in `vite.config.ts`:

```typescript
base: '/Music-Platform/',
```

For local development or different deployment targets, adjust this value accordingly.

### Theme Customization
The theme configuration can be found in `tailwind.config.js` with custom colors, animations, and gradients.

## 🐛 Troubleshooting

### Assets Not Loading
- Ensure the `base` path in `vite.config.ts` matches your repository name
- Clear browser cache and hard reload

### Routing Issues
- This is a client-side routed app; page refreshes may show 404
- Navigate using the app's UI or implement a 404 redirect

### Build Errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure you're using Node.js v20+

## 📝 Future Enhancements

- [ ] Backend integration for user authentication
- [ ] Database for tracks, artists, and events
- [ ] User playlists and favorites
- [ ] Social features (comments, likes, shares)
- [ ] Audio visualization
- [ ] Lyrics display
- [ ] Mobile apps (iOS/Android)

## 📄 License

ISC License

## 👤 Author

**Thilina Dilshan**
- GitHub: [@Thilinadilshan22](https://github.com/Thilinadilshan22)

## 🙏 Acknowledgments

- UI components built with [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Design inspiration from modern music streaming platforms
- Original design concept from [Figma](https://www.figma.com/design/KC2efRwJNJcryCIG72JtwP)

---

⭐ If you like this project, please give it a star on GitHub!
