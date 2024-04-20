import React from 'react'

const Comment = ({data}) => {
  const {name, text, replies} = data;
    return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img
          className="h-8 cursor-pointer"
          alt="user-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Round_account_circle_black_24dp.png"
        />
        <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>

  )
}

export default Comment