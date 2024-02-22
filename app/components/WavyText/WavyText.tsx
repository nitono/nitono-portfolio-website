import { FC } from 'react'
import './wavytext.css'

interface WavyTextProps {
	children: string
}

const WavyText: FC<WavyTextProps> = ({ children }) => {
	const childrenArr = children.split(' ')
	return (
		<>
			<div style={{}} className='wavy-text-box'>
				{childrenArr.map((child, index) => {
					return (
						<div key={index} className='word'>
							{child.split('').map((c, i) => (
								<span
									//@ts-ignore
									style={{ '--d': i + 1 }}
									className={`letter font-mono`}
									key={i}
								>
									{c}
								</span>
							))}
						</div>
					)
				})}
			</div>
		</>
	)
}

export default WavyText
