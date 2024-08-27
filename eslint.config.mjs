import stylistic from "@stylistic/eslint-plugin";
import parser from '@typescript-eslint/parser';
import tsESLintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // js.configs.recommended,
  {
    files: ["src/**/*.ts"],
    languageOptions: { parser },
    plugins: {
      "@stylistic": stylistic,              // Style related rules
      "@typescript-eslint": tsESLintPlugin  // Code quality related rules. (e.g. unused-vars)
    },
    rules: {
      "semi": ["error", "always"],
      "eol-last": ["error", "always"],
      "no-unused-vars": "off", // This won't work with constructor parameter properties. Let it be disabled and use "@typescript-eslint/no-unused-vars" instead. What a pain.
      "@stylistic/indent": ["error", 2],
      "@typescript-eslint/no-unused-vars": ["error"],
    }
  }
];
