import React from 'react'
import {NavLink} from 'react-router-dom'
import {useGlobalContaxt} from "./context"

const Movies = () => {
  const {movie,isloading} = useGlobalContaxt();
  if(isloading){
    return(
      <div >
        <div className="loading">Loading...</div>
      </div>
    )}

  return (
    <section className='movie-page'>
      <div className="grid grid-4-col">
   {movie.map((curmovie)=>{
     const {imdbID, Title, Poster} = curmovie;
     const movieName = Title.substring(0,15)
     return(
   <NavLink to={`movie/${imdbID}`} key = {imdbID}>
<div className='card'>
  <div className="card-info">
    <h2>{Title.length >= 15 ? `${movieName}...` : movieName }</h2>
    <img src={Poster} alt={imdbID} />
  </div>
</div>
   </NavLink>
 
   )})}
</div>
</section>
  )
}

export default Movies
