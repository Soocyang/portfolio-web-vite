import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './mywork.css';

import tempImage from '../../assets/img/ingredient-picker.jpeg'

const MyWork = ({ onModalOpen }) => {
  const slides = Array(5).fill('Project Title')

  return (
    <section id='my-work' className="my-work">
      <div className='content'>
        <div className="container-flex">
          <h1>My Work</h1>
          <span>
            Currently I'm learning on how to creates a website from
            wireframing UI/UX to the coding of the web pages.
            Feel free to browse through my old projects and works during
            my studies. 😆
          </span>
          <Swiper
            slidesPerView={1}
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 20,
              }
            }}
            effect={"cards"}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="my-work-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} onClick={() => onModalOpen()}>
                <div className='project-card' style={{ backgroundImage: `url(${tempImage})` }}>
                  <div className='content'>
                    <h3 className='title'>{slide}</h3>
                    <span className='description'>descriptions...</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default MyWork
