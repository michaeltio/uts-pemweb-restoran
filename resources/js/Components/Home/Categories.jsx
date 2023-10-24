import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../css/categories.css";

import { Navigation, Pagination } from "swiper/modules";

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
                        <img
                            className="w-1/2 p-6"
                            src="storage/images/menus/WAKAME-SALAD.webp"
                            alt="1"
                        />
                        <p className="pb-12">Appetizer</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img
                            className="w-1/2 p-6"
                            src="storage/images/menus/CHICKEN-YAKINIKU-BENTO.webp"
                            alt="2"
                        />
                        <p className="pb-12">Bento</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img
                            className="w-1/2 p-6"
                            src="storage/images/menus/MILK-RASPBERRY-PANNA-COTTA.webp"
                            alt="3"
                        />
                        <p className="pb-12">Dessert</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img
                            className="w-1/2 p-6"
                            src="storage/images/menus/GYU-TOJI-DONBURI.webp"
                            alt="4"
                        />
                        <p className="pb-12">Donburi</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img
                            className="w-1/2 p-6"
                            src="storage/images/menus/BLUE-OCEAN-MOJITO-1.webp"
                            alt="5"
                        />
                        <p className="pb-12">Drinks</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img
                            className="w-1/2 p-6"
                            src="storage/images/menus/TOBIKO-SUSHI.webp"
                            alt="6"
                        />
                        <p className="pb-12">Nigiri</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img
                            className="w-1/2 p-6"
                            src="storage/images/menus/SPICY-RAMEN.webp"
                            alt="7"
                        />
                        <p className="pb-12">Ramen</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img
                            className="w-1/2 p-6"
                            src="storage/images/menus/SASHIMI_SET.webp"
                            alt="8"
                        />
                        <p className="pb-12">Sashimi</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img
                            className="w-1/2 p-6"
                            src="storage/images/menus/UNAGI_DRAGON-ROLL.webp"
                            alt="9"
                        />
                        <p className="pb-12">Sushi Roll</p>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col">
                        <img
                            className="w-1/2 p-6"
                            src="storage/images/menus/SALMON-TEPPANYAKI.webp"
                            alt="10"
                        />
                        <p className="pb-12">Teppanyaki</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
