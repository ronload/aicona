'use client';

import { Heart } from 'lucide-react';

import { GitHubIcon } from '@/components/icons/github-icon';
import { useLanguage } from '@/components/language-provider';

/**
 * Footer component displaying copyright, links, and project information.
 * Includes GitHub link, license info, and credits.
 * @returns The footer component with branding and links.
 */
export function Footer(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <footer className="shrink-0 border-t bg-background">
      <div className="px-4 py-6 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Author and Credits */}
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p className="flex flex-wrap items-center justify-center gap-1">
              {t('footer.madeWith')}
              <Heart className="h-4 w-4 fill-current" aria-label="love" />
              {t('footer.using')}{' '}
              <a
                href="https://lucide.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                Lucide Icons
              </a>
              {t('footer.by')}{' '}
              <span className="font-medium text-foreground">Luo Yong Neng</span>
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ronload/aicona"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub Repository"
            >
              <GitHubIcon className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <span className="text-sm text-muted-foreground">{t('footer.license')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
