/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animatecss";
export const content = ["./src/**/*.{ts,tsx}"];
export const theme = {
	extend: {
		backgroundImage: {
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			"gradient-conic":
				"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		},
	},
	compilerOptions: {
		composite: true,
		skipLibCheck: true,
		module: "ESNext",
		moduleResolution: "bundler",
		allowSyntheticDefaultImports: true,
		strict: true,
	},
	include: ["vite.config.ts"],
};
export const plugins = [tailwindcssAnimate];
