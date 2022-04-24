import './footer.css'
import LogoSvg from '../../assets/svg/logo.sun.og.svg'

const Footer = () => {
  return (
    <section id='footer' className='footer'>
        <div className="container-flex">
          <span>
            <img className="footer-icon" src={LogoSvg} alt='logo' width={50} />
            <span>Lim Soo Cia Yang © 2022</span>
          </span>
      </div></section>
  )
}

export default Footer