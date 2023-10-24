import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

//component
//button type component
import ButtonType from "../Components/Crud/ButtonType";

export default function Dashboard({ auth }) {
    // const [selectedButton, setSelectedButton] = useState<number>(1);

    // const handleButtonClick = (id) => {
    //     setSelectedButton(id);
    //   }

    //baca semua data makanan
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
        fetchData();
    }, []);

    //untuk delete
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleDelete = (menu) => {
        setShowConfirmation(true);
        setSelectedMenu(menu);
    };

    const handleConfirmDelete = async () => {
        try {
            // Define the API endpoint URL for model deletion
            const apiUrl = `/api/delete-model/${selectedMenu.id}`;

            const response = await axios.delete(apiUrl, {
                headers: {
                    "Content-Type": "application/json",
                    // Add any other headers your API requires
                },
            });

            if (response.status === 200) {
                // Request was successful
                console.log("Model deleted successfully");
                // Handle any response data as needed

                // Close the confirmation dialog
                setShowConfirmation(false);
                setSelectedMenu(null);
            } else {
                // Request failed
                console.error("Model deletion failed");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }

        setShowConfirmation(false);
        setSelectedMenu(null);
    };

    //create new menu
    const initialNewMenuState = {
        name_menu: "",
        menu_price: 0,
        menu_desc: "",
        menu_image: null, // Use null or an initial image value
        menu_type: "",
    };

    const [newMenu, setNewMenu] = useState(initialNewMenuState);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleCreate = async () => {
        // Define the API endpoint URL for creating a new menu item
        const apiUrl = "/api/create-menu"; // Replace with your actual API endpoint

        try {
            const response = await axios.post(
                apiUrl,
                {
                    name_menu: newMenu.name_menu,
                    menu_price: newMenu.menu_price,
                    menu_desc: newMenu.menu_desc,
                    menu_image: newMenu.menu_image,
                    menu_type: newMenu.menu_type,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        // Add any other headers your API requires
                    },
                },
            );

            if (response.status === 201) {
                // Item created successfully
                console.log("Menu item created successfully");
                // You can also update the state with the newly created item
                // Close the create form
                setShowCreateForm(false);
                setNewMenu(initialNewMenuState); // Reset the form fields
            } else {
                // Creation failed
                console.error("Menu item creation failed");
            }
        } catch (error) {
            // Handle network errors
            console.error("An error occurred:", error);
        }
    };

    // untuk edit form
    const [showEditForm, setShowEditForm] = useState(false);
    const [editedMenu, setEditedMenu] = useState(null);

    const handleEdit = (menu) => {
        setEditedMenu({ ...menu }); // Copy the menu data to the edit form
        setShowEditForm(true);
    };

    const handleConfirmEdit = async () => {
        // Send an API request to update the edited menu
        if (editedMenu) {
            // Define the API endpoint URL for editing
            const apiUrl = `/api/edit-model/${editedMenu.id}`;
            console.log("editedMenu:", editedMenu);

            try {
                const response = await axios.put(apiUrl, editedMenu, {
                    headers: {
                        "Content-Type": "application/json",
                        // Add any other headers your API requires
                    },
                });

                if (response.status === 200) {
                    // Request was successful
                    console.log("Model edited successfully");
                    // Handle any response data as needed

                    // Close the edit form
                    setShowEditForm(false);
                    setEditedMenu(null);
                } else {
                    // Request failed
                    console.error("Model editing failed");
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Restoran IF330B - Sushi King
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div>
                            {/* ini header untuk admin */}
                            <div className="bg-white w-full mt-4">
                                <h1 className="text-3xl text-center mt-2">
                                    Admin Page
                                </h1>
                                <div className="flex gap-2 justify-center mt-8">
                                    <ButtonType
                                        //isSelected={isButtonSelected}
                                        buttonName="All Menu"
                                    />
                                    <ButtonType
                                        //isSelected={isButtonSelected}
                                        buttonName="Sushi Roll"
                                    />
                                    <ButtonType
                                        //isSelected={isButtonSelected}
                                        buttonName="Sashimi"
                                    />
                                    <ButtonType
                                        //isSelected={isButtonSelected}
                                        buttonName="Nigiri"
                                    />
                                    <ButtonType
                                        //isSelected={isButtonSelected}
                                        buttonName="Donburi"
                                    />
                                    <ButtonType
                                        //isSelected={isButtonSelected}
                                        buttonName="Bento"
                                    />
                                    <ButtonType
                                        //isSelected={isButtonSelected}
                                        buttonName="Ramen"
                                    />
                                    <ButtonType
                                        //isSelected={isButtonSelected}
                                        buttonName="Teppanyaki"
                                    />
                                    <ButtonType
                                        //isSelected={isButtonSelected}
                                        buttonName="Appetizer"
                                    />
                                    <ButtonType
                                        //isSelected={isButtonSelected}
                                        buttonName="Dessert"
                                    />
                                    <ButtonType
                                        //isSelected={isButtonSelected}
                                        buttonName="Drink"
                                    />
                                </div>
                                <div className="text-center">
                                    <h1 className="text-2xl mt-4">
                                        Tabel Menu
                                    </h1>
                                    <button
                                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                                        onClick={() => setShowCreateForm(true)}
                                    >
                                        Create New Menu Item
                                    </button>
                                </div>
                            </div>

                            <div className="text-center mt-12">
                                {/* tabel menu */}
                                <div className="flex flex-wrap justify-around gap-8 ">
                                    {menus.length > 0 ? (
                                        menus.map((menu) => (
                                            <div
                                                key={menu.id}
                                                className="bg-white shadow-lg rounded-lg overflow-hidden w-96 p-4"
                                            >
                                                <h1 className="text-xl font-semibold">
                                                    {menu.name_menu}
                                                </h1>
                                                <img
                                                    src={`/images/menus/${menu.img_menu}`}
                                                    alt=""
                                                />
                                                <p className="text-gray-600">
                                                    {menu.price}
                                                </p>
                                                <p className="text-gray-600">
                                                    {menu.type_menu}
                                                </p>
                                                <p className="text-gray-600">
                                                    {menu.desc_menu}
                                                </p>
                                                <div className="flex justify-around gap-2">
                                                    <button
                                                        className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform hover:scale-105"
                                                        onClick={() =>
                                                            handleEdit(menu)
                                                        }
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="w-1/2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform hover:scale-105"
                                                        onClick={() =>
                                                            handleDelete(menu)
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Menu is Empty</p>
                                    )}
                                    {showConfirmation && (
                                        <div className="fixed inset-0 flex items-center justify-center z-50">
                                            <div className="fixed inset-0 bg-black opacity-60"></div>{" "}
                                            {/* Background dim */}
                                            <div className="bg-white p-4 rounded-lg shadow-md text-center relative">
                                                {" "}
                                                {/* Relative position for stacking */}
                                                <p>
                                                    Are you sure you want to
                                                    delete "
                                                    {selectedMenu.name_menu}"?
                                                </p>
                                                <button
                                                    className="bg-red-500 text-white px-4 py-2 rounded-md m-2"
                                                    onClick={
                                                        handleConfirmDelete
                                                    }
                                                >
                                                    Yes, delete
                                                </button>
                                                <button
                                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md m-2"
                                                    onClick={() =>
                                                        setShowConfirmation(
                                                            false,
                                                        )
                                                    }
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {/* edit form */}
                                    {showEditForm && (
                                        <div className="fixed inset-0 flex items-center justify-center z-50">
                                            <div className="fixed inset-0 bg-black opacity-60"></div>{" "}
                                            {/* Background dim */}
                                            <div className="bg-white p-4 rounded-lg shadow-md text-center relative">
                                                <p className="text-xl font-semibold mb-4">
                                                    Edit Menu:{" "}
                                                    {editedMenu.name_menu}
                                                </p>
                                                <form>
                                                    <div className="mb-3">
                                                        <input
                                                            type="text"
                                                            value={
                                                                editedMenu.name_menu
                                                            }
                                                            onChange={(e) =>
                                                                setEditedMenu({
                                                                    ...editedMenu,
                                                                    name_menu:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            placeholder="New Name"
                                                            className="w-full p-2 border rounded"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="number"
                                                            value={
                                                                editedMenu.price
                                                            }
                                                            onChange={(e) =>
                                                                setEditedMenu({
                                                                    ...editedMenu,
                                                                    price: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                            placeholder="New Price"
                                                            className="w-full p-2 border rounded"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <textarea
                                                            value={
                                                                editedMenu.desc_menu
                                                            }
                                                            onChange={(e) =>
                                                                setEditedMenu({
                                                                    ...editedMenu,
                                                                    desc_menu:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            placeholder="New Description"
                                                            className="w-full p-2 border rounded"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="file"
                                                            onChange={(e) => {
                                                                const file =
                                                                    e.target
                                                                        .files[0];
                                                                // Handle the selected file (e.g., upload it to the server)
                                                            }}
                                                            className="w-full p-2 border rounded"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="text"
                                                            value={
                                                                editedMenu.type_menu
                                                            }
                                                            onChange={(e) =>
                                                                setEditedMenu({
                                                                    ...editedMenu,
                                                                    type_menu:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            placeholder="New Type"
                                                            className="w-full p-2 border rounded"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <button
                                                            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                                                            onClick={
                                                                handleConfirmEdit
                                                            }
                                                        >
                                                            Save Changes
                                                        </button>
                                                        <button
                                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                                                            onClick={() => {
                                                                setShowEditForm(
                                                                    false,
                                                                );
                                                                setEditedMenu(
                                                                    null,
                                                                );
                                                            }}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )}
                                    {/* create new menu form */}
                                    {showCreateForm && (
                                        <div className="fixed inset-0 flex items-center justify-center z-50">
                                            <div className="fixed inset-0 bg-black opacity-60"></div>{" "}
                                            {/* Background dim */}
                                            <div className="bg-white p-4 rounded-lg shadow-md text-center relative">
                                                <p className="text-xl font-semibold mb-4">
                                                    Create New Menu Item
                                                </p>
                                                <form>
                                                    <div className="mb-3">
                                                        <input
                                                            type="text"
                                                            value={
                                                                newMenu.name_menu
                                                            }
                                                            onChange={(e) =>
                                                                setNewMenu({
                                                                    ...newMenu,
                                                                    name_menu:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            placeholder="Name"
                                                            className="w-full p-2 border rounded"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="number"
                                                            value={
                                                                newMenu.menu_price
                                                            }
                                                            onChange={(e) =>
                                                                setNewMenu({
                                                                    ...newMenu,
                                                                    menu_price:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            placeholder="Price"
                                                            className="w-full p-2 border rounded"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <textarea
                                                            value={
                                                                newMenu.menu_desc
                                                            }
                                                            onChange={(e) =>
                                                                setNewMenu({
                                                                    ...newMenu,
                                                                    menu_desc:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            placeholder="Description"
                                                            className="w-full p-2 border rounded"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="file"
                                                            onChange={(e) =>
                                                                setNewMenu({
                                                                    ...newMenu,
                                                                    menu_image:
                                                                        e.target
                                                                            .files[0],
                                                                })
                                                            }
                                                            className="w-full p-2 border rounded"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="text"
                                                            value={
                                                                newMenu.menu_type
                                                            }
                                                            onChange={(e) =>
                                                                setNewMenu({
                                                                    ...newMenu,
                                                                    menu_type:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            placeholder="Type"
                                                            className="w-full p-2 border rounded"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <button
                                                            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                                                            onClick={
                                                                handleCreate
                                                            }
                                                        >
                                                            Create
                                                        </button>
                                                        <button
                                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                                                            onClick={() => {
                                                                setShowCreateForm(
                                                                    false,
                                                                );
                                                                setNewMenu(
                                                                    initialNewMenuState,
                                                                ); // Reset the form fields
                                                            }}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
