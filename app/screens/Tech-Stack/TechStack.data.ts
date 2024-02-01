import { IconType } from 'react-icons'
import {
	SiAstro,
	SiChakraui,
	SiCss3,
	SiExpress,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiPython,
	SiReact,
	SiSass,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si'

export interface ItemI {
	name: string
	color: string
	url: string
	style?: string
	icon: IconType
}
export interface TECHSItem extends ItemI {}
export interface LIBSItem extends ItemI {}

export const TECHS: TECHSItem[] = [
	{
		name: 'React',
		url: 'https://react.dev/',
		icon: SiReact,
		color: '#93c5fd',
	},
	{
		name: 'TS',
		color: '#3b82f6',
		url: 'https://www.typescriptlang.org/',
		icon: SiTypescript,
	},
	{
		name: 'JS',
		color: '#fcd34d',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		icon: SiJavascript,
	},
	{
		name: 'HTML',
		color: '#f97316',
		icon: SiHtml5,
		url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
	},
	{
		name: 'CSS',
		color: '#1d4ed8',
		icon: SiCss3,
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
	},
	{
		name: 'Python',
		color: '#facc15',
		icon: SiPython,
		url: 'https://www.python.org/',
	},
]

export const LIBS: LIBSItem[] = [
	{
		name: 'Tailwind CSS',
		color: '#3b82f6',
		icon: SiTailwindcss,
		url: 'https://tailwindcss.com/',
	},
	{
		name: 'Next.js',
		color: '#000010',
		icon: SiNextdotjs,
		url: 'https://nextjs.org/',
	},

	{
		name: 'Express.js',
		color: '#333333',
		url: 'https://expressjs.com/',
		icon: SiExpress,
	},

	{
		name: 'Chakra UI',
		color: '#34d399',
		url: 'https://chakra-ui.com/',
		icon: SiChakraui,
	},
	{
		name: 'Astro.js',
		color: '#fb923c',
		url: 'https://astro.build/',
		icon: SiAstro,
	},

	{
		name: 'Sass & Scss',
		color: '#fb7185',
		url: 'https://sass-lang.com/',
		icon: SiSass,
	},
]
