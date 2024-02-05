import { Dispatch, FC, SetStateAction } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

interface ThemeButtonProps {
	theme: 'dark' | 'light'
	setTheme: Dispatch<SetStateAction<'dark' | 'light'>>
}
const ThemeButton: FC<ThemeButtonProps> = ({ setTheme, theme }) => {
	return (
		<div
			className='bg-violet-600  text-yellow-300 dark:text-violet-600  dark:bg-yellow-300 p-1 lg:p-2 rounded-md'
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
			{theme === 'dark' ? <FaSun className='' /> : <FaMoon />}
		</div>
	)
}

export default ThemeButton
