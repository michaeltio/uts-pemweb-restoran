import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

function Navbar({ loggedIn, isAdmin }) {
    const [changeHeader, setChangeHeader] = useState(false);
    const [showBurger, setShowBurger] = useState(false);

    const Burger = () => {
        setShowBurger(!showBurger);
    };

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
                                ) : null}
                                <Link
                                    href={route("order")}
                                    className="mr-10 hover:underline-offset-2"
                                >
                                    Order
                                </Link>
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
                        ? "block md:hidden bg-white fixed z-50 top-0 left-0 w-full text-white transition duration-500 pt-3"
                        : "block md:hidden bg-transparent text-black fixed z-50 top-0 left-0 w-full transition duration-500 pt-3"
                }
            >
                <div className="mx-14 flex">
                    <a className="flex-1 title-font font-medium  mb-4" href="/">
                        <ApplicationLogo />
                    </a>
                    <button
                        type="button"
                        className="z-50 ml-4 mt-2 flex-end w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={Burger}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="ml-2.5 mt-0.5 w-5 h-5"
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
                    {showBurger && (
                        <div>
                            <div className="text-black fixed top-0 right-0 z-40 w-56 h-screen">
                                <div className="h-full py-4 overflow-y-auto bg-white/[0.5]">
                                    <ul className="mr-14 pt-20 space-y-2 font-medium">
                                        <li>
                                            <Link
                                                href={route("home")}
                                                className="flex items-center p-2 rounded-lg hover:bg-gray-100 group"
                                            >
                                                <span className="text-end flex-1 ml-3 whitespace-nowrap">
                                                    Home
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("menu")}
                                                className="flex items-center p-2 rounded-lg hover:bg-gray-100 group"
                                            >
                                                <span className="text-end flex-1 ml-3 whitespace-nowrap">
                                                    Menu
                                                </span>
                                            </Link>
                                        </li>
                                        {!loggedIn ? (
                                            <>
                                                <li>
                                                    <Link
                                                        href={route("login")}
                                                        className="flex items-center p-2 rounded-lg hover:bg-gray-100 group"
                                                    >
                                                        <span className="text-end flex-1 ml-3 whitespace-nowrap">
                                                            Log In
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={route("register")}
                                                        className="flex items-center p-2 rounded-lg hover:bg-gray-100 group"
                                                    >
                                                        <span className="text-end flex-1 ml-3 whitespace-nowrap">
                                                            Register
                                                        </span>
                                                    </Link>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                {isAdmin ? (
                                                    <li>
                                                        <Link
                                                            href={route(
                                                                "dashboard"
                                                            )}
                                                            className="flex items-center p-2 rounded-lg hover:bg-gray-100 group"
                                                        >
                                                            <span className="text-end flex-1 ml-3 whitespace-nowrap">
                                                                Admin Page
                                                            </span>
                                                        </Link>
                                                    </li>
                                                ) : (
                                                    <li>
                                                        <Link
                                                            href={route(
                                                                "order"
                                                            )}
                                                            className="flex items-center p-2 rounded-lg hover:bg-gray-100 group"
                                                        >
                                                            <span className="text-end flex-1 ml-3 whitespace-nowrap">
                                                                Order
                                                            </span>
                                                        </Link>
                                                    </li>
                                                )}
                                                <li>
                                                    <Link
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                        className="flex items-center p-2 rounded-lg hover:bg-gray-100 group"
                                                    >
                                                        <span className="text-end flex-1 ml-3 whitespace-nowrap">
                                                            Log Out
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={route(
                                                            "profile.edit"
                                                        )}
                                                        className="flex items-center p-2 rounded-lg hover:bg-gray-100 group"
                                                    >
                                                        <span className="text-end flex-1 ml-3 whitespace-nowrap">
                                                            Profile
                                                        </span>
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Navbar;
