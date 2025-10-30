/**
 * Customization panel component for icon styling.
 * Provides controls for icon size, colors, and opacity settings.
 */

import { useEffect, useRef, useState } from 'react';

import { Download } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/components/language-provider';
import { downloadIconAsPNG, extractSvgFromElement } from '@/lib/download';
import { formatIconName, type IconData } from '@/lib/icons';

interface CustomizePanelProps {
  icon: IconData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Get the current theme's foreground color from CSS variables.
 * @returns The foreground color in hex format.
 */
function getThemeForegroundColor(): string {
  if (typeof window === 'undefined') return '#000000';

  const root = document.documentElement;
  const style = getComputedStyle(root);
  const foreground = style.getPropertyValue('--foreground').trim();

  // Convert HSL to hex (foreground is in HSL format like "222.2 84% 4.9%")
  if (foreground) {
    const isDark = root.classList.contains('dark');
    return isDark ? '#ffffff' : '#000000';
  }

  return '#000000';
}

/**
 * Panel for customizing icon appearance.
 * Slides up from the bottom on mobile devices.
 * @param props - Component props.
 * @param props.icon - The selected icon to customize.
 * @param props.open - Whether the panel is open.
 * @param props.onOpenChange - Callback when panel open state changes.
 * @returns The customization panel component.
 */
export function CustomizePanel({ icon, open, onOpenChange }: CustomizePanelProps): React.JSX.Element {
  const { t } = useLanguage();
  const previewRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // Icon customization state
  const [iconSize, setIconSize] = useState(128);
  const [iconColor, setIconColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [iconOpacity, setIconOpacity] = useState(100);
  const [backgroundOpacity, setBackgroundOpacity] = useState(100);

  // Update icon color when panel opens to match current theme
  useEffect(() => {
    if (open) {
      setIconColor(getThemeForegroundColor());
    }
  }, [open]);

  /**
   * Handle download button click.
   * Extracts SVG and downloads as PNG with custom styling.
   */
  const handleDownload = async (): Promise<void> => {
    if (!previewRef.current || !icon) return;

    setIsDownloading(true);
    try {
      const svgString = extractSvgFromElement(previewRef.current);
      if (!svgString) {
        throw new Error('Failed to extract SVG from icon');
      }

      await downloadIconAsPNG({
        iconSvg: svgString,
        size: iconSize,
        iconColor,
        backgroundColor,
        iconOpacity,
        backgroundOpacity,
        fileName: icon.name,
      });
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!icon) {
    return <></>;
  }

  const Icon = icon.component;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[95vh] overflow-y-auto">
        <SheetHeader className="px-6">
          <SheetTitle>{t('customize.title')}</SheetTitle>
          <SheetDescription>
            {formatIconName(icon.name)}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-8 px-6">
          {/* Icon Preview */}
          <div className="mx-auto flex aspect-square w-[200px] items-center justify-center overflow-hidden rounded-lg border p-8">
            <div
              ref={previewRef}
              className="flex shrink-0 items-center justify-center rounded-lg transition-all"
              style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                backgroundColor: `${backgroundColor}${Math.round((backgroundOpacity / 100) * 255).toString(16).padStart(2, '0')}`,
              }}
            >
              <Icon
                size={iconSize * 0.7}
                style={{
                  color: iconColor,
                  opacity: iconOpacity / 100,
                }}
              />
            </div>
          </div>

          {/* Icon Size */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="icon-size">{t('customize.iconSize')}</Label>
              <span className="text-sm text-muted-foreground">{iconSize}px</span>
            </div>
            <Slider
              id="icon-size"
              min={32}
              max={512}
              step={8}
              value={[iconSize]}
              onValueChange={(value) => setIconSize(value[0] ?? 128)}
            />
          </div>

          {/* Icon Color */}
          <div className="space-y-3">
            <Label htmlFor="icon-color">{t('customize.iconColor')}</Label>
            <div className="flex gap-3">
              <input
                id="icon-color"
                type="color"
                value={iconColor}
                onChange={(e) => setIconColor(e.target.value)}
                className="h-10 w-20 cursor-pointer rounded border"
              />
              <input
                type="text"
                value={iconColor}
                onChange={(e) => setIconColor(e.target.value)}
                className="flex-1 rounded border px-3 py-2 text-sm"
                placeholder="#000000"
              />
            </div>
          </div>

          {/* Icon Opacity */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="icon-opacity">{t('customize.iconOpacity')}</Label>
              <span className="text-sm text-muted-foreground">{iconOpacity}%</span>
            </div>
            <Slider
              id="icon-opacity"
              min={0}
              max={100}
              step={1}
              value={[iconOpacity]}
              onValueChange={(value) => setIconOpacity(value[0] ?? 100)}
            />
          </div>

          {/* Background Color */}
          <div className="space-y-3">
            <Label htmlFor="bg-color">{t('customize.backgroundColor')}</Label>
            <div className="flex gap-3">
              <input
                id="bg-color"
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="h-10 w-20 cursor-pointer rounded border"
              />
              <input
                type="text"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="flex-1 rounded border px-3 py-2 text-sm"
                placeholder="#ffffff"
              />
            </div>
          </div>

          {/* Background Opacity */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="bg-opacity">{t('customize.backgroundOpacity')}</Label>
              <span className="text-sm text-muted-foreground">{backgroundOpacity}%</span>
            </div>
            <Slider
              id="bg-opacity"
              min={0}
              max={100}
              step={1}
              value={[backgroundOpacity]}
              onValueChange={(value) => setBackgroundOpacity(value[0] ?? 0)}
            />
          </div>

          {/* Download Button */}
          <div className="pt-4">
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              {isDownloading ? t('customize.downloading') : t('customize.download')}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
