# AICONA - 應用程式圖標生成器

## 專案概述
AICONA 是一個純前端的應用程式圖標生成器，允許用戶搜尋、選擇和客製化 Lucide Icons。

## 核心功能要求

### 主要業務邏輯
1. 搜尋功能：可以搜尋所有 lucide-icons 上存在的圖標
2. 圖標選擇：用戶可以點擊喜歡的圖標
3. 客製化功能：
   - 圖標大小調整
   - 圖標顏色設定
   - 圖標底色設定（lucide 預設去背）
   - 圖標透明度調整
   - 圖標底色透明度調整（lucide 預設去背）

### 介面功能要求
1. **主題切換系統**：
   - 支援亮色主題（Light Mode）
   - 支援暗色主題（Dark Mode）
   - 支援跟隨系統主題（System Mode）
   - 主題切換需即時生效，無需重新載入頁面
   - 主題偏好需持久化儲存（localStorage）

2. **國際化支援（i18n）**：
   - 支援繁體中文（zh-TW）
   - 支援英文（en-US）
   - 語言切換需即時生效
   - 語言偏好需持久化儲存（localStorage）
   - 所有 UI 文字都需要支援雙語

## 技術規範

### 技術棧
- **框架**: Next.js 16（App Router）
- **UI 元件庫**: shadcn/ui
- **CSS 框架**: Tailwind CSS v4
- **圖標庫**: lucide-react
- **主題管理**: next-themes
- **國際化**: next-intl 或 i18next（推薦 next-intl 以更好整合 Next.js 16）

### 開發原則
1. **移動端優先原則**：所有介面設計和響應式佈局都從移動端開始，逐步適配到桌面端
2. **性能優先**：確保應用載入快速，操作流暢
3. **代碼規範**：遵循最嚴格的代碼標準和最佳實踐
4. **充分利用 Next.js 16 特性**：
   - 使用 App Router
   - Server Components
   - Suspense 和 Streaming
   - 優化的圖片處理
   - 其他 Next.js 16 的新特性

## 專案要求
- **開源專案**：代碼公開，使用適當的開源協議
- **高性能**：優化渲染性能，減少不必要的重新渲染
- **無障礙性**：確保應用符合 WCAG 標準
- **SEO 友好**：優化搜尋引擎索引

## 代碼規範

### 基本規範
- 使用 TypeScript 進行類型安全開發
- **遵循 Airbnb JavaScript/React Style Guide**
- ESLint 設定為 **restrict** 模式（最嚴格級別）
- 元件採用函數式元件和 Hooks
- 使用語義化的 HTML 標籤
- CSS 類名遵循 Tailwind CSS 規範

### 註解規範
- **所有註解必須使用全英文撰寫**
- **必須提供完整的 JSDoc 註解**
  - 所有公開函數、類別和介面都需要 JSDoc
  - TypeScript 類型明確的參數可以省略 `@param` 的類型描述
  - 純類型定義（interface、type）不需要重複描述顯而易見的內容
- JSDoc 範例：
  ```typescript
  /**
   * Search icons by name or keywords
   * @param query - The search term to filter icons
   * @returns Filtered icon collection
   */
  export const searchIcons = (query: string): IconCollection => {
    // Implementation
  };
  ```

### 程式碼品質
- 所有函數必須有明確的返回類型
- 避免使用 any 類型，必要時使用 unknown
- 使用 const 和 let，禁用 var
- 優先使用函數式編程範式
- 避免副作用，保持函數純度

## 用戶體驗要求
- 直覺的使用者介面
- 即時預覽客製化效果
- 快速的搜尋和過濾功能
- 支援鍵盤快捷鍵操作
- 提供清晰的操作回饋
- **主題切換**：在頁面 Header 提供主題切換按鈕，支援三種模式切換
- **語言切換**：在頁面 Header 提供語言切換選項
- **無閃爍切換**：主題和語言切換應平滑過渡，避免頁面閃爍

## 效能指標
- Lighthouse 分數目標：> 95
- First Contentful Paint (FCP): < 1.8s
- Time to Interactive (TTI): < 3.9s
- 支援離線使用（PWA）