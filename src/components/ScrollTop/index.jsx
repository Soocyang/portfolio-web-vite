import { FaChevronCircleUp } from 'react-icons/fa'

const ScrollTop = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div className='scroll-top' onClick={scrollToTop}>
			<FaChevronCircleUp size={30} />
		</div>
	)
}

export default ScrollTop
