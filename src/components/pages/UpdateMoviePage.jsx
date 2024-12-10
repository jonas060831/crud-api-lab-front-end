import React, { useEffect } from 'react'

const UpdateMoviePage = ({ movie }) => {

  

  useEffect(() => {}, [movie])

  return (
    <div>
        <h3>Update {movie.title}</h3>
    </div>
  )
}

export default UpdateMoviePage