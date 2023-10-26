import { useEffect, useState } from "react";
import Picture from "../../../../public/storage/images/menus/AGEDASHI-TOFU.webp";
import axios from "axios";

export default function Item({ menus }) {
    const [showInfo, setShowInfo] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState({
        menuName: "",
        menuDesc: "",
        menuPrice: 0,
        menuSrc: "",
    });

    //ini untuk cart
    const [orderMenu, setOrderMenu] = useState({
        menuName: "",
        menuPrice: 0,
    });

    const handleMenuClick = (menuName, menuDesc, menuPrice, menuSrc, event) => {
        setShowInfo(true);
        setSelectedMenu({
            menuName: menuName,
            menuDesc: menuDesc,
            menuPrice: menuPrice,
            menuSrc: menuSrc,
        });
    };

    const handleOrder = async (menuName, menuPrice) => {
        const apiUrl = "/api/order";

        const formOrder = new FormData();
        //formOrder.append("user_id", 1);
        formOrder.append("name_menu", menuName);
        formOrder.append("price", menuPrice);
        console.log(menuName, menuPrice);
        try {
            const response = await axios.post(apiUrl, formOrder, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 201) {
                // Order created successfully
                //console.log(response.data);
                // You can also update the state or take other actions
            } else {
                // Creation failed
                //console.log(response.data);
            }
        } catch (error) {
            // Handle network errors
            console.error("An error occurred:", error);
        }
        setShowInfo(false);
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
                            menu.price,
                            menu.img_menu
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
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-500 hover:text-gray-50 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                onClick={() => setShowInfo(false)}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 mx-auto lg:py-0">
                                <div className="w-full">
                                    <img
                                        className="w-full"
                                        src={`storage/images/menus/${selectedMenu.menuSrc}`}
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
                                    <div className="flex gap-8">
                                        <a
                                            href="#_"
                                            className="relative inline-block text-lg group"
                                        >
                                            <button
                                                className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white"
                                                onClick={() =>
                                                    setShowInfo(false)
                                                }
                                            >
                                                <span className="absolute inset-0 w-full h-full px-4 py-2 rounded-lg bg-gray-50"></span>
                                                <span className="absolute left-0 w-44 h-44 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                                <span className="relative">
                                                    Close
                                                </span>
                                            </button>
                                            <span
                                                className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                                                data-rounded="rounded-lg"
                                            ></span>
                                        </a>
                                        <a
                                            href="#_"
                                            className="relative inline-block text-lg group"
                                        >
                                            <button
                                                className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white"
                                                onClick={() =>
                                                    handleOrder(
                                                        selectedMenu.menuName,
                                                        selectedMenu.menuPrice
                                                    )
                                                }
                                            >
                                                <span className="absolute inset-0 w-full h-full px-4 py-2 rounded-lg bg-gray-50 bg-orange-400"></span>
                                                <span className="absolute left-0 w-44 h-44 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-500 group-hover:-rotate-180 ease"></span>
                                                <span className="relative">
                                                    Order
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
                </div>
            )}
        </>
    );
}
