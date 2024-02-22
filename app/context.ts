import { Dispatch, SetStateAction, createContext } from 'react'
interface Context {
	screen: 'lg' | 'sm' | 'md'
	theme: 'dark' | 'light'
	setTheme: Dispatch<SetStateAction<'dark' | 'light'>>
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
const AppContext = createContext<Context>({
	screen: 'lg',
	theme: 'dark',
	setTheme: () => {},
	isOpen: false,
	setIsOpen: () => {},
})
export { AppContext }
