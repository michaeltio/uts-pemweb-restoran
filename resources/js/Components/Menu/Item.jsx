import { useEffect, useState } from "react";
import Picture from "../../../../public/storage/images/menus/AGEDASHI-TOFU.webp";

export default function Item({ menus }) {
    const [showInfo, setShowInfo] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState({
        menuName: "",
        menuDesc: "",
        menuPrice: 0,
    });

    const handleMenuClick = (menuName, menuDesc, menuPrice) => {
        setShowInfo(true);
        setSelectedMenu({
            menuName: menuName,
            menuDesc: menuDesc,
            menuPrice: menuPrice,
        });
    };
    const handleCloseClick = () => {
        setShowInfo(true);
    };
    return (
        <>
            {menus.map((menu, index) => (
                <article
                    key={index}
                    onClick={() =>
                        handleMenuClick(
                            menu.name_menu,
                            menu.desc_menu,
                            menu.price
                        )
                    }
                    className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
                >
                    <a href="#">
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                            <img
                                onError={(e) => {
                                    e.target.src =
                                        "storage/images/menus/DEFAULT_MENU.webp";
                                }}
                                alt=""
                                src={`storage/images/menus/${menu.img_menu}`}
                            />
                        </div>

                        <div className="mt-1 p-2">
                            <h2 className="text-slate-700 text-xl">
                                {menu.name_menu}
                            </h2>
                            <div className="mt-3 flex items-end justify-between">
                                <p className="text-lg font-bold text-red-500">
                                    Rp {menu.price.toLocaleString("id-ID")}
                                </p>

                                <div className="flex items-center space-x-1.5 rounded-lg bg-red-500 px-3 py-1.5 text-white duration-100 hover:bg-red-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                    <button className="text-xs">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
            ))}
            {showInfo && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-60"></div>{" "}
                    <div className="relative p-4">
                        <div className="relative bg-white rounded-lg shadow">
                            <button
                                type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-red-500 hover:bg-red-500 hover:text-gray-50 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                onClick={() => setShowInfo(false)}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke-width="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 mx-auto lg:py-0">
                                <div className="w-full">
                                    <img
                                        className="w-full"
                                        src={Picture}
                                        alt="drawing"
                                    />
                                </div>
                                <div className="w-full md:px-8 md:max-w-md sm:max-w-sm">
                                    <div>
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-4">
                                            {selectedMenu.menuName}
                                        </h1>
                                        <p className="text-sm mb-8">
                                            {selectedMenu.menuDesc}
                                        </p>
                                        <p className="text-xl mb-4">
                                            Rp
                                            {selectedMenu.menuPrice.toLocaleString(
                                                "id-ID"
                                            )}
                                        </p>
                                    </div>
                                    <a
                                        href="#_"
                                        className="relative inline-block text-lg group"
                                    >
                                        <button className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                            <span className="absolute inset-0 w-full h-full px-4 py-2 rounded-lg bg-gray-50"></span>
                                            <span className="absolute left-0 w-44 h-44 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                            <span className="relative">
                                                Add to Cart
                                            </span>
                                        </button>
                                        <span
                                            className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                                            data-rounded="rounded-lg"
                                        ></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
