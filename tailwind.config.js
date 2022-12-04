/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        screens: {
            tablet: "640px",
            laptop: "1024px",
            desktop: "1920px",
        },
        fontSize: {
            sm: ["12px", "16px"],
            md: ["14px", "20px"],
            base: ["15px", "16px"],
            base2: ["16px", "24px"],
            base3: ["16px", "20px"],
            lg: ["20px", "16px"],
            xl: ["24px", "32px"],
        },
        fontWeight: {
            'normal': 400,
            'medium': 500,
            'semi': 600,
            'bold': 700,
        },
        fontFamily: {
            Archivo: ["Archivo", "sans-serif"],
            Roboto: ["Roboto", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                bgLogin: "url('/img/bg-login.png')",
                bgDashboard: "url('/img/icon/icon-user-dashboard.png')",
            },
            colors: {
                primary: "#1E2F65",
                secondary: "#5138ED",
                secondary2: "#20A8D8",
                secondary3: "#4D35E4",
                white: "#ffffff",
                "white-secondary": "#F4F6FD",
                "white-secondary2": "#9D9D9D",
                "white-secondary3": "#5E6368",
                "white-secondary4": "#D9D9D9",
                "white-secondary5": "#F5F5F5",
                success: "#73B106",
                warning: "#F0B900",
                info: "#0E90FF",
                danger: "#E21B1B",
                black: "#000000",
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
})
