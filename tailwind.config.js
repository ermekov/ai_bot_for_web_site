/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: '#070A13',
        ink: '#0B1020',
        glass: 'rgba(255, 255, 255, 0.08)',
        line: 'rgba(255, 255, 255, 0.12)',
        cyanGlow: '#22D3EE',
        violetGlow: '#8B5CF6',
        mintGlow: '#34D399',
      },
      boxShadow: {
        glow: '0 0 70px rgba(34, 211, 238, 0.18)',
        violet: '0 0 80px rgba(139, 92, 246, 0.18)',
        soft: '0 18px 60px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'premium-radial':
          'radial-gradient(circle at 20% 10%, rgba(34, 211, 238, 0.22), transparent 30%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.22), transparent 28%), radial-gradient(circle at 50% 90%, rgba(52, 211, 153, 0.12), transparent 35%)',
      },
    },
  },
  plugins: [],
};
