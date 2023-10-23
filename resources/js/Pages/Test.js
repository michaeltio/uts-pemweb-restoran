import React, { useEffect, useState } from "react";
import axios from "axios";

export default function test() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/menus");
                setMenu(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome to the Menu Page</h1>
            <ul>
                {menu.map((item) => (
                    <li key={item.id}>{item.name_menu}</li>
                ))}
            </ul>
        </div>
    );
}
