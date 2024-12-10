import React, { useState, useEffect } from 'react'

//reading the documentation on https://vite.dev/guide/env-and-mode format VITE_<ENV_KEY_NAME>
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL


import styles from './Navbar.module.css'

const Navbar = ({ getMovies, views, handleViewChange }) => {
  const [movies, setMovies] = useState([])

  const fetchAllMovies = async() => {
    
    // https://vite.dev/guide/env-and-mode vite documentation to use env variables

    let response = await fetch(`${BASE_URL}/movies`)
    let jsonData = await response.json()
    setMovies(jsonData)

    getMovies(jsonData)
  }

  useEffect(() => {

    fetchAllMovies()

  },[])

  return (
    <nav className={styles.navbar}>

        <ul>
          {
            views.map(view => (
              <li
               onClick={event => handleViewChange(event) }
               key={view.id}
               id={view.id}
              >
                {view.title}
              </li>
            ))
          }
        </ul>


    </nav>
  )
}

export default Navbar