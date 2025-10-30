import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { LanguageProvider } from '@/components/language-provider';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aicona - Application Icon Generator',
  description:
    'Generate and customize application icons with Lucide Icons. Adjust size, colors, transparency, and export in multiple formats.',
  keywords: ['icon generator', 'lucide icons', 'app icons', 'custom icons', 'svg icons'],
  authors: [{ name: 'Aicona Team' }],
  openGraph: {
    title: 'Aicona - Application Icon Generator',
    description: 'Generate and customize application icons with ease',
    type: 'website',
  },
};

/**
 * Root layout component for the application.
 * Provides the basic HTML structure, global fonts, theme, and language support.
 * @param props - The component props.
 * @param props.children - The page content to be rendered within the layout.
 * @returns The complete HTML document structure with applied fonts, themes, and i18n.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
