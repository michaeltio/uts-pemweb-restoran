import React, { useState } from "react";

export default function Item({ orders }) {
    return (
        <>
            {orders.map((menu) => {
                return (
                    <div
                        key={menu.id}
                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                    >
                        <img
                            src={`storage/images/menus/${menu.img_menu}`}
                            onError={(e) => {
                                e.target.src =
                                    "storage/images/menus/DEFAULT_MENU.webp";
                            }}
                            alt="product-image"
                            className="w-full rounded-lg sm:w-40"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0">
                                <h2 className="text-lg font-bold text-gray-900">
                                    {menu.name_menu}
                                </h2>
                                <p className="mt-1 mr-2 text-xs text-gray-700">
                                    {menu.desc_menu}
                                </p>
                            </div>
                            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div className="flex items-center">
                                    <p className="mr-2 text-xs">
                                        Rp {menu.price.toLocaleString("id-ID")}
                                    </p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
