# AICONA

A modern, high-performance web application for generating and customizing application icons using Lucide Icons.

## Overview

AICONA is a pure frontend application that allows users to search, select, and customize icons from the Lucide icon library. Users can adjust icon size, colors, opacity, and export customized icons as PNG files suitable for mobile app development.

## Features

### Core Functionality
- **Icon Search**: Search through 1640+ Lucide icons with real-time filtering
- **Icon Customization**:
  - Adjustable icon size (32px - 512px)
  - Custom icon color with color picker
  - Icon opacity control (0% - 100%)
  - Custom background color
  - Background opacity control (0% - 100%)
- **Export**: Download customized icons as PNG files

### User Interface
- **Theme System**:
  - Light mode
  - Dark mode
  - System preference following
  - Persistent theme storage
- **Internationalization**:
  - English (en-US)
  - Traditional Chinese (zh-TW)
  - Persistent language preference
- **Responsive Design**: Mobile-first approach with desktop optimization

### Performance Optimizations
- **Deferred Search**: Uses React 19's `useDeferredValue` to prevent UI blocking during search
- **Component Memoization**: Strategic use of `React.memo` to minimize unnecessary re-renders
- **Optimized Rendering**: Efficient handling of large icon collections

## Tech Stack

### Core Technologies
- **Next.js 16.0.1**: React framework with App Router
- **React 19.2.0**: Latest React with concurrent features
- **TypeScript 5**: Strict type checking
- **Tailwind CSS 4**: Utility-first styling

### UI Components
- **shadcn/ui**: Pre-built accessible components
- **Lucide React**: Icon library (1640+ icons)
- **next-themes**: Theme management

### Development Tools
- **ESLint 9**: Strict linting with flat config
- **Prettier 3.6**: Code formatting
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd aicona

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript type checking
```

## Project Structure

```
aicona/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── customize-panel.tsx
│   │   ├── icon-grid.tsx
│   │   ├── icon-grid-skeleton.tsx
│   │   ├── language-provider.tsx
│   │   ├── language-toggle.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/                   # Utility functions
│       ├── download.ts        # PNG export functionality
│       ├── icons.ts           # Icon management
│       ├── translations.ts    # i18n translations
│       └── utils.ts           # Helper functions
├── .prettierrc.json          # Prettier configuration
├── eslint.config.mjs         # ESLint configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## Development Guidelines

### Code Standards
- **Style Guide**: Follows Airbnb JavaScript/React Style Guide
- **ESLint**: Configured in strict mode
- **JSDoc**: Required for all public functions and classes
- **TypeScript**: Strict mode enabled with explicit return types

### Component Structure
- Use functional components with hooks
- Apply `memo` for performance-critical components
- Keep components small and focused
- Use semantic HTML elements

### State Management
- Use React hooks for local state
- Context API for global state (theme, language)
- Memoize expensive computations with `useMemo`
- Defer non-critical updates with `useDeferredValue`

### Styling
- Tailwind CSS utility classes
- Mobile-first responsive design
- Theme-aware color system
- Consistent spacing and typography

## Performance Features

### Search Optimization
The application uses React 19's `useDeferredValue` hook to optimize search performance:
- Non-blocking UI updates during typing
- Visual feedback with opacity transition
- Smooth user experience even with 1640+ icons

### Component Optimization
Strategic use of `React.memo`:
- `IconButton`: Individual icon buttons memoized
- `IconGrid`: Parent grid component memoized
- Prevents unnecessary re-renders during search and selection

### Rendering Strategy
- Synchronous icon loading with `useMemo`
- Efficient filtering with deferred values
- Minimal re-renders through proper memoization

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes following conventional commits
4. Ensure all tests and linting pass
5. Submit a pull request

## License

Copyright (c) 2025, Luo Yong Neng

This software is licensed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License.

See LICENSE file for details.

## Acknowledgments

- Icons provided by [Lucide Icons](https://lucide.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Built with [Next.js](https://nextjs.org) and [React](https://react.dev)
