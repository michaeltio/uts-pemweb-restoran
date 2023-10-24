import React from "react";
import Telephone from "../../../../public/images/assets/telephone.png";
import Location from "../../../../public/images/assets/location.png";
import Email from "../../../../public/images/assets/email.png";

export default function Footer() {
    return (
        <div className="bg-zinc-900 text-slate-100 w-full mt-24">
            <footer className="mx-14 ">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex-grow flex flex-wrap -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-2">
                            <h2 className="title-font heading-footer font-medium  tracking-widest text-md mb-3">
                                ABOUT US
                            </h2>
                            <nav className="list-none mb-2">
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
                            <h2 className="title-font heading-footer font-medium tracking-widest text-md mb-3">
                                QUICK LINKS
                            </h2>
                            <nav className="list-none mb-2">
                                <li className="mb-2">
                                    <a className="hover:text-red-500">Home</a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:text-red-500">Menu</a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:text-red-500">
                                        Third Link
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:text-red-500">Cart</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-2">
                            <h2 className="heading-footer title-font font-medium tracking-widest text-md mb-3">
                                CONTACT
                            </h2>
                            <nav className="list-none mb-2">
                                <li className="mb-2 hover:text-red-500">
                                    <p className="flex flex-row justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                                        <img
                                            className="w-6 h-6 mr-2"
                                            src={Telephone}
                                            alt="Icon"
                                        />
                                        +(021) 54220808
                                    </p>
                                </li>
                                <li className="mb-2 hover:text-red-500">
                                    <p className="flex flex-row justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                                        <img
                                            className="w-6 h-6 mr-2"
                                            src={Email}
                                            alt="Icon"
                                        />
                                        admisi@umn.ac.id
                                    </p>
                                </li>
                                <li className="mb-2 hover:text-red-500">
                                    <p className="flex flex-row justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                                        <img
                                            className="w-6 h-6 mr-2"
                                            src={Location}
                                            alt="Icon"
                                        />
                                        Jl. Boulevard, Gading Serpong, Kel.
                                        Curug Sangereng,Kec. Kelapa Dua, Kab.
                                        Tangerang,Prop. Banten, Indonesia
                                    </p>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-200">
                    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                                <label
                                    htmlFor="footer-field"
                                    className="leading-7 text-sm"
                                >
                                    Newsletter
                                </label>
                                <input
                                    type="text"
                                    id="footer-field"
                                    name="footer-field"
                                    className="w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    placeholder="Email Address"
                                />
                            </div>
                            <button className="mt-2 inline-flex bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                                Send
                            </button>
                            <p className=" text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                                <br className="lg:block hidden" />
                                Dicta ducimus rem consequatur
                            </p>
                        </div>
                        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                            <a
                                className="ml-3"
                                href="https://twitter.com/ClashofClans?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a
                                className="ml-3"
                                href="https://www.instagram.com/clashofclans/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    ></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
