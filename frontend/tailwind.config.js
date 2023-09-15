/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#495057",
				secondary: "#e0e7f1",
				accent: "#d1dbe5",
				darken: "#333",
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
