/**
 * Icon grid component for displaying searchable Lucide icons.
 * Renders icons in a responsive grid layout with click interaction.
 */

import { memo } from 'react';

import { formatIconName, type IconData } from '@/lib/icons';

interface IconGridProps {
  icons: IconData[];
  onIconSelect?: (icon: IconData) => void;
  selectedIcon?: IconData | null;
}

interface IconButtonProps {
  icon: IconData;
  isSelected: boolean;
  onClick: (icon: IconData) => void;
}

/**
 * Individual icon button component.
 * Memoized to prevent unnecessary re-renders.
 * @param props - Component props.
 * @param props.icon - The icon data to display.
 * @param props.isSelected - Whether this icon is currently selected.
 * @param props.onClick - Callback when the icon is clicked.
 * @returns The icon button component.
 */
const IconButton = memo<IconButtonProps>(({ icon, isSelected, onClick }) => {
  const Icon = icon.component;
  const formattedName = formatIconName(icon.name);

  return (
    <button
      type="button"
      onClick={() => onClick(icon)}
      className={`group relative flex aspect-square items-center justify-center rounded-lg border p-2 transition-colors hover:bg-accent hover:text-accent-foreground ${
        isSelected ? 'border-primary bg-primary/10 text-primary' : 'bg-card text-card-foreground'
      }`}
      title={formattedName}
    >
      <Icon className="h-8 w-8 shrink-0 sm:h-10 sm:w-10" />
      <span className="absolute bottom-1 left-0 right-0 truncate text-center text-[10px] leading-tight opacity-0 transition-opacity group-hover:opacity-100">
        {formattedName}
      </span>
    </button>
  );
});

IconButton.displayName = 'IconButton';

/**
 * Displays icons in a responsive grid.
 * Memoized to prevent unnecessary re-renders when props don't change.
 * @param props - Component props.
 * @param props.icons - Array of icons to display.
 * @param props.onIconSelect - Callback when an icon is clicked.
 * @param props.selectedIcon - Currently selected icon.
 * @returns The icon grid component.
 */
export const IconGrid = memo<IconGridProps>(({ icons, onIconSelect, selectedIcon }) => {
  /**
   * Handle icon click event and delegate to parent callback.
   * @param icon - The clicked icon data.
   */
  const handleIconClick = (icon: IconData): void => {
    onIconSelect?.(icon);
  };

  return (
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
      {icons.map((icon) => (
        <IconButton
          key={icon.name}
          icon={icon}
          isSelected={selectedIcon?.name === icon.name}
          onClick={handleIconClick}
        />
      ))}
    </div>
  );
});

IconGrid.displayName = 'IconGrid';
