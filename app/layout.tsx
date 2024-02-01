import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'

const kanit = Kanit({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})
export const metadata: Metadata = {
	title: 'Nitono Portfolio Website',
	description: 'Nitono Portfolio Website',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='dark'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
			</head>
			<body className={kanit.className}>{children}</body>
		</html>
	)
}
