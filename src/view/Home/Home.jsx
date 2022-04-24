import WebDevSvg from '../../assets/svg/web-dev.svg'
import Wave1 from '../../assets/svg/wave-1.svg'
import './home.css';

const Home = () => {
	return (
		<section id='home' className='home' >
			<div className="content">
				<div className="container-flex">
					<img className='web-dev-svg' src={WebDevSvg} alt='web developer' width={425} height={438} />
					<div className='web-dev web-dev-content'>
						<div className='web-dev-text'>
							<h1>Hi</h1>
							<h1>I'm Cia Yang</h1>
							<h2>Full-stack Web Developer</h2>
						</div>
					</div>
				</div>
			</div>
			<img className='wave-svg wave-svg-1' src={Wave1} alt='wave svg' width={1900} height={300} />
		</section>
	)
}

export default Home
