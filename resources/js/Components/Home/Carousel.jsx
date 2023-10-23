import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import './Carousel.css';

// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import Sushi1 from '../../assets/photo/sushi-1.jpg';
import Sushi2 from '../../assets/photo/sushi-2.jpg';
import Sushi3 from '../../assets/photo/sushi-3.jpg';

function Carousel() {
    return (
        <div className='w-full h-full z-0'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Sushi1} alt='banner-1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sushi2} alt='banner-2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sushi3} alt='banner-3' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
