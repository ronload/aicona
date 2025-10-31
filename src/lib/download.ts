/**
 * Utility functions for downloading customized icons.
 * Provides PNG export functionality with custom styling.
 */

interface DownloadOptions {
  iconSvg: string;
  sizePercentage: number; // Icon size as percentage (0-100) relative to 1024x1024 canvas
  iconColor: string;
  backgroundColor: string;
  iconOpacity: number;
  backgroundOpacity: number;
  fileName: string;
}

/**
 * Download icon as PNG with custom styling.
 * Uses Canvas API to render the icon with specified properties.
 * Canvas is fixed at 1024x1024 pixels.
 * @param options - Download configuration options.
 */
export async function downloadIconAsPNG(options: DownloadOptions): Promise<void> {
  const {
    iconSvg,
    sizePercentage,
    iconColor,
    backgroundColor,
    iconOpacity,
    backgroundOpacity,
    fileName,
  } = options;

  // Fixed canvas size at 1024x1024
  const canvasSize = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = canvasSize;
  canvas.height = canvasSize;
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
    ctx.fillRect(0, 0, canvasSize, canvasSize);
  }

  // Calculate icon size based on percentage
  const iconSize = canvasSize * (sizePercentage / 100);

  // Clean and prepare SVG
  let styledSvg = iconSvg;

  // Remove inline styles, classes, and aria attributes
  styledSvg = styledSvg.replace(/\s+style="[^"]*"/g, '');
  styledSvg = styledSvg.replace(/\s+class="[^"]*"/g, '');
  styledSvg = styledSvg.replace(/\s+aria-[^=]*="[^"]*"/g, '');

  // Replace stroke colors (preserve "none")
  styledSvg = styledSvg.replace(/stroke="currentColor"/g, `stroke="${iconColor}"`);
  styledSvg = styledSvg.replace(/stroke="(?!none)[^"]*"/g, `stroke="${iconColor}"`);

  // Replace fill colors (preserve "none")
  styledSvg = styledSvg.replace(/fill="currentColor"/g, `fill="${iconColor}"`);
  styledSvg = styledSvg.replace(/fill="(?!none)[^"]*"/g, `fill="${iconColor}"`);

  // Ensure xmlns is present
  if (!styledSvg.includes('xmlns="http://www.w3.org/2000/svg"')) {
    styledSvg = styledSvg.replace(/<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }

  // Extract existing viewBox or use default
  const viewBoxMatch = styledSvg.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Remove only SVG tag's viewBox, width, and height (not from child elements)
  // Match <svg...> tag and remove its attributes
  styledSvg = styledSvg.replace(/<svg([^>]*)>/, (_match, attributes: string) => {
    // Remove viewBox, width, height from SVG tag attributes only
    const cleanAttributes = attributes
      .replace(/\s+viewBox="[^"]*"/g, '')
      .replace(/\s+width="[^"]*"/g, '')
      .replace(/\s+height="[^"]*"/g, '');
    return `<svg viewBox="${viewBox}" width="${iconSize}" height="${iconSize}"${cleanAttributes}>`;
  });

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
      const x = (canvasSize - iconSize) / 2;
      const y = (canvasSize - iconSize) / 2;

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
