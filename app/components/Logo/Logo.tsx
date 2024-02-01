import DarkLogo from '@/public/dark_logo.svg'
import LightLogo from '@/public/light_logo.svg'
import Image from 'next/image'
const Logo = ({ theme }: { theme: string }) => {
	return theme === 'dark' ? (
		<Image src={DarkLogo} alt='Nitono.dev Logo' width={500} height={200} />
	) : (
		<Image src={LightLogo} alt='Nitono.dev Logo' width={500} height={200} />
	)
}

export default Logo
