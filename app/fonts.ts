import {
	DM_Mono,
	DM_Sans,
	Gluten,
	Kalam,
	Major_Mono_Display,
	Noto_Color_Emoji,
} from 'next/font/google'

export const kalam = Kalam({
	weight: ['300', '400', '700'],
	subsets: ['latin'],
})
export const gluten = Gluten({
	subsets: ['latin'],
})
export const majormono = Major_Mono_Display({
	weight: ['400'],
	subsets: ['latin'],
})
export const dm_sans = DM_Sans({
	subsets: ['latin'],
	weight: ['500'],
})
export const dm_mono = DM_Mono({
	subsets: ['latin'],
	weight: ['500'],
})
export const emojiFont = Noto_Color_Emoji({
	weight: ['400'],
	subsets: ['emoji'],
})
