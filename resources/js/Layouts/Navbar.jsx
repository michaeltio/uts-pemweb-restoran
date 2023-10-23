import React from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

function Navbar({ loggedIn, isAdmin }) {
    return (
        <header className="sticky new-font top-0 z-50 w-full bg-black/[0.4] text-slate-50 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center mb-4 md:mb-0 md:ml-14" href="/">
                    <ApplicationLogo/>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-white text-base justify-center">
                    <a className="mr-10 hover:underline-offset-2" href="#">Home</a>
                    <a className="mr-10 hover:underline-offset-2" href="#">Menu</a>
                    {!loggedIn ? (
                      <>
                        <Link 
                        href={route('login')}
                        className="mr-10 hover:underline-offset-2"
                        >
                          Log In
                        </Link>
                        <Link
                        href={route('register')}
                        className="mr-10 hover:underline-offset-2"
                        >
                          Register
                        </Link>
                      </>
                    ) : (
                      <>
                        {isAdmin ? (
                            <Link 
                            href={route('dashboard')}
                            className="mr-10 hover:underline-offset-2"
                            >
                              Admin Page
                            </Link>
                        ) : (
                          <Link 
                            href={route('404')}
                            className="mr-10 hover:underline-offset-2"
                            >
                              Order
                            </Link>
                        )}
                        <Link
                        href={route('logout')} method="post" as="button"
                        className="mr-10 hover:underline-offset-2"
                        >
                          Log Out
                        </Link>
                      </>
                    )}  
                    <a className="mr-10">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 5H18.2768C19.0446 5 19.526 5.82948 19.1451 6.49614L16.5758 10.9923C16.2198 11.6154 15.5571 12 14.8394 12H8M8 12L6.45625 14.47C6.03997 15.136 6.51881 16 7.30425 16H18M8 12L4.05279 4.10557C3.714 3.428 3.02148 3 2.26393 3H2M8 20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19C7.55228 19 8 19.4477 8 20ZM18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;