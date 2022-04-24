import Wave2 from '../../assets/svg/wave-2.svg'
import NodeJSLogo from '../../assets/svg/nodejs.svg';
import ReactJSLogo from '../../assets/svg/react.svg';
import VueJSLogo from '../../assets/svg/vue-js.svg';
import MongoDbLogo from '../../assets/svg/mongodb.svg';
import VSCodeLogo from '../../assets/svg/vscode.svg';
import ProfilePic from '../../assets/img/Standard_Profile_Pic_square.jpg';
import './aboutme.css';

// Importing react swiper lib
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper';

import "swiper/css";
import "swiper/css/effect-cards";

const AboutMe = () => {
	return (
		<section id='about-me' className='about-me'>
			<div className='content'>
				<div className="container-flex">
					<div className='about-me-description'>
						<h1>About me</h1>
						<p>
							Passionate about creating and building websites.
							I also enjoy learning new technology and tools that can help me achieve my
							goals. In most of the time I'm more interested in front-end development.
							Currently working as a full-stack developer in
							<a href="https://www.fusionexgroup.com"> Fusionex Group</a> after graduating from
							<a href="https://www.tarc.edu.my"> Tunku Abdul Rahman University College </a>
							I'm learning on how to creates a website that starts from
							wireframing UI/UX to the coding of the web pages. Feel free to browse
							through my old projects and works during my studies.
						</p>
					</div>
					<div className="img-me">
						<img src={ProfilePic} alt='temp img' width={300} height={300} />
					</div>
				</div>
				<div className="container-flex">
					<div className='tech-stack-description'>
						<h1>Tech Stack</h1>
						<p>
							During my CS Degree in Sofware Development. I have learned many technology such as
							Java, ASP.NET Core, MySQL and MSSQL, Html, Css, and Javascript and etc in order to
							complete my studies. Then, during my internship I have learned ReactJs for front-end and
							Java Springboot as back-end. Now, I'm learning Vue and doing NodeJs application as the my
							working environment requires.
						</p>
					</div>
					<Swiper
						effect={"cards"}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						loop={true}
						grabCursor={true}
						modules={[EffectCards, Autoplay, Pagination, Navigation]}
						className="tech-stack-swiper"
					>
						<SwiperSlide>
							<img className='node-js-logo' src={NodeJSLogo} alt="Node JS Logo" />
						</SwiperSlide>
						<SwiperSlide>
							<img className='react-js-logo' src={ReactJSLogo} alt="React JS Logo" />
						</SwiperSlide>
						<SwiperSlide>
							<img className='vue-js-logo' src={VueJSLogo} alt="Vue JS Logo" />
						</SwiperSlide>
						<SwiperSlide>
							<img className='mongodb-logo' src={MongoDbLogo} alt="Mongodb Logo" />
						</SwiperSlide>
						<SwiperSlide>
							<img className='vs-code-logo' src={VSCodeLogo} alt="VS Code Logo" />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			<img className='wave-svg wave-svg-2' src={Wave2} alt='wave svg 2' width={1900} height={300} />
		</section>
	)
}

export default AboutMe
