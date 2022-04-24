import { FaBars } from 'react-icons/fa'
import LogoSun from '../../assets/svg/logo.sun.og.svg'
import './navbar.css'
const Navbar = ({ navbarCollapse, openSidebarDrawer }) => {

	return (
		<nav className={`navbar ${navbarCollapse ? 'navbar-collapse' : ''}`}>
			<div className={`logo-container ${navbarCollapse ? 'logo-container-collapse' : ''}`}>
				<img className='nav-logo-sun' src={LogoSun} alt='Logo Sun' />
			</div>
			<ul className='nav-items'>
				<li>
					<a href='#home' className='current-page'>
						Home
					</a>
				</li>
				<li>
					<a href='#about-me'>About me</a>
				</li>
				<li>
					<a href='#my-work'>My work</a>
				</li>
				<li>
					<a href='#contact-me'>Contact me</a>
				</li>
				<li>
					<FaBars
						onClick={() => openSidebarDrawer()}
						className='nav-menu-icon'
						color='#f9bd19'
						size={30}
					/>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
