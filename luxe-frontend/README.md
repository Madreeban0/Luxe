# LUXE Frontend

The frontend application for LUXE fashion e-commerce landing page built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 16.x or higher
- npm 7.x or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

The development server will start at `http://localhost:5173`

## 📦 Technology Stack

### Core
- **React 19.2.0** - JavaScript library for building user interfaces
- **React DOM 19.2.0** - React package for working with the DOM

### Build Tools
- **Vite (Rolldown-Vite 7.2.2)** - Next-generation frontend tooling
- **@vitejs/plugin-react 5.1.0** - Official Vite plugin for React with Fast Refresh

### Styling
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS transformation tool
- **Autoprefixer 10.4.22** - PostCSS plugin to parse CSS and add vendor prefixes

### Icons
- **Lucide React 0.553.0** - Beautiful & consistent icon library

### Code Quality
- **ESLint 9.39.1** - JavaScript linting utility
- **eslint-plugin-react-hooks 5.2.0** - ESLint rules for React Hooks
- **eslint-plugin-react-refresh 0.4.24** - ESLint rules for React Refresh

## 🏗️ Project Structure

```
luxe-frontend/
├── public/              # Static public assets
│   └── vite.svg
├── src/
│   ├── assets/          # Application assets
│   │   └── react.svg
│   ├── App.jsx          # Main application component
│   ├── App.css          # Component-specific styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.cjs  # Tailwind CSS configuration
├── postcss.config.cjs   # PostCSS configuration
├── eslint.config.js     # ESLint configuration
└── .gitignore          # Git ignore rules
```

## 🎨 Tailwind CSS Configuration

Tailwind is configured to scan the following files for class names:
- `index.html`
- All `.js`, `.ts`, `.jsx`, and `.tsx` files in the `src` directory

## ⚡ Vite Features

This project uses **Rolldown-Vite**, an enhanced version of Vite that provides:
- ⚡️ Lightning-fast Hot Module Replacement (HMR)
- 🛠️ Rich feature set for development
- 📦 Optimized builds for production
- 🔧 Pre-configured with React Fast Refresh

### Vite Plugin

This project uses [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) which uses [Babel](https://babeljs.io/) for Fast Refresh.

Alternative: If you prefer SWC for faster builds, you can use [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc).

## 🧪 Development

### Development Server
```bash
npm run dev
```
Starts the development server with HMR at `http://localhost:5173`

### Building for Production
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build before deployment.

### Linting
```bash
npm run lint
```
Run ESLint to check for code quality issues and potential bugs.

## 📝 Code Quality

### ESLint Configuration

The project uses ESLint with the following configurations:
- **@eslint/js** - ESLint recommended rules
- **React Hooks plugin** - Enforces Rules of Hooks
- **React Refresh plugin** - Ensures proper React Refresh setup

### Recommended Setup

For production applications, consider:
- Adding TypeScript for type safety
- Implementing type-aware lint rules
- Using `typescript-eslint` for better TypeScript integration

See the [TypeScript + React template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for more information.

## 🔧 Configuration Files

### `vite.config.js`
Contains Vite build configuration and plugin setup.

### `tailwind.config.cjs`
Defines Tailwind CSS customization and content paths.

### `postcss.config.cjs`
PostCSS configuration for Tailwind CSS and Autoprefixer.

### `eslint.config.js`
ESLint rules and configuration for code quality.

## 📚 Component Architecture

The main application (`App.jsx`) includes:
- **Navigation Bar** - Fixed header with menu, search, wishlist, and cart
- **Hero Carousel** - Auto-rotating hero section with manual controls
- **Categories Section** - Grid of product categories with icons
- **Products Grid** - Dynamic product display with hover effects
- **Newsletter Section** - Email subscription form
- **Footer** - Brand information and copyright

## 🎯 State Management

The application uses React Hooks for state management:
- `useState` - Managing component state (carousel, cart, menu, hover states)
- `useEffect` - Side effects and carousel auto-rotation

## 🌈 Styling Approach

The project uses Tailwind CSS with custom utilities:
- **Gradient backgrounds** - `bg-gradient-to-*` classes
- **Backdrop blur** - `backdrop-blur-*` for glassmorphism
- **Hover effects** - `hover:*` utilities for interactive elements
- **Transitions** - `transition-*` classes for smooth animations
- **Custom animations** - `animate-pulse` and custom transforms

## 🚧 Development Tips

1. **Hot Module Replacement**: Changes to your code will instantly reflect in the browser
2. **Tailwind IntelliSense**: Use the Tailwind CSS IntelliSense VS Code extension for better DX
3. **React DevTools**: Install React Developer Tools browser extension for debugging
4. **Component Organization**: Keep components modular for better maintainability

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port.

### Build Errors
Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Styles Not Working
Ensure `index.css` is imported in `main.jsx` and contains Tailwind directives.

## 📄 License

This project is part of the LUXE fashion e-commerce application.

---

Built with ❤️ using React + Vite + Tailwind CSS
