import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="col-span-10 overflow-x-auto mx-auto flex flex-col items-center">
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer