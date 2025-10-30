'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  startTransition,
} from 'react';

import { translations, type Locale } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Language provider component that manages application locale state.
 * Provides language switching functionality and translation helper.
 * Handles SSR hydration by loading locale from localStorage after mount.
 * @param props - The component props.
 * @param props.children - Child components that need access to language context.
 * @returns The language context provider wrapper.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  // Always start with default locale to avoid hydration mismatch
  const [locale, setLocaleState] = useState<Locale>('en');

  // Load saved locale from localStorage after hydration
  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && (saved === 'en' || saved === 'zh-TW')) {
      // Use startTransition to mark this as a non-urgent update
      startTransition(() => {
        setLocaleState(saved);
      });
    }
  }, []);

  /**
   * Sets the current locale and persists it to localStorage.
   * @param newLocale - The locale to switch to.
   */
  const setLocale = useCallback((newLocale: Locale): void => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  }, []);

  /**
   * Translation helper function that retrieves translated text by key.
   * @param key - Dot-notation path to the translation (e.g., 'app.title').
   * @returns The translated string for the current locale.
   */
  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let value: unknown = translations[locale];

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key; // Return key if translation not found
        }
      }

      return typeof value === 'string' ? value : key;
    },
    [locale]
  );

  const contextValue = React.useMemo(
    () => ({
      locale,
      setLocale,
      t,
    }),
    [locale, setLocale, t]
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

/**
 * Hook to access language context.
 * Must be used within a LanguageProvider.
 * @returns The language context with locale, setLocale, and t function.
 * @throws Error if used outside of LanguageProvider.
 */
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
