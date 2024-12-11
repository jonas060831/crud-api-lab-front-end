import React, { useState } from 'react'

//i need to fetch the movies
//reading the documentation on https://vite.dev/guide/env-and-mode format VITE_<ENV_KEY_NAME>
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL


const UpdateMoviePage = ({ movie, handleSetMovie, handleFetchMovies }) => {


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

    try {
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
      handleFetchMovies()
      alert(`${jsonData.title} has been updated!`)
    }
    } catch (error) {
      alert(`Error: ${error.message}`)
    }
  }

  const handleDeleteMovie = async(event) => {
    console.log(event)
    event.preventDefault()
    try {
      const response = await fetch(`${BASE_URL}/movies/${movie._id}`, {
        method: 'DELETE',
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })

      if(response.ok) {
        const jsonData = await response.json()
        handleFetchMovies()
        alert(`${jsonData.title} has been deleted`)
        

        //this will trigger return on the list of movies
        handleSetMovie([])
      }

    } catch (error) {
      alert(`Error: ${error.message}`)
    }
  }

  return (
    <div>
        <h3><span onClick={() => handleSetMovie() } style={{cursor: 'pointer'}} > <i className="fa-solid fa-chevron-left"></i> </span>&nbsp;&nbsp;&nbsp;  Update {updatedMovie.title}</h3>

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
        
        <form onSubmit={handleDeleteMovie}>
          <button style={{ backgroundColor: 'red', width: '100%', height: '3rem', color: 'white' }} >Delete</button>
        </form>

    </div>
  )
}

export default UpdateMoviePage