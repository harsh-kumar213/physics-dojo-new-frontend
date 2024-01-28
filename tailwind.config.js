import { RecursiveKeyValuePair } from "tailwindcss/types/config";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--accent), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--accent), var(${opacityVariable}, 1))`;
          }
          return "rgba(var(--accent), 1)";
        },

        primary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary), var(${opacityVariable}, 1))`;
          }
          return "rgba(var(--primary), 1)";
        },
        secondary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--secondary), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--secondary), var(${opacityVariable}, 1))`;
          }
          return "rgba(var(--secondary), 1)";
        },
        tertiary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--tertiary), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--tertiary), var(${opacityVariable}, 1))`;
          }
          return "rgba(var(--tertiary), 1)";
        },
        textColor: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--text-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--text-color), var(${opacityVariable}, 1))`;
          }
          return "rgba(var(--text-color), 1)";
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
