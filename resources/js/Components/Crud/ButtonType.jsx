import React from 'react'

export default function ButtonType(props) {
  return (
    <button className={`px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300 ${props.isSelected ? 'bg-blue-600' : 'bg-blue-500'}`}>{props.buttonName}</button>
  )
}
