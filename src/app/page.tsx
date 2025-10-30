'use client';

import { Search } from 'lucide-react';
import { useDeferredValue, useMemo, useState } from 'react';

import { CustomizePanel } from '@/components/customize-panel';
import { IconGrid } from '@/components/icon-grid';
import { useLanguage } from '@/components/language-provider';
import { LanguageToggle } from '@/components/language-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { Input } from '@/components/ui/input';
import { getAllIcons, searchIcons, type IconData } from '@/lib/icons';

/**
 * Home page component for the Aicona application.
 * Features a mobile-first layout with search functionality and icon grid.
 * @returns The home page with search bar and icon display area.
 */
export default function Home(): React.JSX.Element {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  // Load all icons once
  const allIcons = useMemo(() => getAllIcons(), []);

  // Use deferred value for search to avoid blocking UI updates
  const deferredSearchQuery = useDeferredValue(searchQuery);

  // Filter icons based on deferred search query
  const filteredIcons = useMemo(
    () => searchIcons(allIcons, deferredSearchQuery),
    [allIcons, deferredSearchQuery]
  );

  // Check if search is pending (user is typing but results haven't updated yet)
  const isSearchPending = searchQuery !== deferredSearchQuery;

  /**
   * Handle icon selection and open customization panel.
   * @param icon - The selected icon data.
   */
  const handleIconSelect = (icon: IconData): void => {
    setSelectedIcon(icon);
    setPanelOpen(true);
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      {/* Header - Fixed */}
      <header className="shrink-0 border-b">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold tracking-tight sm:text-xl">{t('app.title')}</h1>
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Search Bar - Fixed */}
      <div className="shrink-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="px-4 py-4 sm:px-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t('search.placeholder')}
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* Results counter */}
          {searchQuery && (
            <p className="mt-2 text-sm text-muted-foreground">
              {filteredIcons.length} {t('search.results')}
            </p>
          )}
        </div>
      </div>

      {/* Icon Display Area - Scrollable */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-4 sm:p-6">
          {filteredIcons.length > 0 ? (
            <div className={isSearchPending ? 'opacity-60 transition-opacity' : ''}>
              <IconGrid
                icons={filteredIcons}
                selectedIcon={selectedIcon}
                onIconSelect={handleIconSelect}
              />
            </div>
          ) : (
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-muted-foreground">{t('search.noResults')}</p>
            </div>
          )}
        </div>
      </main>

      {/* Customization Panel */}
      <CustomizePanel icon={selectedIcon} open={panelOpen} onOpenChange={setPanelOpen} />
    </div>
  );
}
