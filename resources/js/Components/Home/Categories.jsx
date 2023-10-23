import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Categories.css';

import { Pagination } from 'swiper/modules';

import Categories1 from '../../../../public/images/assets/categories-1.png';
import Categories2 from '../../../../public/images/assets/categories-2.png';
import Categories3 from '../../../../public/images/assets/categories-3.png';
import Categories4 from '../../../../public/images/assets/categories-4.png';
import Categories5 from '../../../../public/images/assets/categories-5.png';
import Categories6 from '../../../../public/images/assets/categories-6.png';


function Categories() {
    return (
        <div className='w-full h-full'>
            <div className='mx-auto text-center'>
                <h2 className="text-black-900 mb-4 lg:mb-8 font-bold text-4xl">
                    Our Menu
                </h2>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                    468: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    1536: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="
                        2xl:w-3/5 2xl:mt-2 2xl:ml-14
                        xl:w-2/3 xl:mt-1 xl:ml-9
                        lg:w-3/5 lg:mt-1 lg:ml-12
                        md:w-4/5 md:mt-2 md:ml-5
                        sm:w-2/3 sm:mt-2 sm:ml-8
                        "
                        src={Categories1} alt='categories-1'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="
                        2xl:w-3/5 2xl:mt-2 2xl:ml-14
                        xl:w-2/3 xl:mt-1 xl:ml-9
                        lg:w-3/5 lg:mt-1 lg:ml-12
                        md:w-4/5 md:mt-2 md:ml-5
                        sm:w-2/3 sm:mt-2 sm:ml-8
                        "
                        src={Categories2} alt='categories-2'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="
                        2xl:w-3/5 2xl:mt-2 2xl:ml-14
                        xl:w-2/3 xl:mt-1 xl:ml-9
                        lg:w-3/5 lg:mt-1 lg:ml-12
                        md:w-4/5 md:mt-2 md:ml-5
                        sm:w-2/3 sm:mt-2 sm:ml-8
                        "
                        src={Categories3} alt='categories-3'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="
                        2xl:w-3/5 2xl:mt-2 2xl:ml-14
                        xl:w-2/3 xl:mt-1 xl:ml-9
                        lg:w-3/5 lg:mt-1 lg:ml-12
                        md:w-4/5 md:mt-2 md:ml-5
                        sm:w-2/3 sm:mt-2 sm:ml-8
                        "
                        src={Categories4} alt='categories-4'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="
                        2xl:w-3/5 2xl:mt-2 2xl:ml-14
                        xl:w-2/3 xl:mt-1 xl:ml-9
                        lg:w-3/5 lg:mt-1 lg:ml-12
                        md:w-4/5 md:mt-2 md:ml-5
                        sm:w-2/3 sm:mt-2 sm:ml-8
                        "
                        src={Categories5} alt='categories-5'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="
                        2xl:w-3/5 2xl:mt-2 2xl:ml-14
                        xl:w-2/3 xl:mt-1 xl:ml-9
                        lg:w-3/5 lg:mt-1 lg:ml-12
                        md:w-4/5 md:mt-2 md:ml-5
                        sm:w-2/3 sm:mt-2 sm:ml-8
                        "
                        src={Categories6} alt='categories-6'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categories;