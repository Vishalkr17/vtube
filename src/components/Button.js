import React from 'react'

const Button = ({name, isActive, onClick}) => {
  return (
    <div className='whitespace-nowrap'>
        <button
         className={`px-5 py-1 m-2 cursor-pointer w-fit rounded-lg  transition duration-200 ease-in-out ${isActive ? 'bg-black text-white' :'bg-gray-100 hover:bg-gray-200'}`}
         onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button