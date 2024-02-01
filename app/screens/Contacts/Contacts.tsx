import { motion } from 'framer-motion'
import { FaAt, FaTelegram } from 'react-icons/fa6'
const Contacts = () => {
	return (
		<article
			id='contacts'
			className='contacts w-full h-full p-6 flex justify-center items-center'
		>
			<section className='contacts-content flex justify-around flex-col items-center gap-5'>
				<div className='flex gap-5 flex-col lg:flex-row justify-around items-center'>
					<motion.div
						whileHover={{
							scale: 1.1,
							skewX: 2,
						}}
						className='contact-card cursor-pointer w-[200px] rounded-lg p-4 bg-zinc-400 dark:bg-zinc-900 flex justify-around items-center gap-2'
					>
						<FaAt />
						<a className='contact' href='mailto:pyto015@ya.ru'>
							pyto015@ya.ru
						</a>
					</motion.div>

					<motion.div
						whileHover={{
							scale: 1.1,
							skewX: 2,
						}}
						className='contact-card cursor-pointer w-[200px] rounded-lg p-4 bg-zinc-400 dark:bg-zinc-900 flex justify-around items-center gap-2'
					>
						<FaTelegram />
						<a href='https://t.me/nit_ono' className='contact'>
							@nit_ono
						</a>
					</motion.div>
				</div>
			</section>
		</article>
	)
}

export default Contacts
