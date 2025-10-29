'use client';

import { useLanguage } from '@/components/language-provider';
import { LanguageToggle } from '@/components/language-toggle';
import { ThemeToggle } from '@/components/theme-toggle';

/**
 * Home page component for the Aicona application.
 * Displays the main interface for icon generation and customization with i18n support.
 * @returns The home page with icon search and customization features.
 */
export default function Home(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold tracking-tight">{t('app.title')}</h1>
            <span className="text-sm text-muted-foreground">{t('app.subtitle')}</span>
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('app.description')}</h2>
            <p className="mt-2 text-lg text-muted-foreground">{t('app.tagline')}</p>
          </div>

          {/* Placeholder for icon search and customization components */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_400px]">
            {/* Icon Grid Placeholder */}
            <div className="rounded-lg border border-dashed p-12 text-center">
              <p className="text-muted-foreground">{t('placeholder.iconGrid')}</p>
            </div>

            {/* Customization Panel Placeholder */}
            <div className="rounded-lg border border-dashed p-8">
              <p className="text-muted-foreground">{t('placeholder.customization')}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          <p>{t('footer.credits')}</p>
        </div>
      </footer>
    </div>
  );
}
