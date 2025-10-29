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
      credits: '使用 Next.js 和 Lucide Icons 建立的開源圖標生成器',
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
