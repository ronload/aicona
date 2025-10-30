/**
 * Skeleton loading component for icon grid.
 * Displays placeholder cards while icons are loading.
 */

import { Skeleton } from '@/components/ui/skeleton';

/**
 * Skeleton component for icon grid.
 * Shows animated placeholder cards in a responsive grid.
 * @returns The icon grid skeleton component.
 */
export function IconGridSkeleton(): React.JSX.Element {
  // Generate 48 skeleton items (enough to fill most screens)
  const skeletonItems = Array.from({ length: 48 }, (_, i) => i);

  return (
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
      {skeletonItems.map((index) => (
        <div
          key={index}
          className="group relative flex aspect-square items-center justify-center rounded-lg border bg-card p-2"
        >
          <Skeleton className="h-8 w-8 sm:h-10 sm:w-10" />
        </div>
      ))}
    </div>
  );
}
