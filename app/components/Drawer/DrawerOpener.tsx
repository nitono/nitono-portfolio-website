import { AppContext } from '@/app/context'
import { useContext } from 'react'
import { CgMenuMotion } from 'react-icons/cg'
const DrawerOpener = () => {
	const { setIsOpen } = useContext(AppContext)
	return (
		<CgMenuMotion
			className='lg:hidden flex w-8 h-8 p-1 z-50'
			onClick={() => {
				setIsOpen(prev => !prev)
			}}
		/>
	)
}

export default DrawerOpener
