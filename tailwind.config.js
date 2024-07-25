/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**.html"],
	theme: {
		extend: {
			colors: {
				custom_light_green: "#ecf7de",
				custom_green: "#7aa148",
				custom_green_grey: "#b3b9ab",
				custom_red: "#ec4642",
				custom_black: "rgba(0, 0, 0, 0.7)",
				custom_grey: "#d9d9d9",
			},
		},
	},
	plugins: [],
};
