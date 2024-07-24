/** @type {import('tailwindcss').Config} */
export default {
	/* add content to everything */
	content: [
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./components/**/*.vue',
		'./sections/**/*.vue',
	],
	theme: {
		extend: {
			colors: {
				primary: '#be92b7',
				secondary: '#10172a',
			},
		},
	},
	plugins: [],
};
