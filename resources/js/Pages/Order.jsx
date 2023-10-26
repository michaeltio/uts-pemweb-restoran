import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/Layouts/Navbar";
import Item from "@/Components/Order/Item";

export default function OrderPage({ auth }) {
    const [orders, setOrders] = useState([]);
    const [orderMenus, setOrderMenus] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios
                    .get(`/api/order/${auth.user.id}`)
                    .then((response) => {
                        setOrders(response.data);
                    });
            } catch (error) {
                console.log(error.data[1]);
            }
        };

        fetchOrders();
    }, [auth.user]);

    return (
        <div className="bg-gray-100">
            <Navbar orders={orders} loggedIn={auth.user} />
            <div className="new-font h-full pt-5">
                <h1 className="mb-10 text-center text-2xl font-bold">
                    Food Items
                </h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        <Item orders={orders} orderMenus={orderMenus} />
                    </div>
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">
                                Rp {totalPrice.toLocaleString("id-ID")}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">PPn</p>
                            <p className="text-gray-700">
                                Rp {(totalPrice * 0.1).toLocaleString("id-ID")}
                            </p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">
                                    Rp{" "}
                                    {(
                                        totalPrice +
                                        totalPrice * 0.1
                                    ).toLocaleString("id-ID")}
                                </p>
                            </div>
                        </div>
                        <button className="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-blue-50 hover:bg-red-600">
                            Check out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
