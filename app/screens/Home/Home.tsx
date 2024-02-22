import { dm_mono, dm_sans } from '@/app/fonts'
const Home = () => {
	return (
		<article
			id='home'
			className='home scroll-m-36 w-full h-[70vh] pt-14 lg:h-[100vh] flex justify-center items-center'
		>
			<section className='home-content lg:flex-row flex flex-row justify-around w-full items-center'>
				<div className='flex w-full lg:w-1/2 justify-around items-start md:items-center lg:items-start flex-col'>
					<h1
						className={`${dm_sans.className} p-2 text-lg md:text-2xl lg:text-6xl text-left`}
					>
						Hi! I am a{' '}
						<span className={`${dm_mono.className}`}>Frontend Developer</span>
						<sup className='inline-block top-[-10px] lg:top-[-22px] rotate-45 text-Secondary-Secondary(100) text-xl'>
							&#10022;
						</sup>
					</h1>
					<p
						className={`${dm_sans.className} text-sm lg:text-xl text-left p-2`}
					>
						And i a build sites that you dreamed of
					</p>
				</div>
				<div className='w-1/2 flex justify-center items-center'>
					<div>
						<svg
							className='transition-all translate-x-0 hover:translate-x-6 hover:skew-x-6 
							dark:hover:fill-current dark:fill-Neutral-Neutral(100) fill-Neutral-Neutral(800) dark:hover:text-Primary-Primary(100) hover:fill-current hover:text-Primary-Primary(100) w-[150px] lg:w-[300px]'
							width='none'
							viewBox='0 0 55 67'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M0.472754 66.904L0.472754 0.0879963H4.21675L50.8728 45.496V0.0879963H54.4248V66.904H0.472754Z' />
						</svg>
					</div>
				</div>
			</section>
		</article>
	)
}

export default Home
