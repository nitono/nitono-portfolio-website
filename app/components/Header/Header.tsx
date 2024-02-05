'use client'

import { Dispatch, FC, SetStateAction } from 'react'
import { ThemeButton } from '../ThemeButton'
import { LINKS, LinksItem } from './header.data'

interface HeaderProps {
	theme: 'dark' | 'light'
	setTheme: Dispatch<SetStateAction<'dark' | 'light'>>
}

const Item = ({ index, link, title }: LinksItem) => {
	return (
		<>
			<li className='nav-item items-center justify-center flex gap-2 lg:gap-2'>
				<h4 className='nav-item-title text-[11px] lg:text-base'>
					<a
						href={link}
						className='nav-item-link before:text-sm after:text-sm hover:text-violet-400'
					>
						{title}
					</a>
				</h4>
			</li>
		</>
	)
}

const Header: FC<HeaderProps> = ({ setTheme, theme }) => {
	return (
		<nav className='navigation z-50 fixed lg:fixed flex justify-center items-center lg:justify-between backdrop-blur-xl lg:items-center w-full h-10 lg:h-[40px] bg-neutral-300/10 dark:bg-neutral-950/30 lg:p-2 text-neutral-950 gap-4 lg:gap-4  dark:text-neutral-300 transition'>
			<header className='title-box flex justify-around gap-4 items-center'>
				<h1 className={`title-text text-base lg:text-3xl font-bold italic`}>
					nitono
				</h1>
			</header>
			<ul className='nav-list flex lg:flex justify-between items-center gap-1 lg:gap-2'>
				{LINKS.map(e => (
					<Item index={e.index} key={e.index} title={e.title} link={e.link} />
				))}
			</ul>
			<ThemeButton setTheme={setTheme} theme={theme} />
		</nav>
	)
}

export default Header
