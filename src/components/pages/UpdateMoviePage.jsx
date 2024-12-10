import React, { useState } from 'react'

//i need to fetch the movies
//reading the documentation on https://vite.dev/guide/env-and-mode format VITE_<ENV_KEY_NAME>
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL


const UpdateMoviePage = ({ movie }) => {


  const [updatedMovie, setUpdatedMovie] = useState(movie)

  const handleInputChange = (event) => {

    setUpdatedMovie(prevValue => {
      return {...prevValue, [event.target.name] : event.target.value}
    })
  }

  const handleSubmit = async(event) => {

    event.preventDefault()
    
    // console.log(updatedMovie)

    //console.log(movie._id)

    const response = await fetch(`${BASE_URL}/movies/${movie._id}`,{
        method: "PUT",
        body: JSON.stringify(updatedMovie),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    if(response.ok) {
      const jsonData = await response.json()

      alert(`${jsonData.title} has been updated!`)
    }
  }

  return (
    <div>
        <h3>Update {movie.title}</h3>

        <br /><br />
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap:'2rem', flexDirection: 'column' }}>
             
             <div>
                <label htmlFor="title">Title:</label> <br />
                <input type="text" name='title' id='title' onChange={handleInputChange} defaultValue={updatedMovie.title}/>
             </div>

             <div>
                <label htmlFor="genre">Genre:</label> <br />
                <input type="text" name='genre' id='genre' onChange={handleInputChange} defaultValue={updatedMovie.genre}/>
             </div>

             <div>
                <label htmlFor="description">Description:</label> <br />
                <textarea type="text" name='description' id='description' onChange={handleInputChange} defaultValue={updatedMovie.description}></textarea>
             </div>

             <div>
                <label htmlFor="rating">Rating: {updatedMovie.rating}</label>
                <input
                 type="range"
                 name="rating"
                 id="rating"
                 step={0.1}
                 onChange={handleInputChange}
                 defaultValue={updatedMovie.rating}
                 max={10}

                />
             </div>

             <div>
                <label htmlFor="releaseYear">Release Year:</label>
                <input type="text" name="releaseYear" id="releaseYear" onChange={handleInputChange} defaultValue={updatedMovie.releaseYear}/>
             </div>

             <div>
                <label htmlFor="language">Language:</label>
                <input type="text" name='language' id='language' onChange={handleInputChange} defaultValue={updatedMovie.language}/>
             </div>

            <button type='submit'>Update</button>
        </form>
        <br /><br />
        <button>Delete</button>

    </div>
  )
}

export default UpdateMoviePage