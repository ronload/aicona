/**
 * Translation messages for different locales.
 * Contains all UI strings for the application in multiple languages.
 */

export const translations = {
  en: {
    app: {
      title: 'Aicona',
      subtitle: 'Icon Generator',
      description: 'Generate Custom Application Icons',
      tagline: 'Search, customize, and export beautiful icons from the Lucide library',
    },
    header: {
      theme: 'Theme',
      language: 'Language',
    },
    search: {
      placeholder: 'Search icons (English only)',
      results: 'icons found',
      noResults: 'No icons found. Try a different search term.',
    },
    customize: {
      iconSize: 'Icon Size',
      iconColor: 'Icon Color',
      iconOpacity: 'Icon Opacity',
      backgroundColor: 'Background Color',
      backgroundOpacity: 'Background Opacity',
      download: 'Download PNG',
      downloading: 'Downloading...',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
    language: {
      en: 'English',
      'zh-TW': '繁體中文',
    },
    placeholder: {
      iconGrid: 'Icon search and grid will be implemented here',
      customization: 'Customization panel will be implemented here',
    },
    footer: {
      madeWith: 'Made with',
      using: 'using',
      by: 'by',
      license: 'MIT License',
      credits: 'Open source icon generator built with Next.js and Lucide Icons',
    },
  },
  'zh-TW': {
    app: {
      title: 'Aicona',
      subtitle: '圖標生成器',
      description: '生成客製化應用程式圖標',
      tagline: '搜尋、客製化並匯出來自 Lucide 圖標庫的精美圖標',
    },
    header: {
      theme: '主題',
      language: '語言',
    },
    search: {
      placeholder: '搜尋圖標（僅支援英文）',
      results: '個圖標',
      noResults: '找不到圖標。請嘗試其他搜尋關鍵字。',
    },
    customize: {
      iconSize: '圖標大小',
      iconColor: '圖標顏色',
      iconOpacity: '圖標透明度',
      backgroundColor: '背景顏色',
      backgroundOpacity: '背景透明度',
      download: '下載 PNG',
      downloading: '下載中...',
    },
    theme: {
      light: '亮色',
      dark: '暗色',
      system: '跟隨系統',
    },
    language: {
      en: 'English',
      'zh-TW': '繁體中文',
    },
    placeholder: {
      iconGrid: '圖標搜尋和網格將在此實作',
      customization: '客製化面板將在此實作',
    },
    footer: {
      madeWith: '用',
      using: '製作，使用',
      by: '由',
      license: 'MIT 授權',
      credits: '使用 Next.js 和 Lucide Icons 建立的開源圖標生成器',
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
