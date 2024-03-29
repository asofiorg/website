module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  plugins: [require("@tailwindcss/typography")()],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
      mono: ["IBM Plex Mono", "monospace"]
    },
    extend: {
      colors: {
        cerise: {
          50: "#fdfcfa",
          100: "#fbf0ea",
          200: "#f7d0d4",
          300: "#eda4ac",
          400: "#e97381",
          500: "#db505e",
          600: "#c43641",
          700: "#9c2830",
          800: "#701c20",
          900: "#451212"
        },
        cocoa: {
          50: "#fcfbf8",
          100: "#faf0dc",
          200: "#f5d6b7",
          300: "#e8ad85",
          400: "#dc7e56",
          500: "#c75c35",
          600: "#ab4223",
          700: "#84311c",
          800: "#5c2214",
          900: "#39150d"
        },
        gold: {
          50: "#fbfaf6",
          100: "#f9f0cc",
          200: "#f2db99",
          300: "#dfb565",
          400: "#c7893a",
          500: "#ab681f",
          600: "#8d4e14",
          700: "#6b3b11",
          800: "#49280e",
          900: "#2f180a"
        },
        lemon: {
          50: "#faf9f3",
          100: "#f7f0c0",
          200: "#eddf84",
          300: "#d2bc51",
          400: "#a9942b",
          500: "#877515",
          600: "#6c5c0e",
          700: "#52450d",
          800: "#382f0b",
          900: "#251d09"
        },
        green: {
          50: "#f2f6f4",
          100: "#def0eb",
          200: "#b3e6d2",
          300: "#79caa6",
          400: "#36aa76",
          500: "#268e4d",
          600: "#207738",
          700: "#1d5b2e",
          800: "#153e23",
          900: "#0f261b"
        },
        teal: {
          50: "#f1f7f7",
          100: "#d5f0f7",
          200: "#a5e4ed",
          300: "#6ec8d5",
          400: "#34a7b6",
          500: "#258896",
          600: "#20707b",
          700: "#1d5560",
          800: "#153945",
          900: "#0e2330"
        },
        navy: {
          50: "#f5f9fa",
          100: "#def1fc",
          200: "#b8def8",
          300: "#89bded",
          400: "#5998df",
          500: "#4475d1",
          600: "#3859be",
          700: "#2d439b",
          800: "#202d70",
          900: "#121c47"
        },
        blue: {
          50: "#f6f9fb",
          100: "#e3f0fd",
          200: "#c4dafa",
          300: "#9bb6f3",
          400: "#768fea",
          500: "#5f6ae3",
          600: "#4e4dd5",
          700: "#3c3ab5",
          800: "#292787",
          900: "#171955"
        },
        indigo: {
          50: "#f7fafb",
          100: "#e7f0fc",
          200: "#cdd7fa",
          300: "#a8b3f2",
          400: "#898ae9",
          500: "#7165e2",
          600: "#5d49d4",
          700: "#4637b4",
          800: "#312585",
          900: "#1b1853"
        }
      }
    }
  },
  corePlugins: {
    preflight: false
  }
};
