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
  keywords: [
    'icon generator',
    'lucide icons',
    'app icons',
    'custom icons',
    'svg icons',
    'icon customization',
    'free icon generator',
    'web icons',
  ],
  authors: [{ name: 'Aicona Team' }],
  creator: 'Aicona Team',
  publisher: 'Aicona',
  metadataBase: new URL('https://aicona.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aicona - Application Icon Generator',
    description: 'Generate and customize application icons with Lucide Icons',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_TW'],
    siteName: 'Aicona',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Aicona - Application Icon Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aicona - Application Icon Generator',
    description: 'Generate and customize application icons with Lucide Icons',
    images: ['/opengraph-image'],
    creator: '@aicona',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon', type: 'image/png', sizes: '512x512' },
      { url: '/icon', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/apple-icon', type: 'image/png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  applicationName: 'Aicona',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Aicona',
  },
  formatDetection: {
    telephone: false,
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
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
