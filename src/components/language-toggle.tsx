'use client';

import { Languages } from 'lucide-react';
import * as React from 'react';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { type Locale } from '@/lib/translations';

const locales: Locale[] = ['en', 'zh-TW'];

/**
 * Language toggle component that provides a dropdown menu for switching languages.
 * Supports English and Traditional Chinese with localStorage persistence.
 * @returns The language toggle dropdown button component.
 */
export function LanguageToggle(): React.JSX.Element {
  const { locale, setLocale, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle language"
          className="focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => setLocale(loc)}
            className={`py-3 text-base ${locale === loc ? 'bg-accent' : ''}`}
          >
            <span>{t(`language.${loc}`)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
