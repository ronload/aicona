# AICONA

[![CI](https://github.com/ronload/aicona/actions/workflows/ci.yml/badge.svg)](https://github.com/ronload/aicona/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Biome](https://img.shields.io/badge/Biome-2-60A5FA?logo=biome&logoColor=white)](https://biomejs.dev)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)

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

- **Next.js 16**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript 6**: Strict type checking
- **Tailwind CSS 4**: Utility-first styling

### UI Components

- **shadcn/ui**: Pre-built accessible components
- **Lucide React**: Icon library (1640+ icons)
- **next-themes**: Theme management

### Development Tools

- **Biome 2**: Fast all-in-one linter and formatter
- **TypeScript 6**: Full type safety

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm 10 or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd aicona

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
# Development
pnpm dev             # Start development server

# Production
pnpm build           # Build for production
pnpm start           # Start production server

# Code Quality
pnpm lint            # Run Biome linter
pnpm lint:fix        # Fix Biome lint errors
pnpm format          # Format code with Biome
pnpm format:check    # Check code formatting
pnpm check           # Run Biome lint + format checks
pnpm check:fix       # Fix Biome lint + format issues
pnpm typecheck       # Run TypeScript type checking
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
│   │   ├── icons/            # Custom icon components
│   │   ├── customize-panel.tsx
│   │   ├── footer.tsx
│   │   ├── icon-grid.tsx
│   │   ├── icon-grid-skeleton.tsx
│   │   ├── language-provider.tsx
│   │   ├── language-toggle.tsx
│   │   ├── logo.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/                   # Utility functions
│       ├── download.ts        # PNG export functionality
│       ├── icons.ts           # Icon management
│       ├── translations.ts    # i18n translations
│       └── utils.ts           # Helper functions
├── biome.json                # Biome lint + format configuration
├── components.json           # shadcn/ui configuration
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## Development Guidelines

### Code Standards

- **Style Guide**: Follows Airbnb JavaScript/React Style Guide
- **Biome**: Strict lint and format rules
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

Copyright (c) 2026 Luo Yong Neng

This software is licensed under the MIT License.

See LICENSE file for details.

## Acknowledgments

- Icons provided by [Lucide Icons](https://lucide.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Built with [Next.js](https://nextjs.org) and [React](https://react.dev)
