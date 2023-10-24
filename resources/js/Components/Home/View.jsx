import React from "react";
import ViewItem from "./ViewItem";

function View() {
    return (
        <section className="text-black-900 body-font mx-16">
            <div className="container flex justify-center px-5 py-24 mx-auto">
                <div className="flex flex-wrap justify-center  -m-4">
                    <ViewItem
                        source="storage/images/menus/AGEDASHI-TOFU.webp"
                        name="Agedashi Tofu"
                    />
                    <ViewItem
                        source="storage/images/menus/SALMON-KANI-MAYO-ROLL.webp"
                        name="Salmon Kani Mayo Roll"
                    />
                    <ViewItem
                        source="storage/images/menus/BLUE-OCEAN-MOJITO-1.webp"
                        name="Blue Ocean Mojito"
                    />
                    <ViewItem
                        source="storage/images/menus/TAMAGO-SUSHI.webp"
                        name="Tamogo Sushi"
                    />
                    <ViewItem
                        source="storage/images/menus/KATSU-ROLL.webp"
                        name="Katsu Roll"
                    />
                    <ViewItem
                        source="storage/images/menus/DORY-KATSU-DRY-RAMEN.webp"
                        name="Dory Katsu Dry Ramen"
                    />
                    <ViewItem
                        source="storage/images/menus/SAPPORO-ROLL.webp"
                        name="Sapporo Roll"
                    />
                    <ViewItem
                        source="storage/images/menus/WAKAME-SALAD.webp"
                        name="Wakame Salad"
                    />
                    <ViewItem
                        source="storage/images/menus/AGEDASHI-TOFU.webp"
                        name="Agedashi Tofu"
                    />
                    <ViewItem
                        source="storage/images/menus/TORI-KARAAGE-RAMEN.webp"
                        name="Toori Kaarage Ramen"
                    />
                    <ViewItem
                        source="storage/images/menus/SESAME-SALAD.webp"
                        name="Sesame Salad"
                    />
                    <ViewItem
                        source="storage/images/menus/TUNA-TARTAR-ROLL.webp"
                        name="Tuna Tartar Roll"
                    />
                </div>
            </div>
            <div
                data-aos="flip-right"
                className="flex justify-center -mt-16 mb-5"
            >
                <button
                    type="button"
                    className="new-font text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                >
                    View All
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default View;
