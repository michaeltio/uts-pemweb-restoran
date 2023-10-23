import React from "react";

export default function Greetings() {
    return (
        <section className="body-font text-black-900 mx-14">
            <div className="container px-5 py-24 mx-auto">
                <div className="xl:w-3/4 w-full mx-auto text-center">
                    <h2 className="text-red-600 mb-4 font-bold tracking-wider lg:text-2xl text-xl">
                        この食べ物は大石です
                    </h2>
                    <p className="mb-5 font-bold tracking-wider text-lg 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl">
                        Quality and Freshness: Our Commitmend to Excellence
                    </p>
                    <p className="leading-relaxed text-xs lg:text-sm mx-12 lg:mx-24">
                        Emphatize your restaurant's dedication to using the 
                        freshest ingredients sustainable sourcing practices.
                    </p>
                </div>
            </div>
        </section>
    );
};