/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  endOfLine: "lf",
  semi: true,
  trailingComma: "es5",
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
