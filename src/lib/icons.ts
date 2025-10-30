/**
 * Icon data management for Lucide icons.
 * Provides utilities to load, search, and manage icon data.
 */

import { icons } from 'lucide-react';

export interface IconData {
  name: string;
  component: React.ComponentType<{ className?: string; size?: number }>;
}

/**
 * Get all available Lucide icons.
 * Uses the icons export from lucide-react which contains all icon components.
 * @returns Array of icon data objects.
 */
export function getAllIcons(): IconData[] {
  const iconList: IconData[] = [];

  Object.entries(icons).forEach(([name, component]) => {
    iconList.push({
      name,
      component: component as React.ComponentType<{
        className?: string;
        size?: number;
      }>,
    });
  });

  // Sort icons alphabetically by name
  return iconList.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Search icons by name.
 * Performs case-insensitive search.
 * @param icons - Array of icon data to search through.
 * @param query - Search query string.
 * @returns Filtered array of matching icons.
 */
export function searchIcons(icons: IconData[], query: string): IconData[] {
  if (!query.trim()) {
    return icons;
  }

  const normalizedQuery = query.toLowerCase().trim();

  return icons.filter((icon) => icon.name.toLowerCase().includes(normalizedQuery));
}

/**
 * Convert PascalCase icon name to human-readable format.
 * @param name - Icon name in PascalCase.
 * @returns Human-readable icon name.
 */
export function formatIconName(name: string): string {
  // Insert space before uppercase letters and convert to lowercase
  return name
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase();
}
