import React from "react";

export default function ButtonType({ id, onClick, isSelected, buttonName }) {
    return (
        <button
            onClick={() => onClick(id)}
            className={`rounded-md px-4 py-2 m-2 focus:outline-none ${
                isSelected
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-black"
            }`}
        >
            {buttonName}
        </button>
    );
}
