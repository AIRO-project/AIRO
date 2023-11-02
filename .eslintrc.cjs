module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", "node_modules", ".eslintrc.cjs", "vite-env.d.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "import/order": [
          "error",
          {
            groups: [
              ["builtin", "external"],
              "internal",
              ["parent", "sibling", "index"],
            ],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
            },
          },
        ],
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/no-unused-vars": [
          "error",
          { varsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/no-floating-promises": "off",
      },
    },
  ],
};
