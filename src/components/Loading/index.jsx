import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import LogoSvg from '../../assets/svg/logo.sun.svg'

const Loader = () => {
	const dropIn = {
		hidden: {
			y: '-100vh',
			opacity: 0,
		},
		visible: {
			y: '0',
			opacity: 1,
			transition: {
				duration: 0.1,
				type: 'spring',
				damping: 25,
				stiffness: 500,
			},
		},
		exit: {
			y: '10vh',
			opacity: 0,
		},
	}

	return (
		<Backdrop>
			<motion.div
				className='loading-logo'
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				<img src={LogoSvg} alt='sun-loading-svg' />
			</motion.div>
		</Backdrop>
	)
}

export default Loader
