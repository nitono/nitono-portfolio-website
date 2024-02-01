'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Header from './components/Header'

import { atom } from 'jotai'
import Home from './screens/Home'

const About = dynamic(() => import('./screens/About'))
const Projects = dynamic(() => import('./screens/Projects'))
const TechStack = dynamic(() => import('./screens/Tech-Stack'))
const Contacts = dynamic(() => import('./screens/Contacts'))
export const themeAtom = atom('dark')
export default function App() {
	const [theme, setTheme] = useState<'dark' | 'light'>('dark')
	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark')
			setTheme('dark')
		} else {
			document.documentElement.classList.remove('dark')
			setTheme('light')
		}
	}, [setTheme])

	return (
		<main className='main-content flex justify-between items-center flex-col transition-all bg-zinc-200 text-zinc-900 font-normal dark:bg-zinc-950 dark:text-zinc-300'>
			<Header />
			<Home theme={theme} />
			<About />
			<TechStack />
			<Projects />
			<Contacts />
		</main>
	)
}
