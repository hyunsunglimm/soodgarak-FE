import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'gray-sm': '#F1F1F1'
      },
      fontSize: {
        10: '1rem',
        12: '1.2rem',
        14: '1.4rem',
        16: '1.6rem',
        18: '1.8rem',
        20: '2rem',
        24: '2.4rem',
        28: '2.8rem',
        32: '3.2rem',
        36: '3.6rem',
        40: '4rem',
        48: '4.8rem'
      },
      borderRadius: {
        none: '0',
        8: '0.8rem',
        12: '1.2rem',
        16: '1.6rem',
        20: '2rem',
        24: '2.4rem',
        28: '2.8rem'
      },
      gap: {
        2: '0.2rem',
        4: '0.4rem',
        6: '0.6rem',
        8: '0.8rem',
        10: '1rem',
        12: '1.2rem',
        14: '1.4rem',
        16: '1.6rem',
        18: '1.8rem',
        20: '2rem',
        22: '2.2rem',
        24: '2.4rem'
      },
      padding: {
        2: '0.2rem',
        4: '0.4rem',
        6: '0.6rem',
        8: '0.8rem',
        10: '1rem',
        12: '1.2rem',
        16: '1.6rem',
        20: '2rem',
        24: '2.4rem',
        28: '2.8rem',
        32: '3.2rem',
        36: '3.6rem',
        40: '4rem',
        44: '4.4rem',
        48: '4.8rem'
      },
      margin: {
        2: '0.2rem',
        4: '0.4rem',
        6: '0.6rem',
        8: '0.8rem',
        10: '1rem',
        12: '1.2rem',
        16: '1.6rem',
        20: '2rem',
        24: '2.4rem',
        28: '2.8rem',
        32: '3.2rem',
        36: '3.6rem',
        40: '4rem',
        44: '4.4rem',
        48: '4.8rem'
      }
    }
  },
  plugins: []
};
export default config;
