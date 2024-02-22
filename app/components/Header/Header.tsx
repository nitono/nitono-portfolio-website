'use client'

import { dm_mono, majormono } from '@/app/fonts'
import DrawerOpener from '../Drawer/DrawerOpener'
import { ThemeButton } from '../ThemeButton'
import { LINKS, LinksItem } from './header.data'

export const Item = ({ link, title }: LinksItem) => {
	return (
		<>
			<li className='nav-item items-center justify-center flex gap-2 lg:gap-2'>
				<h4 className='nav-item-title text-sm'>
					<a
						href={link}
						className={`nav-item-link ${dm_mono.className} before:text-sm after:text-sm hover:text-Primary-Primary(100) transition`}
					>
						{title !== LINKS[0].title ? (
							title
						) : (
							<span
								className='dark:hover:fill-current dark:fill-Neutral-Neutral(100) fill-Neutral-Neutral(100) dark:hover:text-Primary-Primary(100) hover:fill-current hover:text-Primary-Primary(100) w-[18px] transition-all'
								dangerouslySetInnerHTML={{ __html: title }}
							/>
						)}
					</a>
				</h4>
			</li>
			<span className='w-[2px] p-1' />
		</>
	)
}

const Header = () => {
	return (
		<nav className='navigation z-50 top-3 fixed flex justify-center items-center lg:justify-between lg:items-center w-[91%] h-10 lg:h-[50px] bg-Neutral-Neutral(700)/60 lg:p-2 rounded-xl text-Neutral-100 gap-4 lg:gap-4 transition-all text-Neutral-Neutral(100)'>
			<header className='title-box flex justify-around gap-4 items-center'>
				<h1 className={`title-text text-xl ${majormono.className} lg:text-xl `}>
					Nitono
				</h1>
			</header>
			<ul className='nav-list  flex-row lg:flex md:flex hidden justify-around items-center gap-1'>
				{LINKS.map(e => (
					<>
						<li className='nav-item items-center justify-center flex gap-2 lg:gap-2'>
							<h4 className='nav-item-title text-sm'>
								<a
									href={e.link}
									className={`nav-item-link ${dm_mono.className} before:text-sm after:text-sm hover:text-Primary-Primary(100) transition`}
								>
									{e.title !== LINKS[0].title ? (
										e.title
									) : (
										<span
											className='dark:hover:fill-current dark:fill-Neutral-Neutral(100) fill-Neutral-Neutral(100) dark:hover:text-Primary-Primary(100) hover:fill-current hover:text-Primary-Primary(100) w-[18px] transition-all'
											dangerouslySetInnerHTML={{ __html: e.title }}
										/>
									)}
								</a>
							</h4>
						</li>
						<span className='w-[2px] p-1' />
					</>
				))}
			</ul>
			<div className='hidden lg:flex'>
				<ThemeButton />
			</div>
			<DrawerOpener />
		</nav>
	)
}

export default Header
