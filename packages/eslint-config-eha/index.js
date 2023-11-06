module.exports = {
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx"],
      env: {"jest/globals": true},
      extends: ["plugin:jest/recommended"],
      plugins: ["jest"],
    },
    {
      files: ["*.js"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "simple-import-sort"],
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["off", {argsIgnorePattern: "^_"}],
    "max-len": ["error, {code: 100}"],
    semi: ["error", "always"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
