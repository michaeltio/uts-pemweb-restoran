import React, { useEffect, useState } from "react";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Components/Home/Footer.jsx";
import Filter from "../Components/Menu/Filter.jsx";
import "../../css/menu.css";
import Picture from "../../../public/images/assets/sushi-3.jpg";
import Item from "@/Components/Menu/Item.jsx";

function Menu({ auth }) {
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
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            <Footer />
        </div>
    );
}

export default Menu;
