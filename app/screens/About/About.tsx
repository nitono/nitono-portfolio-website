import WavyText from '@/app/components/WavyText'
const About = () => {
	return (
		<article
			id='about'
			className='about w-full h-[50vh] lg:h-[100vh] flex justify-center items-center'
		>
			<section className='about-content flex w-full flex-col-reverse lg:flex-row-reverse justify-around items-center'>
				<div className='about-text-box'>
					<div className='about-text code text-xl lg:text-3xl'>
						Hello World <span className='animate-spin inline-block'>🌐</span>
						!. My name is Vlad and i am a Frontend developer. My currently{' '}
						<a className='about-text-accent' href='#tech-stack'>
							tech stack
						</a>
						is React and NodeJS with{' '}
						<a className='about-text-accent' href='#libs-and-frameworks'>
							more libraries and frameworks
						</a>
					</div>
				</div>
				<WavyText>Frontend Developer Loves Scripts</WavyText>
			</section>
		</article>
	)
}

export default About
