/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#6C63FF", // Primary Purple
				secondary: "#4B3F72", // Secondary Purple
				accent: "#1BB1B7", // Accent Teal
				darken: "#333333", // Neutral Dark
				light: "#F6F6F6", // Neutral Light
				highlight: "#FFB6C1", // Highlight Color
			},
			fontFamily: {
				sans: [
					"Montserrat",
					"ui-sans-serif",
					"system-ui",
				],
				serif: [
					"Cormorant Garamond",
					"ui-serif",
					"Georgia",
				],
			},
		},
	},
	plugins: [],
};
