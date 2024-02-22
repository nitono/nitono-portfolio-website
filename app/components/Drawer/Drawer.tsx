import { AppContext } from '@/app/context'
import { dm_mono } from '@/app/fonts'
import { cn } from '@/app/libs/utils'
import { FC, useContext, useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { v4 } from 'uuid'
import { LINKS } from '../Header/header.data'
import { ThemeButton } from '../ThemeButton'
interface DrawerMenuProps {
	className?: string
}

const DrawerMenu: FC<DrawerMenuProps> = ({ className }) => {
	const { isOpen, setIsOpen } = useContext(AppContext)
	const [scrolled, setScrolled] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(Number(window.scrollY.toFixed(0)))
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div
			className={cn(
				`drawer absolute z-50 w-full min-w-lg bg-Neutral-Neutral(100)/30 backdrop-blur-md dark:bg-Neutral-Neutral(800)/30 lg:hidden md:absolute left-0 h-[100vh] delay-400 duration-500 ease-in-out transition-all transform flex justify-between items-center flex-col p-0 gap-2`,
				!isOpen ? '-translate-x-full' : 'translate-x-0',
				className
			)}
			style={{ top: scrolled }}
		>
			<ul className='nav-list h-[50%] flex-col flex justify-around items-center gap-1'>
				{LINKS.map(e => (
					<li
						key={v4()}
						className='nav-item items-center justify-center flex gap-2 lg:gap-2'
					>
						<h4 className='nav-item-title text-sm'>
							<a
								href={e.link}
								onClick={() => setIsOpen(prev => !prev)}
								className={`nav-item-link ${dm_mono.className} before:text-sm after:text-sm hover:text-Primary-Primary(100) transition`}
							>
								{e.title !== LINKS[0].title ? (
									e.title
								) : (
									<span
										className='dark:hover:fill-current dark:fill-Neutral-Neutral(100) fill-Neutral-Neutral(800) dark:hover:text-Primary-Primary(100) hover:fill-current hover:text-Primary-Primary(100) w-[18px] transition-all'
										dangerouslySetInnerHTML={{ __html: e.title }}
									/>
								)}
							</a>
						</h4>
					</li>
				))}
			</ul>
			<ThemeButton />
			<RxCross1
				onClick={() => {
					setIsOpen(prev => !prev)
				}}
			/>
		</div>
	)
}

export { DrawerMenu }

