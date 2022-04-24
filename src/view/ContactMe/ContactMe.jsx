import './contactme.css';
import ContactMeSvg from '../../assets/svg/contact-me.svg';

import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord, FaMapMarkerAlt } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <section id='contact-me' className='contact-me'>
      <div className='content'>
        <div className="container-flex">
          <div className="contact-me-description">
            <h1>Contact Me</h1>
            <p>
              I'm interested in any opportunities and suggestions.
              Don't hesitate to contact me if you have any request or question.
            </p>
            <address>
              <a className='email-link' href='mailto:ciayangsoo99@gmail.com'>
                <FaEnvelope color='#f9bd19' fontSize={30} style={{ padding: '0 .2em 0 0' }} />
                ciayangsoo99@gmail.com
              </a>
              <a className='location' href='https://goo.gl/maps/dCFQQpXUk1hyBEzy8'>
                <FaMapMarkerAlt color='#f9bd19' fontSize={30} style={{ padding: '0 .2em 0 0' }} />
                Kuala Lumpur, Malaysia
              </a>
            </address>
            <span className='contact-icon-group'>
              <a href="https://www.linkedin.com/in/cia-yang-soo/" >
                <FaLinkedin color='#0077b5' style={{ padding: '.2em .2em .2em 0' }} />
              </a>
              <a href="https://github.com/Soocyang">
                <FaGithub color='#000000' style={{ padding: '.2em .2em' }} />
              </a>
              <a href="https://discordapp.com/users/380295136774586369">
                <FaDiscord color='#738adb' style={{ padding: '.2em .2em' }} />
              </a>
            </span>
          </div>
          <img className='contact-me-svg' src={ContactMeSvg} alt="Contact Me Svg" width={500} />
        </div>
      </div>
    </section>
  )
}

export default ContactMe
