export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      animation: {
         blink: "blink 1s infinite",

        'blur-fade': 'blurFadeIn 1s ease-out forwards',
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        blurFadeIn: {
          '0%': { opacity: '0', filter: 'blur(8px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
      },
      fontFamily: {
        'cal-sans': ['"Cal Sans"', 'sans-serif'],
        // 'sh-ad-grotesk': ['"Sh Ad Grotesk"', 'sans-serif'],
        // sfpro: ['"SF Pro Display"', 'sans-serif'],
        // awesome: ['"Awesome Serif"', 'serif'],
        // sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      
      },
    },
  },
  plugins: [],
}

