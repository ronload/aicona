/**
 * Utility functions for downloading customized icons.
 * Provides PNG export functionality with custom styling.
 */

interface DownloadOptions {
  iconSvg: string;
  size: number;
  iconColor: string;
  backgroundColor: string;
  iconOpacity: number;
  backgroundOpacity: number;
  fileName: string;
}

/**
 * Download icon as PNG with custom styling.
 * Uses Canvas API to render the icon with specified properties.
 * @param options - Download configuration options.
 */
export async function downloadIconAsPNG(options: DownloadOptions): Promise<void> {
  const { iconSvg, size, iconColor, backgroundColor, iconOpacity, backgroundOpacity, fileName } =
    options;

  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }

  // Draw background if opacity > 0
  if (backgroundOpacity > 0) {
    const alpha = Math.round((backgroundOpacity / 100) * 255)
      .toString(16)
      .padStart(2, '0');
    ctx.fillStyle = `${backgroundColor}${alpha}`;
    ctx.fillRect(0, 0, size, size);
  }

  // Calculate icon size (70% of canvas)
  const iconSize = size * 0.7;

  // Clean and prepare SVG
  let styledSvg = iconSvg;

  // Remove inline styles, classes, and aria attributes
  styledSvg = styledSvg.replace(/\s+style="[^"]*"/g, '');
  styledSvg = styledSvg.replace(/\s+class="[^"]*"/g, '');
  styledSvg = styledSvg.replace(/\s+aria-[^=]*="[^"]*"/g, '');

  // Replace all stroke colors (including currentColor)
  styledSvg = styledSvg.replace(/stroke="currentColor"/g, `stroke="${iconColor}"`);
  styledSvg = styledSvg.replace(/stroke="[^"]*"/g, `stroke="${iconColor}"`);

  // Ensure xmlns is present
  if (!styledSvg.includes('xmlns="http://www.w3.org/2000/svg"')) {
    styledSvg = styledSvg.replace(/<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }

  // Ensure viewBox is present
  if (!styledSvg.includes('viewBox=')) {
    styledSvg = styledSvg.replace(/<svg/, '<svg viewBox="0 0 24 24"');
  }

  // Update width and height
  styledSvg = styledSvg.replace(/\s+width="[^"]*"/g, '');
  styledSvg = styledSvg.replace(/\s+height="[^"]*"/g, '');
  styledSvg = styledSvg.replace(/<svg/, `<svg width="${iconSize}" height="${iconSize}"`);

  // Convert SVG to image
  const img = new Image();
  const svgBlob = new Blob([styledSvg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);

  return new Promise((resolve, reject) => {
    /**
     * Handle successful image load and draw on canvas.
     */
    img.onload = () => {
      // Draw icon centered on canvas
      const x = (size - iconSize) / 2;
      const y = (size - iconSize) / 2;

      // Set global opacity for the icon
      ctx.globalAlpha = iconOpacity / 100;
      ctx.drawImage(img, x, y, iconSize, iconSize);
      ctx.globalAlpha = 1;

      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        if (!blob) {
          URL.revokeObjectURL(url);
          reject(new Error('Failed to create blob'));
          return;
        }

        const downloadUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${fileName}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(downloadUrl);
        URL.revokeObjectURL(url);
        resolve();
      }, 'image/png');
    };

    /**
     * Handle image load failure.
     */
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load SVG image'));
    };

    img.src = url;
  });
}

/**
 * Extract SVG string from a DOM element containing an SVG.
 * @param element - The DOM element containing the SVG.
 * @returns The SVG as a string, or null if not found.
 */
export function extractSvgFromElement(element: HTMLElement): string | null {
  const svg = element.querySelector('svg');
  if (!svg) return null;

  return new XMLSerializer().serializeToString(svg);
}
