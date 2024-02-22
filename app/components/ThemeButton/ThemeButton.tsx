import { AppContext } from '@/app/context'
import { useContext } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5'

const ThemeButton = () => {
	const { setTheme, theme } = useContext(AppContext)

	return (
		<div
			className='p-1 w-[25px] flex justify-center items-center h-[25px] rounded-md'
			onClick={() => {
				if (theme === 'dark') {
					setTheme('light')
					document.documentElement.classList.remove('dark')
				} else {
					setTheme('dark')
					document.documentElement.classList.add('dark')
				}
			}}
		>
			{theme === 'dark' ? (
				<IoSunny className='text-Primary-Primary(100) w-[22px] h-[22px]' />
			) : (
				<IoMoon className='text-Secondary-Secondary(100) w-[22px] h-[22px]' />
			)}
		</div>
	)
}

export default ThemeButton
