import React, { useEffect, useState } from 'react';
import axios from 'axios';

//component
//button type component
import ButtonType from "../Components/Crud/ButtonType"

//import "../../../public/images/menus/"
export default function Admin(){
	const [menus, setMenus] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    '/api/menus'
                );
            setMenus(response.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchData();
    }, []);

    // const [selectedButton, setSelectedButton] = useState<number>(1);

    // const handleButtonClick = (id) => {
    //     setSelectedButton(id);
    //   }


    //untuk delete
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleDelete = (menu) => {
        setShowConfirmation(true);
        setSelectedMenu(menu);
    };

    // State for controlling the edit form
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
      console.log('editedMenu:', editedMenu);

      try {
        const response = await axios.put(apiUrl, editedMenu, {
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers your API requires
          },
        });

        if (response.status === 200) {
          // Request was successful
          console.log('Model edited successfully');
          // Handle any response data as needed

          // Close the edit form
          setShowEditForm(false);
          setEditedMenu(null);
        } else {
          // Request failed
          console.error('Model editing failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  };

    const handleConfirmDelete = async () => {
        try {
            // Define the API endpoint URL for model deletion
            const apiUrl = `/api/delete-model/${selectedMenu.id}`;
            
            const response = await axios.delete(apiUrl, {
              headers: {
                'Content-Type': 'application/json',
                // Add any other headers your API requires
              },
            });
      
            if (response.status === 200) {
              // Request was successful
              console.log('Model deleted successfully');
              // Handle any response data as needed
      
              // Close the confirmation dialog
              setShowConfirmation(false);
              setSelectedMenu(null);
            } else {
              // Request failed
              console.error('Model deletion failed');
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }

        setShowConfirmation(false);
        setSelectedMenu(null);
    };
  return (
    <div>
        <h1 className='text-3xl text-center mt-8'>Restoran IF330B - 2</h1> 
        <h1 className='text-3xl text-center mt-2'>Admin Page</h1>
        <div className='flex gap-2 justify-center mt-8'>
            {/* <ButtonType isSelected={isButtonSelected} buttonName="All Menu"/> */}
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">All Menu</button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">Nigiri</button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">Sashimi</button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">Sushi Roll</button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">Donburi</button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">Appetizer</button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">Dessert</button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">Drink</button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">Bento</button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">teppanyaki</button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">Ramen</button>
        </div>
        {/* tabel menu */}
        <div className='text-center'>
            <h1 className='text-2xl mt-4'>Tabel Menu</h1>
            <div className='flex flex-wrap justify-around gap-8'>
                {menus.length > 0 ? (
                    menus.map(menu => (
                        <div key={menu.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-96 p-4">
                            <h1 className="text-xl font-semibold">{menu.name_menu}</h1>
                            <img src={`/images/menus/${menu.img_menu}`}  alt="" />
                            <p className="text-gray-600">{menu.price}</p>
                            <p className="text-gray-600">{menu.type_menu}</p>
                            <p className="text-gray-600">{menu.desc_menu}</p>
                            <div className='flex justify-around gap-2'>
                                <button className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform hover:scale-105" onClick={() => handleEdit(menu)}>Edit</button>
                                <button className="w-1/2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform hover:scale-105" onClick={() => handleDelete(menu)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Menu is Empty</p>
                )}
            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <p>Are you sure you want to delete "{selectedMenu.name_menu}"?</p>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-md m-2"
                            onClick={handleConfirmDelete}
                        >
                        Yes, delete
                        </button>
                        <button
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md m-2"
                            onClick={() => setShowConfirmation(false)}
                        >
                        Cancel
                        </button>
                    </div>
                </div>
            )}
            {showEditForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    {/* Create a form for editing the model */}
                    <p>Edit Model: {editedMenu.name_menu}</p>
                    <input
                        type="text"
                        value={editedMenu.name_menu}
                        onChange={(e) => setEditedMenu({ ...editedMenu, name_menu: e.target.value })}
                        placeholder="New Name"
                    />
                    {/* Add other form fields for editing */}
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md m-2"
                        onClick={handleConfirmEdit}
                    >
                        Save Changes
                    </button>
                    <button
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md m-2"
                        onClick={() => {
                            setShowEditForm(false);
                            setEditedMenu(null);
                    }}
                    >
                        Cancel
                    </button>
                </div>
                </div>
            )}
            </div>
        </div>
    </div>
  );
}