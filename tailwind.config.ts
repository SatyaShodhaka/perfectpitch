import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
	],
	theme: {
		extend: {
			minHeight: {
				custom: "calc(100vh - 4rem)",
			},
			colors: {
				main: "#1c1c1c",
				border: "#2e2e2e",
				mainText: "#c6c6c6",
				secondaryText: "#6495ed",
				mainButton: "#6495ed",
				mainButtonBorder: "#85a9f9",
				mainButtonHover: "#5277c7",
				grayButton: "#2e2e2e",
				grayButtonHover: "#3D3D3D",
				grayButtonOutline: "#3e3e3e",
				hoverBG: "#282828",
				inputBG: "#212121",
				panelBG: "#232323",
				inputBorder: "#343434",
				inputHover: "#424242",
				cardColor: "#232323",
				darkerbg: "#17161F",
				chatBG: "#232323",
				borderColor: "#2d2c3c",
				hoverColor: "#272636",
				darkBackground :"#6495ed",
			},
		},
	},
	plugins: [],
};
export default config;
