/**
 * Icon grid component for displaying searchable Lucide icons.
 * Renders icons in a responsive grid layout with click interaction.
 */

import React from 'react';

import { formatIconName, type IconData } from '@/lib/icons';

interface IconGridProps {
  icons: IconData[];
  onIconSelect?: (icon: IconData) => void;
  selectedIcon?: IconData | null;
}

/**
 * Displays icons in a responsive grid.
 * @param props - Component props.
 * @param props.icons - Array of icons to display.
 * @param props.onIconSelect - Callback when an icon is clicked.
 * @param props.selectedIcon - Currently selected icon.
 * @returns The icon grid component.
 */
export function IconGrid({
  icons,
  onIconSelect,
  selectedIcon,
}: IconGridProps): React.JSX.Element {
  return (
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
      {icons.map((icon) => {
        const Icon = icon.component;
        const isSelected = selectedIcon?.name === icon.name;

        return (
          <button
            key={icon.name}
            type="button"
            onClick={() => onIconSelect?.(icon)}
            className={`group relative flex aspect-square items-center justify-center rounded-lg border p-2 transition-colors hover:bg-accent hover:text-accent-foreground ${
              isSelected
                ? 'border-primary bg-primary/10 text-primary'
                : 'bg-card text-card-foreground'
            }`}
            title={formatIconName(icon.name)}
          >
            <Icon className="h-8 w-8 shrink-0 sm:h-10 sm:w-10" />
            <span className="absolute bottom-1 left-0 right-0 truncate text-center text-[10px] leading-tight opacity-0 transition-opacity group-hover:opacity-100">
              {formatIconName(icon.name)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
