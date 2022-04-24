import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Navbar from '../../components/Navbar'
import SidebarDrawer from '../../components/Navbar/SidebarDrawer'

const Main = ({ children, navbarCollapse }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	// Stop scrolling when drawer is open
	useEffect(() => {
		if (isDrawerOpen) {
			document.body.classList.add('stop-scrolling')
		} else {
			document.body.classList.remove('stop-scrolling')
		}
	}, [isDrawerOpen])

	const handleOpenSidebarDrawer = () => {
		setIsDrawerOpen(true)
	}

	const handleCloseSidebarDrawer = () => {
		setIsDrawerOpen(false)
	}

	return (
		<>
			<Navbar navbarCollapse={navbarCollapse} openSidebarDrawer={handleOpenSidebarDrawer} />
			<AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
				{isDrawerOpen ? (
					<SidebarDrawer closeSidebarDrawer={handleCloseSidebarDrawer} />
				) : (
					''
				)}
			</AnimatePresence>
			<main>{children}</main>
			
		</>
	)
}

export default Main
