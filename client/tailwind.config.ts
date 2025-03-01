import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#4AC63F",
        "primary-2": "#F6C92D",
        "primary-3": "#3FD7FE9",
        "primary-4": "#62B3FD",
        "secondary-1": "#CDEDFF",
        "secondary-2": "#FFEBDF",
        "secondary-3": "#FFD5FB",
        "secondary-4": "#D6F4BF",
        "neutral-1": "#141416",
        "neutral-2": "#23262F",
        "neutral-3": "#353945",
        "neutral-4": "#777E90",
        "neutral-5": "#B1B5C3",
        "neutral-6": "#E6E8EC",
        "neutral-7": "#F4F5F6",
        "neutral-8": "#FCFCFD",
      },
    },
  },
  plugins: [],
} satisfies Config;
