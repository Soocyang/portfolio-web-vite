import './footer.css'
import LogoSvg from '../../assets/svg/logo.sun.og.svg'

const handleTest = async () => {
  const response = await fetch('https://blog-app-api-production-4eb3.up.railway.app/test')
  console.log(await response.text())
}

const Footer = () => {
  return (
    <section id='footer' className='footer'>
      <div className="container-flex">
        <span>
          <img className="footer-icon" src={LogoSvg} alt='logo' width={50} />
          <span>Lim Soo Cia Yang © 2022</span>
        </span>
      </div>
      <button onClick={handleTest}>T</button>
    </section>
  )
}

export default Footer