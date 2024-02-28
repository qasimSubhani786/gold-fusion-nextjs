/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'login-background': "url('/assets/login-background.png')",
        'login-logo': "url('/assets/login-logo.png')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background": "#F9F9F9",
        "theme": "#D8B14C",
        "pending": "#F39C12",
        "pendingBackground": "rgba(243, 156, 18, 0.1)",
        "processing": "#00C0EF",
        "processingBackground": "rgba(0, 191, 239, 0.1)",
        "complete": "#00A65A",
        "completeBackground": "rgba(0, 166, 91,0.1)"
      },
      borderColor: {

      },
      flex: {
        '2': '2 2 0%'
      },
      height: {
        '128': '40rem',
      }
    },
  },
  plugins: [],
};
