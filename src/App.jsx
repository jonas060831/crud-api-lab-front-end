import React, { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import ContentView from './components/ContentView'
import HomePage from './components/pages/HomePage'


{/*

  PLAN

C TAB NAME = +  
R TAB NAME = Home
U CLICKING THE LI ON THE LIST OF MOVIES WILL SHOW A FORM POPULATED WITH VALUES BASE ON THE ID
D IN THE FORM UPDATE THERE IS A BUTTON TO SEND A DELETE REQUEST

*/}




const App = () => {

  const [movies, setMovies] = useState([])

  const views = [
    { title: "Home", content: <HomePage movies={movies} handleFetchMovies={handleFetchMovies}/>, id: 0 },
    { title: "Add", content: "Add new Component", id: 1 }
  ];
  const [view, setView] = useState(views[0])

 

  function handleFetchMovies(movies) {
    setMovies(movies)
  }

  const handleViewChange = (event) => {
    const viewId = event.target.id

    setView(views[viewId])
  }
  return (
    <div>
      <Navbar
       handleViewChange={handleViewChange}
       views={views}
      />

      <ContentView
       view={view}
      />
      
    </div>
  )
}

export default App