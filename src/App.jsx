import React, { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import ContentView from './components/ContentView'
import HomePage from './components/pages/HomePage'
import AddNewMovie from './components/pages/AddNewMovie'
import UpdateMoviePage from './components/pages/UpdateMoviePage'


{/*

  PLAN

C TAB NAME = +  
R TAB NAME = Home
U CLICKING THE LI ON THE LIST OF MOVIES WILL SHOW A FORM POPULATED WITH VALUES BASE ON THE ID
D IN THE FORM UPDATE THERE IS A BUTTON TO SEND A DELETE REQUEST

*/}




const App = () => {

  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})
  
  const views = [
    { 
      title: "Home",
      content: <HomePage
          movies={movies}
          handleFetchMovies={handleFetchMovies}
        />,
      id: 0
    },
    { 
      title: "Add Movie",
      content: <AddNewMovie
          handleViewChange={handleViewChange}
        />,
      id: 1
    },
    {
      title: "Update Movie",
      content: <UpdateMoviePage 
          movie={movie}
       />,
      id: 2
    }
  ];
  const [view, setView] = useState(views[0])

  function handleFetchMovies(movies) {
    setMovies(movies)
  }

  function handleViewChange (event) {
    const viewId = event.target.id
    setView(views[viewId])

  }

  function handleSelectedMovie(selectedMovie){
    console.log('movie in App.js', selectedMovie)
    setMovie(selectedMovie)
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