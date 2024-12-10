import React, { useEffect, useState } from 'react'

import './HomePage.css'

//i need to fetch the movies
//reading the documentation on https://vite.dev/guide/env-and-mode format VITE_<ENV_KEY_NAME>
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL

const HomePage = ({ handleFetchMovies, handleViewChange, handleSelectedMovie  }) => {

  const [movies, setMovies ] = useState([])
  const fetchAllMovies = async() => {
    
    // https://vite.dev/guide/env-and-mode vite documentation to use env variables

    let response = await fetch(`${BASE_URL}/movies`)
    let jsonData = await response.json()
    handleFetchMovies(jsonData)
    setMovies(jsonData)
  }

  useEffect(() => {

    fetchAllMovies()

  },[])


  const handleTwoFunctions = (event, movie) => {

    event.target.id = 2
    handleViewChange(event)

    handleSelectedMovie(movie)
  }

  return (
    <div>
      <h2>Welcome to Our new Movie Tracker App</h2>
      <br /><br />
        {
          movies.length === 0 ?
          (
            <div>Loading...</div>
          ):(

              <ul className='movies-container'>
                {
                  movies.map((movie, indx) => (
                    <li
                     className="movie-card"
                     key={indx}
                     id={movie.id}
                     onClick={(event) => handleTwoFunctions(event, movie) } >
                      <h3>{movie.title}</h3> <br />
                    </li>
                  ))
                }
              </ul>
          )
        }
    </div>
  )
}

export default HomePage