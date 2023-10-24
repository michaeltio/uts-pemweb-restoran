import React, { useEffect, useState } from "react";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Components/Home/Footer.jsx";
import Filter from "../Components/Menu/Filter.jsx";
import "../../css/menu.css";
import Picture from "../../../public/images/assets/sushi-3.jpg";
import Item from "@/Components/Menu/Item.jsx";

function Menu({ auth }) {
    const [showInfo, setShowInfo] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredMenus, setFilteredMenus] = useState([]);
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/menus");
                setMenus(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (fetchData.length) return;
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            const newFilteredMenus = menus.filter(
                (menu) => menu.type_menu === selectedCategory
            );
            setFilteredMenus(newFilteredMenus);
        } else {
            setFilteredMenus(menus); // Show all items if no category is selected
        }
    }, [selectedCategory, menus]);

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    };
    return (
        <div className="">
            <Navbar loggedIn={auth.user} isAdmin={auth.user.isAdmin} />
            <div className="pt-2">
                <h1 className="text-center text-3xl font-bold text-gray-800">
                    Menu
                </h1>
            </div>

            <section className="mx-14 new-font">
                <div className="container px-6 py-8 mx-auto">
                    <div className="lg:flex lg:-mx-2">
                        <div className="hidden lg:block space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                            <p className="block text-2xl font-bold tracking-wide text-black-800">
                                Categories
                            </p>
                            <a
                                onClick={() => handleCategoryClick("Appetizer")}
                                className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                            >
                                Appetizer
                            </a>
                            <a
                                onClick={() => handleCategoryClick("Bento")}
                                className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                            >
                                Bento
                            </a>
                            <a
                                onClick={() => handleCategoryClick("Donburi")}
                                className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                            >
                                Donburi
                            </a>
                            <a
                                onClick={() => handleCategoryClick("Nigiri")}
                                className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                            >
                                Nigiri
                            </a>
                            <a
                                onClick={() => handleCategoryClick("Ramen")}
                                className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                            >
                                Ramen
                            </a>
                            <a
                                onClick={() => handleCategoryClick("Sashimi")}
                                className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                            >
                                Sashimi
                            </a>
                            <a
                                onClick={() =>
                                    handleCategoryClick("Sushi Roll")
                                }
                                className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                            >
                                Sushi Roll
                            </a>
                            <a
                                onClick={() =>
                                    handleCategoryClick("Teppanyaki")
                                }
                                className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                            >
                                Teppanyaki
                            </a>
                            <a
                                onClick={() => handleCategoryClick("Drinks")}
                                className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                            >
                                Drinks
                            </a>
                            <a
                                onClick={() => handleCategoryClick("Dessert")}
                                className="block font-medium text-gray-500 active:text-blue-600 hover:underline"
                            >
                                Dessert
                            </a>
                        </div>
                        <div className="block lg:hidden grid grid-cols-1 space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                            <p className="block text-2xl font-bold tracking-wide text-black-800 -mb-12">
                                Categories
                            </p>
                            <hr className="mt-2 mb-2" />
                            <div className="h-32">
                                <Filter />
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                            <div className="flex flex-col sm:flex-row items-center justify-between text-sm tracking-widest uppercase ">
                                <div className="flex flex-col sm:flex-row items-center"></div>
                            </div>

                            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                <Item menus={filteredMenus} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
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
                                            Ramen
                                        </h1>
                                        <p className="text-sm mb-8">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Animi,
                                            illum atque eos doloremque labore
                                            qui dolorem alias consectetur
                                            veritatis.
                                        </p>
                                        <p className="text-xl mb-4">100$</p>
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
            <Footer />
        </div>
    );
}

export default Menu;
