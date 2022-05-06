import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

// import Loader from './components/common/Loader'
import Loader from './components/Loading'
import Main from './view/Main'
import Home from './view/Home'
import AboutMe from './view/AboutMe'
import MyWork from './view/MyWork'
import ContactMe from './view/ContactMe'
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop'
import Modal from './components/Modal';

import ProjectShowcase from './components/ProjectShowcase'

import './styles.css'

function App() {
	const [delay, setDelay] = useState(5000)
	const [isLoading, setIsLoading] = useState(true)
	const [showScrollTop, setShowScrollTop] = useState(false)
	const [navbarCollapse, setNavbarCollapse] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [currProj, setCurrProj] = useState({})

	// Get client cookies check is visited to mock loading screen
	useEffect(() => {
		const visitedCookie = document.cookie
			.split(';')
			.some((item) => item.trim().startsWith('visited='))

		setDelay(1500)
		if (!visitedCookie) {
			document.cookie = 'visited=true;max-age=3000;samesite'
			setDelay(5000)
		}

		setTimeout(() => {
			setIsLoading(false)
		}, delay)
	}, [delay])

	// Stop scrolling when loading
	useEffect(() => {
		if (isLoading) {
			document.body.classList.add('stop-scrolling')
		} else {
			document.body.classList.remove('stop-scrolling')
		}
	}, [isLoading])

	useEffect(() => {
		const toggleScrollFn = () => {
			if (document.body.scrollTop > 0.1 || document.documentElement.scrollTop > 0.1) {
				setNavbarCollapse(true)
				setShowScrollTop(true)
			} else {
				setNavbarCollapse(false)
				setShowScrollTop(false)
			}
		}
		window.addEventListener('scroll', toggleScrollFn)
		return () => {
			window.removeEventListener('scroll', toggleScrollFn)
		}
	}, [])

	const handleModalOpen = (projectInfo) => {
		if (projectInfo) setCurrProj(projectInfo)
		if (isOpen) setIsOpen(false);
		else setIsOpen(true);
	}

	return (
		<div className='App'>
			<AnimatePresence initial={true} exitBeforeEnter={true} onExitComplete={() => null}>
				{isLoading && <Loader />}
			</AnimatePresence>
			<Main navbarCollapse={navbarCollapse}>
				<Home />
				<AboutMe />
				<MyWork onModalOpen={handleModalOpen} />
				<ContactMe />
				<Footer />
			</Main>
			<Modal isOpen={isOpen} onModalOpen={handleModalOpen} >
				<ProjectShowcase currProj={currProj} onModalOpen={handleModalOpen} />
			</Modal>
			{showScrollTop && <ScrollTop />}
		</div>
	)
}

export default App
