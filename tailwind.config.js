/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        ink: '#f5f5f7',      // primary text
        muted: '#86868b',    // secondary text (Apple gray)
        // Intentional palette — each hue carries meaning across the site.
        accent: '#2997ff',   // blue   · interactive / primary
        violet: '#8b5cf6',   // violet · systems / brand
        cyan: '#22d3ee',     // cyan   · data / infra
        mint: '#34d399',     // green  · safe / money
        solar: '#ffb020',    // amber  · energy / Wiibi
        coral: '#ff6b8b',    // pink   · human / comms
        teal: '#2dd4bf',     // teal   · operations
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};
