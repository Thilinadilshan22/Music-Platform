/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                purple: {
                    600: '#9333ea',
                    700: '#7e22ce',
                    900: '#581c87',
                },
                pink: {
                    600: '#db2777',
                },
                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    700: '#334155',
                    900: '#0f172a',
                },
                indigo: {
                    50: '#eef2ff',
                },
                blue: {
                    50: '#eff6ff',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                '7xl': '4.5rem',
                '8xl': '6rem',
                '9xl': '8rem',
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            backdropBlur: {
                'xl': '24px',
                '2xl': '40px',
            },
        },
    },
    plugins: [],
}
