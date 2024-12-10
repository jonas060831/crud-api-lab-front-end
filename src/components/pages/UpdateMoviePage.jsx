import React, { useEffect, useState } from 'react'

const UpdateMoviePage = ({ movie }) => {


  const [updatedMovie, setUpdatedMovie] = useState()

  const handleInputChange = (event) => {

    setUpdatedMovie(prevValue => {
      return {...prevValue, [event.target.name] : event.target.value}
    })
  }

  const handleSubmit = () => {

  }

  return (
    <div>
        <h3>Update {movie.title}</h3>

        <br /><br />
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap:'2rem', flexDirection: 'column' }}>
             
             <div>
                <label htmlFor="title">Title:</label> <br />
                <input type="text" name='title' id='title' onChange={handleInputChange} defaultValue={movie.title}/>
             </div>

             <div>
                <label htmlFor="genre">Genre:</label> <br />
                <input type="text" name='genre' id='genre' onChange={handleInputChange} defaultValue={movie.genre}/>
             </div>

             <div>
                <label htmlFor="description">Description:</label> <br />
                <textarea type="text" name='description' id='description' onChange={handleInputChange} defaultValue={movie.description}></textarea>
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
                <input type="text" name="releaseYear" id="releaseYear" onChange={handleInputChange} defaultValue={movie.releaseYear}/>
             </div>

             <div>
                <label htmlFor="language">Language:</label>
                <input type="text" name='language' id='language' onChange={handleInputChange} defaultValue={movie.language}/>
             </div>

            <button type='submit'>Update</button>
        </form>

    </div>
  )
}

export default UpdateMoviePage