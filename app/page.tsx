'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { DrawerMenu } from './components/Drawer'
import Header from './components/Header'
import { AppContext } from './context'
import { useUserTheme } from './libs/hooks/useUserTheme'
import { useWindowResize } from './libs/hooks/useWindowResize'
import Home from './screens/Home'

const About = dynamic(() => import('./screens/About'))
const Projects = dynamic(() => import('./screens/Projects'))
const TechStack = dynamic(() => import('./screens/Tech-Stack'))
const Contacts = dynamic(() => import('./screens/Contacts'))

export default function App() {
	const [theme, setTheme] = useState<'dark' | 'light'>('dark')
	const [screen, setScreen] = useState<'lg' | 'sm' | 'md'>('lg')
	const screenSize = useWindowResize()
	const userTheme = useUserTheme()
	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => {
		setScreen(screenSize)
		setTheme(userTheme)
	}, [setTheme, setScreen, screenSize, userTheme])

	return (
		<AppContext.Provider
			value={{
				theme,
				screen,
				setTheme,
				isOpen,
				setIsOpen,
			}}
		>
			<main className='overflow-hidden main-content flex justify-center items-center  transition-all bg-graph dark:text-Neutral-Neutral(100) font-normal bg-Neutral-Neutral(100) dark:bg-Neutral-Neutral(800) text-Neutral-Neutral(800)'>
				<div className='w-[90%] flex justify-between items-center flex-col'>
					<Header />
					{/* {screen === 'sm' && <Drawer />}
					{screen === 'md' && <Drawer />} */}
					<DrawerMenu />
					<Home />
					<About />
					<TechStack />
					<Projects />
					<Contacts />
				</div>
			</main>
		</AppContext.Provider>
	)
}
