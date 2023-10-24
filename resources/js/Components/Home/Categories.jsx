import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../css/categories.css";

import { Navigation, Pagination } from "swiper/modules";

import Categories1 from "../../../../public/images/assets/categories-1.png";
import Categories2 from "../../../../public/images/assets/categories-2.png";
import Categories3 from "../../../../public/images/assets/categories-3.png";
import Categories4 from "../../../../public/images/assets/categories-4.png";
import Categories5 from "../../../../public/images/assets/categories-5.png";
import Categories6 from "../../../../public/images/assets/categories-6.png";
import Categories7 from "../../../../public/images/assets/categories-6.png";
import Categories8 from "../../../../public/images/assets/categories-6.png";
import Categories9 from "../../../../public/images/assets/categories-6.png";
import Categories10 from "../../../../public/images/assets/categories-6.png";

export default function Categories() {
    return (
        <div className="w-full h-full">
            <div className="mx-auto text-center">
                <h2
                    data-aos="zoom-in-up"
                    className="text-black-900 mb-4 lg:mb-8 font-bold text-4xl"
                >
                    Our Menu
                </h2>
            </div>
            <div
                data-aos="fade-up-left"
                data-aos-duration="3000"
                className="mx-14"
            >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                        },
                        550: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
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
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="flex flex-col">
                        <img className="w-1/2 p-6" src={Categories1} alt="1" />
                        <p className="pb-12">Appetizer</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img className="w-1/2 p-6" src={Categories2} alt="2" />
                        <p className="pb-12">Bento</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img className="w-1/2 p-6" src={Categories3} alt="3" />
                        <p className="pb-12">Dessert</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img className="w-1/2 p-6" src={Categories4} alt="4" />
                        <p className="pb-12">Donburi</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img className="w-1/2 p-6" src={Categories5} alt="5" />
                        <p className="pb-12">Drinks</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img className="w-1/2 p-6" src={Categories6} alt="6" />
                        <p className="pb-12">Nigiri</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img className="w-1/2 p-6" src={Categories7} alt="7" />
                        <p className="pb-12">Ramen</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img className="w-1/2 p-6" src={Categories8} alt="8" />
                        <p className="pb-12">Sashimi</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img className="w-1/2 p-6" src={Categories9} alt="9" />
                        <p className="pb-12">Sushi Roll</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img
                            className="w-1/2 p-6"
                            src={Categories10}
                            alt="10"
                        />
                        <p className="pb-12">Teppanyaki</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
