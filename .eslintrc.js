module.exports = {
  root: true,
  //   extends: ["@react-native-community", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "@react-native-community",
        "prettier",
      ],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/no-unsafe-assignment": "off",
        "no-shadow": "off",
        "no-undef": "off",
      },
      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
  rules: {
    semi: ["error", "never"],
    "no-console": "off", // Means warning
    "prettier/prettier": 2, // Means error
  },
}
