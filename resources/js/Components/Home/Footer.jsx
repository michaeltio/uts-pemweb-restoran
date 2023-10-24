import React from "react";
import Telephone from "../../../../public/images/assets/telephone.png";
import Location from "../../../../public/images/assets/location.png";
import Email from "../../../../public/images/assets/email.png";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="bg-zinc-900 text-slate-100 w-full mt-24"
        >
            <footer className="mx-14 ">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex-grow flex flex-wrap -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-2">
                            <h2
                                data-aos="fade-down-right"
                                className="title-font heading-footer font-medium  tracking-widest text-md mb-3"
                            >
                                ABOUT US
                            </h2>
                            <nav
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                className="list-none mb-2"
                            >
                                <p>
                                    At the heart of it all, we are dedicated to
                                    serving you. Your satisfaction drives us.
                                    Thank you for choosing us, and we look
                                    forward to serving you again soon
                                    <br />
                                    全てのことの中で、私たちは皆様にご奉仕することに心血を注いでおります。皆様のご満足が、私たちの原動力です。ご選択いただき、誠にありがとうございます。そして、またご利用いただけることを心よりお待ちしております。
                                </p>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-2">
                            <h2
                                data-aos="fade-down-right"
                                className="title-font heading-footer font-medium tracking-widest text-md mb-3"
                            >
                                QUICK LINKS
                            </h2>
                            <nav className="list-none mb-2">
                                <li
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="mb-2"
                                >
                                    <Link
                                        href={route("home")}
                                        className="hover:text-red-500"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="mb-2"
                                >
                                    <Link
                                        href={route("menu")}
                                        className="hover:text-red-500"
                                    >
                                        Menu
                                    </Link>
                                </li>
                                <li
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="mb-2"
                                ></li>
                                <li
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="mb-2"
                                >
                                    <Link
                                        href={route("order")}
                                        className="hover:text-red-500"
                                    >
                                        Cart
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-2">
                            <h2
                                data-aos="fade-down-right"
                                className="heading-footer title-font font-medium tracking-widest text-md mb-3"
                            >
                                CONTACT
                            </h2>
                            <nav className="list-none mb-2">
                                <li
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="mb-2 hover:text-red-500"
                                >
                                    <div className="flex flex-row justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                                        <div className="w-6 h-6 mr-2">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#ffffff"
                                            >
                                                <g strokeWidth="0"></g>
                                                <g
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></g>
                                                <g>
                                                    <path
                                                        d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z"
                                                        stroke="#ffffff"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M18.2109 8.84009C18.0578 8.09677 17.6931 7.41362 17.1609 6.87256C16.6288 6.33149 15.9516 5.95549 15.2109 5.79004"
                                                        stroke="#ffffff"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>{" "}
                                                    <path
                                                        d="M22 7.51001C21.6283 6.19924 20.928 5.00529 19.9655 4.04102C19.003 3.07674 17.8101 2.37408 16.5 2"
                                                        stroke="#ffffff"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                        +(021) 54220808
                                    </div>
                                </li>
                                <li
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="mb-2 hover:text-red-500"
                                >
                                    <div className="flex flex-row justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                                        <div className="w-6 h-6 mr-2">
                                            <svg
                                                fill="#ffffff"
                                                viewBox="0 0 1920 1920"
                                            >
                                                <g strokeWidth="0"></g>
                                                <g
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></g>
                                                <g>
                                                    <path
                                                        d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                                                        fillRule="evenodd"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                        admisi@umn.ac.id
                                    </div>
                                </li>
                                <li
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="mb-2 hover:text-red-500"
                                >
                                    <div>
                                        {" "}
                                        <div className="w-1/5 h-1/5 mr-2">
                                            <svg
                                                fill="#ffffff"
                                                version="1.1"
                                                id="Capa_1"
                                                viewBox="0 0 395.71 395.71"
                                                stroke="#ffffff"
                                            >
                                                <g strokeWidth="0"></g>
                                                <g
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></g>
                                                <g>
                                                    <g>
                                                        <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        Jl. Boulevard, Gading Serpong, Kel.
                                        Curug Sangereng,Kec. Kelapa Dua, Kab.
                                        Tangerang,Prop. Banten, Indonesia
                                    </div>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
