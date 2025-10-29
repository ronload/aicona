import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsdoc from "eslint-plugin-jsdoc";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),
  // Strict rules for all other files (default configuration)
  {
    plugins: {
      jsdoc
    },
    settings: {
      jsdoc: {
        mode: "typescript",
        tagNamePreference: {
          returns: "returns"
        }
      }
    },
    rules: {
      // JSDoc rules for strict documentation
      "jsdoc/require-jsdoc": ["error", {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true
        },
        contexts: [
          "ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > ArrowFunctionExpression",
          "ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > FunctionExpression",
          "ExportDefaultDeclaration > ArrowFunctionExpression",
          "ExportDefaultDeclaration > FunctionExpression"
        ],
        exemptEmptyConstructors: true,
        exemptEmptyFunctions: false
      }],
      "jsdoc/require-description": ["error", {
        contexts: ["any"]
      }],
      "jsdoc/require-param": "error",
      "jsdoc/require-param-description": "error",
      "jsdoc/require-param-type": "off", // TypeScript handles types
      "jsdoc/require-returns": "error",
      "jsdoc/require-returns-description": "error",
      "jsdoc/require-returns-type": "off", // TypeScript handles types
      "jsdoc/valid-types": "off", // TypeScript handles types
      "jsdoc/check-alignment": "error",
      "jsdoc/check-param-names": "error",
      "jsdoc/check-tag-names": "error",
      "jsdoc/check-types": "off", // TypeScript handles types
      "jsdoc/implements-on-classes": "error",
      "jsdoc/no-undefined-types": "off", // TypeScript handles types
      "jsdoc/require-description-complete-sentence": ["error", {
        abbreviations: ["e.g.", "i.e.", "etc.", "vs.", "Mr.", "Mrs.", "Dr."]
      }],

      // Enforce strict mode - Airbnb-inspired rules
      "strict": ["error", "global"],

      // Variables
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-vars": "off", // Using TypeScript's version
      "@typescript-eslint/no-unused-vars": ["error", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error",

      // Best Practices
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-alert": "error",
      "eqeqeq": ["error", "always"],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-implicit-coercion": "error",
      "no-implicit-globals": "error",
      "no-invalid-this": "error",
      "no-lone-blocks": "error",
      "no-multi-spaces": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unmodified-loop-condition": "error",
      "no-unused-expressions": "error",
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "no-with": "error",
      "radix": "error",
      "yoda": "error",

      // TypeScript specific
      "@typescript-eslint/explicit-function-return-type": ["error", {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true,
        "allowHigherOrderFunctions": true
      }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/prefer-as-const": "error",

      // Type-aware rules (uncomment if you want stricter type checking)
      // Note: These require parserOptions.project and may slow down linting
      // To enable, also add parserOptions configuration below
      // "@typescript-eslint/no-unnecessary-type-assertion": "error",
      // "@typescript-eslint/no-floating-promises": "error",
      // "@typescript-eslint/no-misused-promises": "error",
      // "@typescript-eslint/await-thenable": "error",
      // "@typescript-eslint/no-unnecessary-condition": "error",

      // React specific
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": ["error", {
        "props": "never",
        "children": "never"
      }],
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-uses-react": "off", // Not needed with React 17+
      "react/jsx-uses-vars": "error",
      "react/no-danger": "warn",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-render-return-value": "error",
      "react/no-string-refs": "error",
      "react/no-unknown-property": "error",
      "react/prefer-es6-class": "error",
      "react/prefer-stateless-function": "error",
      "react/prop-types": "off", // Using TypeScript
      "react/react-in-jsx-scope": "off", // Not needed with React 17+
      "react/require-render-return": "error",
      "react/self-closing-comp": "error",
      "react/sort-comp": "error",
      "react/style-prop-object": "error",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      // Import
      "import/no-default-export": "off", // Next.js requires default exports
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }],

      // Stylistic (since Prettier handles most formatting)
      "arrow-body-style": ["error", "as-needed"],
      "arrow-parens": ["error", "always"],
      "no-confusing-arrow": "error",
      "prefer-arrow-callback": "error",
      "prefer-destructuring": "error",
      "prefer-template": "error",
      "template-curly-spacing": ["error", "never"],

      // Comments
      "spaced-comment": ["error", "always", {
        "line": {
          "markers": ["/"],
          "exceptions": ["-", "+"]
        },
        "block": {
          "markers": ["!"],
          "exceptions": ["*"],
          "balanced": true
        }
      }]
    }
  },
  // Relaxed rules for shadcn/ui components and utils (auto-generated code)
  {
    files: [
      "components/ui/**/*.{ts,tsx}",
      "components/ui/**/*.{js,jsx}",
      "lib/utils.{ts,tsx,js,jsx}"
    ],
    rules: {
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-description": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "import/order": "off",
      "react/self-closing-comp": "off",
      "react/jsx-boolean-value": "off",
      "no-confusing-arrow": "off",
    }
  }
]);

export default eslintConfig;

/*
 * To enable type-aware linting rules (slower but stricter):
 *
 * 1. Uncomment the type-aware rules in the configuration above
 * 2. Add the following parserOptions configuration to the rules object:
 *
 * parserOptions: {
 *   project: './tsconfig.json',
 *   tsconfigRootDir: import.meta.dirname,
 * },
 *
 * Note: This will significantly increase linting time but provide
 * more comprehensive type checking for your TypeScript code.
 */
