import { ImageResponse } from 'next/og';

/**
 * Generate Apple touch icon dynamically.
 * Uses Next.js Image Response API to create Apple-specific app icon.
 */
export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

/**
 * Apple icon component with rounded corners for iOS devices.
 * @returns ImageResponse with the Apple touch icon.
 */
export default function AppleIcon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 140,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '22.5%',
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 512 512"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M290.59 192c0-8.837 7.163-16 16-16s16 7.163 16 16s-7.163 16-16 16s-16-7.163-16-16zm-84 16c8.837 0 16-7.163 16-16s-7.163-16-16-16s-16 7.163-16 16s7.163 16 16 16zm328.101-130.193c-16.606-27.645-39.81-47.805-66.201-57.602C441.044 7.435 405.537 0 368 0h-48C186.562 0 80 94.562 80 208c0 22.719 3.724 44.52 10.537 64.758C35.313 308.883 0 368.375 0 435.062C0 469.531 27.969 496 62.438 496h72c8.836 0 16-7.164 16-16v-80c0-8.836-7.164-16-16-16h-48c-8.836 0-16 7.164-16 16v48h-8.438C40.906 448 24 431.094 24 411.062c0-54.719 31.336-104.156 80.375-126.813l12.5-5.781l-2.969-13.188C109.047 249.902 104 229.219 104 208c0-96.813 86.734-176 192-176h48c32.828 0 62.766 6.469 84.906 18.281c21.297 11.359 39.562 28.906 52.359 50.531c12.453 20.672 18.766 44.281 18.766 70.188c0 20.781-4.844 40.844-14.391 59.625l-8.219 16.219l17.594 5.875C532.234 267.203 560 303.844 560 346.938c0 17.984-14.578 32.562-32.438 32.562H520v-48c0-8.836-7.164-16-16-16h-48c-8.836 0-16 7.164-16 16v80c0 8.836 7.164 16 16 16h72c34.469 0 62.438-26.469 62.438-60.938c0-59.594-36.797-113.281-91.641-137.531c6.672-21.203 10.078-43.531 10.078-66.094c0-31.891-7.641-61.656-22.078-86.192z" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
