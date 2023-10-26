import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../css/menu.css";

import { Navigation, Pagination } from "swiper/modules";

function Filter({ handleCategoryClick }) {
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
                    type: "fraction",
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                        onClick={() => handleCategoryClick("Appetizer")}
                    >
                        Appetizer
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                        onClick={() => handleCategoryClick("Bento")}
                    >
                        Bento
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                        onClick={() => handleCategoryClick("Donburi")}
                    >
                        Donburi
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                        onClick={() => handleCategoryClick("Nigiri")}
                    >
                        Nigiri
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                        onClick={() => handleCategoryClick("Ramen")}
                    >
                        Ramen
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                        onClick={() => handleCategoryClick("Sashimi")}
                    >
                        Sashimi
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                        onClick={() => handleCategoryClick("Sushi Roll")}
                    >
                        Sushi Roll
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                        onClick={() => handleCategoryClick("Teppanyaki")}
                    >
                        Teppanyaki
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                        onClick={() => handleCategoryClick("Drink")}
                    >
                        Drinks
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                        onClick={() => handleCategoryClick("Dessert")}
                    >
                        Dessert
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Filter;
