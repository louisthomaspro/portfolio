import nextVitals from "eslint-config-next/core-web-vitals"
import prettier from "eslint-config-prettier"
import tailwindcss from "eslint-plugin-tailwindcss"

const eslintConfig = [
  ...nextVitals,
  {
    ...tailwindcss.configs.recommended,
    settings: {
      tailwindcss: {
        cssConfigPath: "app/globals.css",
      },
    },
  },
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/no-unescaped-entities": "off",
    },
  },
  prettier,
  {
    ignores: ["dist/**", ".cache/**", "public/**", "*.esm.js"],
  },
]

export default eslintConfig
