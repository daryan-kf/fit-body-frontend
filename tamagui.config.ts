import { createTamagui } from 'tamagui';

const themes = {
  neon: {
    background: '#0D0D0D',
    color: '#FAF923',
    primary: '#FAF923',
    secondary: '#FF4B4B',
    gray: '#666666',
    grayDark: '#1C1C1C',
    error: '#FF4B4B',
    surface: '#1C1C1C',
    onSurface: '#FFFFFF',
    placeholder: '#666666'
  }
};

const config = createTamagui({
  themes,
  defaultTheme: 'neon',

  tokens: {
    color: {
      black: '#0D0D0D',
      white: '#FFFFFF',
      neon: '#FAF923',
      red: '#FF4B4B',
      gray: '#666666',
      grayDark: '#1C1C1C'
    },
    space: {
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      7: 32,
      8: 40
    },
    size: {
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      7: 32,
      8: 40
    },
    radius: {
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      round: 9999
    },
    zIndex: {
      0: 0,
      1: 10,
      2: 100,
      3: 1000
    }
  },

  fonts: {
    heading: {
      family: 'Poppins',
      size: {
        'font-sm': 16,
        'font-md': 20,
        'font-lg': 24,
        'font-xl': 30
      },
      weight: {
        regular: '400',
        bold: '700'
      },
      lineHeight: {
        tight: 20,
        normal: 24,
        loose: 28
      }
    },
    body: {
      family: 'Poppins',
      size: {
        'font-sm': 14,
        'font-md': 16,
        'font-lg': 18
      },
      weight: {
        regular: '400',
        bold: '700'
      },
      lineHeight: {
        normal: 20,
        relaxed: 24
      }
    }
  },

  shorthands: {
    jc: 'justifyContent',
    ai: 'alignItems',
    fd: 'flexDirection',
    f: 'flex'
  }
});

export type AppConfig = typeof config;
export default config;
