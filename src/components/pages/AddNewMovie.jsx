import React, { useState } from 'react'

import './AddNewMovie.css'


//i need to fetch the movies
//reading the documentation on https://vite.dev/guide/env-and-mode format VITE_<ENV_KEY_NAME>
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL


const AddNewMovie = ({  handleViewChange }) => {

  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    description: '',
    rating: 5,
    releaseYear: '',
  })
  const handleInputChange = (event) => {

    setMovie(prevValue => {
        return {...prevValue, [event.target.name] : event.target.value}
    })
  }

  const handleSubmit = async(event) => {

    event.preventDefault()
    

    // https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/
    //fetch request POST EXAMPLES
    try {
        const response = await fetch(`${BASE_URL}/movies`, {
            method: "POST",
            body: JSON.stringify(movie),
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    

        if(response.ok) {
            const jsonData = await response.json()
    
            alert(`${jsonData.title} is now added to Movie Tracker App`)
            
            
            //go back to the home page
            //hack hehehe
            event.target.id = 0
            handleViewChange(event)
        }
        
    } catch (error) {
        alert(error.message)
    }

  }
  return (
    <div>
        <h3>Add New Movie</h3>

        <br /><br />
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap:'2rem', flexDirection: 'column' }}>
             
             <div>
                <label htmlFor="title">Title:</label> <br />
                <input type="text" name='title' id='title' onChange={handleInputChange}/>
             </div>

             <div>
                <label htmlFor="genre">Genre:</label> <br />
                <input type="text" name='genre' id='genre' onChange={handleInputChange}/>
             </div>

             <div>
                <label htmlFor="description">Description:</label> <br />
                <textarea type="text" name='description' id='description' onChange={handleInputChange}></textarea>
             </div>

             <div>
                <label htmlFor="rating">Rating: {movie.rating}</label>
                <input
                 type="range"
                 name="rating"
                 id="rating"
                 step={0.1}
                 onChange={handleInputChange}
                 defaultValue={movie.rating}
                 max={10}
                />
             </div>

             <div>
                <label htmlFor="releaseYear">Release Year:</label>
                <input type="text" name="releaseYear" id="releaseYear" onChange={handleInputChange}/>
             </div>

             <div>
                <label htmlFor="language">Language:</label>
                <input type="text" name='language' id='language' onChange={handleInputChange}/>
             </div>

            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddNewMovie