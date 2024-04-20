import React, { useState } from 'react'
import Button from './Button'


const list = ["All", "Computer Programming", "News", "Action Thrillers", "Film Criticism", "Python", "React Routers",  "Lectures", "Bhajans", "Comedy", " Mantras", "Recently Watched" , " New to you"]

const ButtonList = () => {

  const [startIndex, setStartIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null)
  
  const handleClick = (index) => {
    setActiveButton(index);
  };

  const handleScrollLeft = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleScrollRight = () => {
    setStartIndex(Math.min(list.length - 6, startIndex + 1));
  };

  return (
    <div className='flex'>
      <div className='px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full' onClick={handleScrollLeft}>
        {'<'}
      </div>

      {list.map((name, index) => (
        index >= startIndex && index <= startIndex + 6 && (
        <Button 
          key={index} 
          name={name}
          isActive={ activeButton === index}
          onClick={() => handleClick(index)}
        />
        )
    ))}
      <div className='px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full' onClick={handleScrollRight}>
        {'>'}
      </div>
    </div>
    
  )
}

export default ButtonList