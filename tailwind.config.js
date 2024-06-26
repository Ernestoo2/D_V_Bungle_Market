/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-00": "var(--gray-00)",
        "gray-100": "var(--gray-100)",
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-50": "var(--gray-50)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        "gray-800": "var(--gray-800)",
        "gray-900": "var(--gray-900)",
        "primary-500": "var(--primary-500)",
        "warning-400": "var(--warning-400)",
        "primary-green": "#00A218",
      },
      fontFamily: {
        "body-large-400": "var(--body-large-400-font-family)",
        "body-large-500": "var(--body-large-500-font-family)",
        "body-medium-400": "var(--body-medium-400-font-family)",
        "body-medium-500": "var(--body-medium-500-font-family)",
        "body-medium-600": "var(--body-medium-600-font-family)",
        "body-small-400": "var(--body-small-400-font-family)",
        "body-small-500": "var(--body-small-500-font-family)",
        "body-small-600": "var(--body-small-600-font-family)",
        "body-tiny-600": "var(--body-tiny-600-font-family)",
        "body-XL-400": "var(--body-XL-400-font-family)",
        "body-XL-600": "var(--body-XL-600-font-family)",
        "display-04": "var(--display-04-font-family)",
        "heading-03": "var(--heading-03-font-family)",
        "heading-06": "var(--heading-06-font-family)",
        "heading-07": "var(--heading-07-font-family)",
        "label-02": "var(--label-02-font-family)",
        "label-03": "var(--label-03-font-family)",
      },
      boxShadow: {
        "dropdown-shadow": "var(--dropdown-shadow)",
      },
    },
  },
  plugins: [],
};
