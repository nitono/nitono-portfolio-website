import { useEffect, useRef } from 'react'

export function useWindowResize() {
	const screenSize = useRef(0)

	useEffect(() => {
		window.addEventListener('resize', () => {
			screenSize.current = window.innerWidth
		})

		return () => {
			window.removeEventListener('resize', () => {
				screenSize.current = window.innerWidth
			})
		}
	}, [])

	return screenSize.current <= 640
		? 'sm'
		: screenSize.current <= 720 && screenSize.current > 640
			? 'md'
			: 'lg'
}
