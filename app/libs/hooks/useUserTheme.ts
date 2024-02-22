import { useEffect, useRef } from 'react'

export function useUserTheme() {
	const theme = useRef<'dark' | 'light'>('dark')

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark')
			theme.current = 'dark'
		}
		if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.remove('dark')
			theme.current = 'light'
		}
	}, [])

	return theme.current
}
