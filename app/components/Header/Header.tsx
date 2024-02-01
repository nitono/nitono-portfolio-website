'use client'

import { LINKS, LinksItem } from './header.data'

const Item = ({ index, link, title }: LinksItem) => {
	return (
		<>
			<li className='nav-item items-center justify-between flex gap-2'>
				<b className='nav-item-index text-sm font-normal text-zinc-400'>
					00{index}
				</b>
				<h4 className='nav-item-title '>
					<a href={link} className='nav-item-link hover:text-violet-400'>
						{title}
					</a>
				</h4>
			</li>
		</>
	)
}

const Header = () => {
	return (
		<nav className='navigation z-50 fixed lg:fixed flex justify-center items-center lg:justify-between  lg:items-center w-full h-10 lg:h-[70px] bg-zinc-900 p-2  text-zinc-300 transition'>
			<header className='title-box flex justify-around gap-2 items-center'>
				<h1 className='title-text text-base lg:text-2xl font-bold italic'>
					nitono&apos;s portfolio website
				</h1>
			</header>
			<ul className='nav-list hidden lg:flex justify-between items-center gap-5'>
				{LINKS.map(e => (
					<Item index={e.index} key={e.index} title={e.title} link={e.link} />
				))}
			</ul>
		</nav>
	)
}

export default Header
