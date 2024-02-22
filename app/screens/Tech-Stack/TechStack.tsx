'use client'
import { motion } from 'framer-motion'
import { v4 as uuid } from 'uuid'
import { ItemI, LIBS, LIBSItem, TECHS, TECHSItem } from './TechStack.data'
const Item = <T extends ItemI>({
	el,
	i,
	className,
}: {
	el: T
	i: number
	className?: string
}) => {
	/**
	 *
	 */
	const classN = `lg:w-16 w-8 h-8 lg:h-16 ${el.style}`
	return (
		<motion.div
			whileHover={{
				scale: 1.1,
			}}
			key={uuid()}
			className={`tech-item min-h-[120px] lg:min-h-[240px] h-fit flex justify-around flex-col cursor-pointer shadow-xl items-center gap-1 lg:p-2 bg-opacity-20 backdrop-blur-lg bg-Neutral-Neutral(700) rounded-xl transition-all  ${className}`}
		>
			{<el.icon color={el.color} className={classN} key={uuid()} />}
			{
				<abbr
					key={uuid()}
					className={`font-bold dark:text-zinc-300 text-base lg:text-lg`}
				>
					{el.name}
				</abbr>
			}
			{
				<a
					href={el.url}
					className='text-Neutral-Neutral(100) hover:text-Primary-Primary(100) transition-all'
					target='_blank'
				>
					More...
				</a>
			}
		</motion.div>
	)
}

const TechStack = () => {
	return (
		<article id='tech-stack' className='tech-stack scroll-m-56 w-full h-auto'>
			<section className='tech-stack-content w-full h-full flex justify-center items-center gap-5'>
				<div className='tech-stack-icons flex justify-around items-center flex-col'>
					<h1 className='lg:text-6xl text-xl  font-semibold'>Techs</h1>
					<div
						className={`techs items-center justify-around grid grid-cols-2 h-[50vh] lg:grid lg:grid-cols-6 gap-5`}
					>
						{TECHS.map((el, i) => {
							return (
								<Item<TECHSItem>
									className='w-[120px] lg:w-[200px]'
									key={uuid()}
									el={el}
									i={i}
								/>
							)
						})}
					</div>
					<h1 className='lg:text-6xl text-xl font-semibold'>
						Libs and Frameworks
					</h1>
					<div
						className={`libs-and-frameworks items-center grid grid-cols-2 justify-center h-[50vh] lg:grid lg:grid-cols-6 gap-5`}
						id='libs-and-frameworks'
					>
						{LIBS.map((el, i) => {
							return (
								<Item<LIBSItem>
									className='w-auto p-2'
									el={el}
									key={uuid()}
									i={i}
								/>
							)
						})}
					</div>
				</div>
			</section>
		</article>
	)
}

export default TechStack
