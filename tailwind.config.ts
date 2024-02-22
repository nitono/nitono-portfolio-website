import type { Config } from 'tailwindcss'
import theme from './theme'
const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	variants: {
		fill: ['hover', 'focus'],
	},
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fill: theme.colors,
			backgroundColor: theme.colors,
			fontFamily: {
				code: 'Code',
				...theme.fontFamily,
			},
			textDecorationColor: theme.colors,
			textColor: theme.colors,
			borderRadius: theme.borderRadius,
			fontSize: theme.fontSize,
		},
	},
	plugins: [],
}
export default config
