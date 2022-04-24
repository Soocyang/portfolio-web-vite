import { motion } from 'framer-motion'
import { FaTimes, FaHome, FaUserAlt, FaBriefcase, FaPhone } from 'react-icons/fa'
import './sidebar.css'

const SidebarDrawer = ({ closeSidebarDrawer }) => {
	const slideIn = {
		hidden: {
			x: '100vw',
			opacity: 0,
		},
		visible: {
			x: '0',
			opacity: 1,
			transition: {
				duration: 0.2,
			},
		},
		exit: {
			x: '100vw',
			opacity: 0,
		},
	}

	return (
		<motion.div
			className='nav-sidebar-drawer'
			variants={slideIn}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<div className='nav-close'>
				<FaTimes
					onClick={() => closeSidebarDrawer()}
					className='nav-close-icon'
					color='#f9bd19'
					size={50}
				/>
			</div>
			<ul className='nav-sidebar-items'>
				<li>
					<a href='#home' onClick={() => closeSidebarDrawer()}>
						Home <FaHome />
					</a>
				</li>
				<li>
					<a href='#about-me' onClick={() => closeSidebarDrawer()}>
						About me <FaUserAlt />
					</a>
				</li>
				<li>
					<a href='#my-work' onClick={() => closeSidebarDrawer()}>
						My work <FaBriefcase />
					</a>
				</li>
				<li>
					<a href='#contact-me' onClick={() => closeSidebarDrawer()}>
						Contact me <FaPhone />
					</a>
				</li>
			</ul>
		</motion.div>
	)
}

export default SidebarDrawer
