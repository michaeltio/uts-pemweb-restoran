import React, { useEffect } from "react";
import Banner from "../../../../public/images/assets/banner-temp.png";
import Banner2 from "../../../../public/images/assets/banner2.png";
import Leaf from "../../../../public/images/assets/leaf.png";
import SushiDecor from "../../../../public/images/assets/sushi-decor.png";
import "../../../css/app.css";

export default function Opening() {
    return (
        <div className="opening flex items-center ml-12 mt-20 mb-20 2xl:mb-52 2xl:ml-28 xl:mb-36 xl:ml-20 lg:mb-28 lg:ml-20 md:ml-20 sm:ml-12">
            <div className="flex-1 relative">
                <div className="luxy-el" data-speed-y="-5">
                    <img
                        className="absolute hidden lg:block top-0 left-full z-0 w-10 opacity-80"
                        src={Leaf}
                        alt="leaf"
                    />
                </div>
                <div className="luxy-el" data-speed-y="-7">
                    <img
                        className="absolute hidden lg:block top-80 left-1/2 z-0 w-10 opacity-80 rotate-90"
                        src={Leaf}
                        alt="leaf"
                    />
                </div>
                <div className="luxy-el" data-speed-y="-3">
                    <img
                        className="absolute hidden lg:block -top-16 left-64 z-0 w-10 opacity-80 rotate-180"
                        src={Leaf}
                        alt="leaf"
                    />
                </div>
                <div className="luxy-el" data-speed-y="-1">
                    <img
                        className="absolute hidden lg:block top-20 left-3/4 z-0 w-10 opacity-80 rotate-90"
                        src={SushiDecor}
                        alt="sushi"
                    />
                </div>
                <div className="luxy-el" data-speed-y="2">
                    <div className="relative w-full">
                        <img
                            className="absolute -top-56 -left-32 z-0 w-4/5 grayscale opacity-10"
                            src={Banner2}
                            alt="banner2"
                        />
                    </div>
                </div>
                <p
                    className="
            text-2xl mb-3 -mt-14 tracking-wider leading-normal 
            2xl:text-7xl 2xl:leading-snug xl:tracking-wider
            xl:text-6xl xl:leading-normal xl:tracking-wider
            lg:leading-snug lg:text-6xl lg:tacking-wider
            md:text-5xl md:leading-snug md:tacking-wider
            sm:text-4xl sm:leading-snug sm:tacking-wider
            "
                >
                    Savor the
                    <br />
                    Finest&nbsp; Sushi
                    <br />
                    Creations
                </p>
                <p
                    className="
            info-text text-xs tracking-widest leading-loose mr-14
            2xl:text-md 2xl:leading-loose 2xl:tracking-widest 
            xl:text-sm xl:leading-loose xl:tracking-widest
            lg:text-sm lg:tracking-wider lg:leading-loose lg:-mr-20 
            md:text-xs md:leading-normal md:tracking-wider
            sm:text-xs sm:leading-normal sm:tracking-wider
            "
                >
                    Discover the Journey of Sushi King" - focus
                    <br />
                    on sushi. Share the history and origins of sushi,
                    highlighting its cultural
                    <br />
                    significance and how it has evolved over time.
                </p>
                <p className="info-text mt-16">Check out the Menu</p>
            </div>

            {/* Image on the far right */}
            <img
                className="hidden lg:block bannerPhoto w-2/3 -mr-56 -mt-56"
                src={Banner}
                alt="banner"
            />
        </div>
    );
}
