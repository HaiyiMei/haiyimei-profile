export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: ['"Alata"', 'sans-serif'],
        serif: ['"Lora"', 'serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: '#18191A', // Global bg
  			foreground: '#E4E6EB', // Global text
  			primary: {
  				DEFAULT: '#8ABECC', // Primary accent
  				foreground: '#18191A'
  			},
  			secondary: {
  				DEFAULT: '#0D6EFD',
  				foreground: '#FFFFFF'
  			},
        muted: {
          DEFAULT: '#242526', // Lighter bg for cards/sections
          foreground: '#B0B3B8' // Secondary text
        },
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			accent: {
  				DEFAULT: '#8ABECC',
  				foreground: '#18191A'
  			},
  			popover: {
  				DEFAULT: '#242526',
  				foreground: '#E4E6EB'
  			},
  			card: {
  				DEFAULT: 'rgba(255, 255, 255, 0.05)',
  				foreground: '#E4E6EB'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      container: {
        center: true,
        padding: '2rem',
        screens: {
          "2xl": "1320px",
        },
      },
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
