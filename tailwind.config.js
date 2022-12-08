/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'nerko-one': "'Nerko One', cursive"
        },
        extend: {
            boxShadow: {
                'top-only': '0px -25px 25px -25px rgba(77,77,77,0.5)',
                'circle': '0px 0px 5px 2px rgba(0,0,0,0.2)'
            }
        },
    },
    plugins: [],
}
