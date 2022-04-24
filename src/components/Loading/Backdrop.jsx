import { motion } from 'framer-motion'

const Backdrop = ({ children }) => {
	return (
		<motion.div
			className='backdrop'
			style={style}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	)
}

const style = {
	position: 'fixed',
	top: '0',
	left: '0',
	height: '100vh',
	width: '100%',
	display: 'grid',
	placeItems: 'center',
	backgroundColor: '#fffbe5df',
}

export default Backdrop
