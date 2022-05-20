import React from 'react'
import Favorites from '../components/Favorites'
import Movies from '../components/Movies'

const MainPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Movies />
      <Favorites />
    </div>
  )
}

export default MainPage