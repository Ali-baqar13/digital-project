import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        InterRegular:['var(--font-inter-regular)'],
        InterMedium:['var(--font-inter-medium)'],
        InterSemiBold:['var(--font-inter-semibold)']

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary:{
          1:"var(--color-primary-1)",
          2:"var(--color-primary-2)",
          3:'var(--color-primary-3)'
        },

        secondary:{
          1:'var(--color-secondary-1)',
          2:'var(--color-secondary-2)'
        }
      },
      screens:{
        'sm':{'min':'640px'},
        'md': {'min':'768px'},
        'lg':{'min':'1023px'},
        'xl':{'min':'1240px'}
      }
    },
  },
  plugins: [],
};
export default config;
