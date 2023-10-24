import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../css/menu.css";

import { Navigation, Pagination } from "swiper/modules";

function Filter() {
    return (
        <div className="w-full h-full z-0">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    765: {
                        slidesPerView: 3,
                    },
                }}
                pagination={{
                    // dynamicBullets: true,
                    type: "fraction",
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a
                        href="#"
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                    >
                        Appetizer
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="#"
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                    >
                        Bento
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="#"
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                    >
                        Donburi
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="#"
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                    >
                        Nigiri
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="#"
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                    >
                        Ramen
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="#"
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                    >
                        Sashimi
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="#"
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                    >
                        Sushi Roll
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="#"
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                    >
                        Teppanyaki
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="#"
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                    >
                        Drinks
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="#"
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                    >
                        Desert
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Filter;
