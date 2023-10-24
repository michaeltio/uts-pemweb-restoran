import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

function Navbar({ loggedIn, isAdmin }) {
    const [changeHeader, setChangeHeader] = useState(false);

    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true);
        } else {
            setChangeHeader(false);
        }
    };

    window.addEventListener("scroll", onChangeHeader);
    return (
        <div className="w-full h-28">
            <header
                className={
                    changeHeader
                        ? "hidden md:block bg-black/[0.4] fixed z-50 top-0 left-0 w-full shadow-md text-white transition duration-500"
                        : "hidden md:block bg-transparent text-black fixed z-50 top-0 left-0 w-full transition duration-500"
                }
            >
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a
                        className="flex title-font font-medium items-center mb-4 md:mb-0 md:ml-14"
                        href="/"
                    >
                        <ApplicationLogo />
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center justify-center">
                        <Link
                            href={route("home")}
                            className="mr-10 hover:underline-offset-2"
                        >
                            Home
                        </Link>
                        <Link
                            href={route("menu")}
                            className="mr-10 hover:underline-offset-2"
                        >
                            Menu
                        </Link>
                        {!loggedIn ? (
                            <>
                                <Link
                                    href={route("login")}
                                    className="mr-10 hover:underline-offset-2"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="mr-10 hover:underline-offset-2"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <>
                                {isAdmin ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="mr-10 hover:underline-offset-2"
                                    >
                                        Admin Page
                                    </Link>
                                ) : (
                                    <Link
                                        href={route("order")}
                                        className="mr-10 hover:underline-offset-2"
                                    >
                                        Order
                                    </Link>
                                )}
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="mr-10 hover:underline-offset-2"
                                >
                                    Log Out
                                </Link>
                                <Link
                                    href={route("profile.edit")}
                                    className="mr-10 hover:underline-offset-2"
                                >
                                    Profile
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>
            <header
                className={
                    changeHeader
                        ? "block md:hidden bg-black/[0.4] fixed z-50 top-0 left-0 w-full shadow-md text-white transition duration-500"
                        : "block md:hidden bg-transparent text-black fixed z-50 top-0 left-0 w-full transition duration-500"
                }
            >
                <div className="container mx-auto flex flex-wrap p-0 sm:p-5 flex-col md:flex-row items-center">
                    <a
                        className="flex title-font font-medium items-center mb-4 md:mb-0 md:ml-14"
                        href="/"
                    >
                        <ApplicationLogo />
                    </a>
                    <button
                        data-collapse-toggle="navbar-hamburger"
                        type="button"
                        className="inline-flex z-50 items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-hamburger"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className="hidden w-full" id="navbar-hamburger">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                                >
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                                >
                                    Log In
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                                >
                                    Register
                                </a>
                            </li>
                            <li>
                                <a href="#" className="mr-10">
                                    <svg
                                        width="35px"
                                        height="35px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.5 5H18.2768C19.0446 5 19.526 5.82948 19.1451 6.49614L16.5758 10.9923C16.2198 11.6154 15.5571 12 14.8394 12H8M8 12L6.45625 14.47C6.03997 15.136 6.51881 16 7.30425 16H18M8 12L4.05279 4.10557C3.714 3.428 3.02148 3 2.26393 3H2M8 20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19C7.55228 19 8 19.4477 8 20ZM18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20Z"
                                            stroke={
                                                changeHeader
                                                    ? "#ffffff"
                                                    : "#000000"
                                            }
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
