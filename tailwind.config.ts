import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      // Light mode Digitec
      "light-digitec-blue": "var(--light-digitec-blue)",
      "light-digitec-red": "var(--light-digitec-red)",
      "light-digitec-04-blue": "var(--light-digitec-04-blue)",
      "light-digitec-08-blue": "var(--light-digitec-08-blue)",
      "light-digitec-16-blue": "var(--light-digitec-16-blue)",
      "light-digitec-20-blue": "var(--light-digitec-20-blue)",
      "light-digitec-success": "var(--light-digitec-success)",
      "light-digitec-error": "var(--light-digitec-error)",
      "light-digitec-warning": "var(--light-digitec-warning)",
      "light-digitec-success-text": "var(--light-digitec-success-text)",
      "light-digitec-body-copy-primary": "var(--light-digitec-body-copy-primary)",
      "light-digitec-body-copy-secondary": "var(--light-digitec-body-copy-secondary)",
      "light-digitec-body-copy-tertiary": "var(--light-digitec-body-copy-tertiary)",
      "light-digitec-page-background": "var(--light-digitec-page-background)",

      // Light mode Galaxus
      "light-galaxus-blue": "var(--light-galaxus-blue)",
      "light-galaxus-blue-small-elements": "var(--light-galaxus-blue-small-elements)",
      "light-galaxus-blue-text": "var(--light-galaxus-blue-text)",
      "light-galaxus-blue-link-hover": "var(--light-galaxus-blue-link-hover)",
      "light-galaxus-brown": "var(--light-galaxus-brown)",
      "light-galaxus-brown-small-elements": "var(--light-galaxus-brown-small-elements)",
      "light-galaxus-brown-text": "var(--light-galaxus-brown-text)",
      "light-galaxus-green": "var(--light-galaxus-green)",
      "light-galaxus-green-small-elements": "var(--light-galaxus-green-small-elements)",
      "light-galaxus-green-text": "var(--light-galaxus-green-text)",
      "light-galaxus-purple": "var(--light-galaxus-purple)",
      "light-galaxus-purple-small-elements": "var(--light-galaxus-purple-small-elements)",
      "light-galaxus-purple-text": "var(--light-galaxus-purple-text)",
      "light-galaxus-red": "var(--light-galaxus-red)",
      "light-galaxus-red-small-elements": "var(--light-galaxus-red-small-elements)",
      "light-galaxus-red-text": "var(--light-galaxus-red-text)",
      "light-galaxus-yellow": "var(--light-galaxus-yellow)",
      "light-galaxus-yellow-small-elements": "var(--light-galaxus-yellow-small-elements)",
      "light-galaxus-yellow-text": "var(--light-galaxus-yellow-text)",
      "light-galaxus-body-copy-primary": "var(--light-galaxus-body-copy-primary)",
      "light-galaxus-body-copy-secondary": "var(--light-galaxus-body-copy-secondary)",
      "light-galaxus-body-copy-tertiary": "var(--light-galaxus-body-copy-tertiary)",
      "light-galaxus-page-background": "var(--light-galaxus-page-background)",

      // Light grays
      "light-grays-000000": "var(--light-grays-000000)",
      "light-grays-333333": "var(--light-grays-333333)",
      "light-grays-444444": "var(--light-grays-444444)",
      "light-grays-565656": "var(--light-grays-565656)",
      "light-grays-666666": "var(--light-grays-666666)",
      "light-grays-999999": "var(--light-grays-999999)",
      "light-grays-B3B3B3": "var(--light-grays-B3B3B3)",
      "light-grays-DDDDDD": "var(--light-grays-DDDDDD)",
      "light-grays-EEEEEE": "var(--light-grays-EEEEEE)",
      "light-grays-F5F5F5": "var(--light-grays-F5F5F5)",
      "light-grays-FBFBFB": "var(--light-grays-FBFBFB)",
      "light-grays-FDFDFD": "var(--light-grays-FDFDFD)",
      "light-grays-FFFFFF": "var(--light-grays-FFFFFF)",

      // Light transparencies
      "light-transp-black-02": "var(--light-transp-black-02)",
      "light-transp-black-03": "var(--light-transp-black-03)",
      "light-transp-black-05": "var(--light-transp-black-05)",
      "light-transp-black-10": "var(--light-transp-black-10)",
      "light-transp-black-20": "var(--light-transp-black-20)",
      "light-transp-black-26": "var(--light-transp-black-26)",
      "light-transp-black-30": "var(--light-transp-black-30)",
      "light-transp-black-40": "var(--light-transp-black-40)",
      "light-transp-black-50": "var(--light-transp-black-50)",
      "light-transp-black-54": "var(--light-transp-black-54)",
      "light-transp-black-60": "var(--light-transp-black-60)",
      "light-transp-black-70": "var(--light-transp-black-70)",
      "light-transp-black-80": "var(--light-transp-black-80)",
      "light-transp-black-87": "var(--light-transp-black-87)",
      "light-transp-black-90": "var(--light-transp-black-90)",
      "light-transp-white-10": "var(--light-transp-white-10)",
      "light-transp-white-30": "var(--light-transp-white-30)",
      "light-transp-white-70": "var(--light-transp-white-70)",

      // Gradients
      "header-gradient": "var(--header-gradient)",
    },
  },
  plugins: [],
};
export default config;
