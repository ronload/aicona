'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

/**
 * Theme provider component that wraps the application to enable theme switching.
 * Provides support for light, dark, and system themes with persistence.
 * @param props - The component props.
 * @param props.children - The child components to be wrapped with theme context.
 * @param props.props - Additional props to pass to the NextThemesProvider.
 * @returns The theme provider wrapper component.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>): React.JSX.Element {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
