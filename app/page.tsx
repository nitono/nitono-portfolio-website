'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Header from './components/Header'

import Home from './screens/Home'

const About = dynamic(() => import('./screens/About'))
const Projects = dynamic(() => import('./screens/Projects'))
const TechStack = dynamic(() => import('./screens/Tech-Stack'))
const Contacts = dynamic(() => import('./screens/Contacts'))

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
		<main className='main-content  flex justify-between items-center flex-col transition-all bg-neutral-200 text-neutral-900 font-normal dark:bg-neutral-950 dark:text-neutral-300'>
			<Header theme={theme} setTheme={setTheme} />
			<Home theme={theme} />
			<About />
			<TechStack />
			<Projects />
			<Contacts />
		</main>
	)
}
