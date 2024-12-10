import React, { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import ContentView from './components/ContentView'


{/*

  PLAN

C TAB NAME = +  
R TAB NAME = Home
U CLICKING THE LI ON THE LIST OF MOVIES WILL SHOW A FORM POPULATED WITH VALUES BASE ON THE ID
D IN THE FORM UPDATE THERE IS A BUTTON TO SEND A DELETE REQUEST

*/}

//i need to fetch the movies
const App = () => {

  const [movies, setMovies] = useState([])
  
  const views = [
    { title: "Home", content: "Home Page Component", id: 0 },
    { title: "Add", content: "Add new Component", id: 1 }
  ];

  const [view, setView] = useState(views[0])


  const handleGetMovies = (movies) => {
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
       getMovies={handleGetMovies}
       views={views}
      />

      <ContentView
       view={view}
      />
      
    </div>
  )
}

export default App