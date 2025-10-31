import { GiHollowCat } from 'react-icons/gi';

import { cn } from '@/lib/utils';

/**
 * Logo component featuring the GiHollowCat icon.
 * Used for brand identification across the application.
 * @param props - Component props.
 * @param props.className - Additional CSS classes to apply.
 * @param props.size - Icon size in pixels.
 * @returns The logo component with icon and text.
 */
export function Logo({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}): React.JSX.Element {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <GiHollowCat className="text-primary" size={size} aria-hidden="true" />
      <span className="text-lg font-bold tracking-tight sm:text-xl">Aicona</span>
    </div>
  );
}
