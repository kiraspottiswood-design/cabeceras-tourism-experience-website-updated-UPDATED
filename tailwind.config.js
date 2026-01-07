module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(45, 12%, 85%)",
        input: "hsl(45, 12%, 85%)",
        ring: "hsl(35, 80%, 50%)",
        background: "hsl(45, 28%, 94%)",
        foreground: "hsl(210, 15%, 20%)",
        primary: {
          DEFAULT: "hsl(135, 28%, 35%)",
          foreground: "hsl(45, 38%, 96%)",
        },
        secondary: {
          DEFAULT: "hsl(135, 24%, 45%)",
          foreground: "hsl(48, 38%, 98%)",
        },
        tertiary: {
          DEFAULT: "hsl(20, 60%, 58%)",
          foreground: "hsl(48, 38%, 98%)",
        },
        neutral: {
          DEFAULT: "hsl(45, 28%, 94%)",
          foreground: "hsl(210, 15%, 20%)",
        },
        success: {
          DEFAULT: "hsl(135, 35%, 42%)",
          foreground: "hsl(45, 38%, 96%)",
        },
        warning: {
          DEFAULT: "hsl(28, 85%, 45%)",
          foreground: "hsl(48, 38%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(45, 20%, 92%)",
          foreground: "hsl(45, 5%, 40%)",
        },
        accent: {
          DEFAULT: "hsl(20, 60%, 58%)",
          foreground: "hsl(48, 38%, 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(45, 38%, 96%)",
        },
        card: {
          DEFAULT: "hsl(45, 33%, 96%)",
          foreground: "hsl(210, 15%, 20%)",
        },
        popover: {
          DEFAULT: "hsl(45, 33%, 96%)",
          foreground: "hsl(210, 15%, 20%)",
        },
        gray: {
          50: "hsl(45, 33%, 96%)",
          100: "hsl(45, 20%, 92%)",
          200: "hsl(45, 12%, 85%)",
          300: "hsl(45, 8%, 75%)",
          400: "hsl(45, 6%, 60%)",
          500: "hsl(45, 5%, 50%)",
          600: "hsl(45, 5%, 40%)",
          700: "hsl(45, 5%, 30%)",
          800: "hsl(45, 5%, 22%)",
          900: "hsl(45, 5%, 14%)",
        },
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        headline: ["Raleway", "sans-serif"],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.25rem',
        'xl': '1.563rem',
        '2xl': '1.953rem',
        '3xl': '2.441rem',
        '4xl': '3.052rem',
        '5xl': '3.815rem',
      },
      letterSpacing: {
        headline: '-0.025em',
      },
      lineHeight: {
        headline: '1.2',
        body: '1.5',
      },
      fontWeight: {
        headline: '500',
        body: '300',
        label: '300',
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(135, 28%, 35%) 0%, hsl(135, 24%, 45%) 100%)',
        'gradient-2': 'linear-gradient(135deg, hsl(20, 60%, 58%) 0%, hsl(35, 68%, 60%) 100%)',
        'button-border-gradient': 'linear-gradient(135deg, hsl(135, 28%, 35%), hsl(20, 60%, 58%))',
      },
    },
  },
  plugins: [],
}
