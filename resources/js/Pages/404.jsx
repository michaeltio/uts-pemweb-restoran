import React from "react";
import Image_404 from "../../../public/images/assets/404.jpg";

function Page_404() {
    return (
        <section className="mont-font ml-20 mr-14">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
                        404
                    </h1>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                        Page not found
                    </h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Sorry, the page you are looking for doesn't exist.
                    </p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <a
                            href="/"
                            className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600"
                        >
                            Take me home
                        </a>
                    </div>
                </div>

                <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                    <img
                        className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover"
                        src={Image_404}
                        alt="404"
                    />
                </div>
            </div>
        </section>
    );
}

export default Page_404;
