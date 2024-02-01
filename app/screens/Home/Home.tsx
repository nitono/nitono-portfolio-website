import { Logo } from '@/app/components/Logo'

const Home = ({ theme }: { theme: string }) => {
	return (
		<article
			id='home'
			className='home w-full h-[50vh] lg:h-[100vh]  flex justify-center items-center'
		>
			<section className='home-content flex-col flex lg:flex-row justify-around w-full items-center'>
				<div className='code flex flex-col'>
					<h1 className='info-text text-xl lg:text-6xl lg:w-[600px] '>
						Hi! I am a Frontend developer{' '}
					</h1>
					<span className='sub-text text-base lg:text-xl mt-2 text-zinc-400'>
						I am Vlad Maksiomov (<a href='https://github.com/nitono'>nitono</a>)
						and i am a developer currently use React (sometimes with{' '}
						<abbr>TS</abbr>) and NodeJS for my projects
					</span>
				</div>
				<div className='info-image-box w-[90%] lg:w-fit flex justify-center items-center'>
					<Logo theme={theme} />
				</div>
			</section>
		</article>
	)
}

export default Home
