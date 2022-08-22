import React, { useEffect, useState } from 'react'
import { useParams,NavLink } from 'react-router-dom'
import { API_URL } from './context';
const Singlemovie = () => {
  const {id} = useParams();

  const[isloading, setIsLoading]= useState(true);
  const[movie,setMovie]= useState('')

  const getMovies =async(url)=>{
    setIsLoading(true);
try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
if(data.Response === "True"){
  setMovie(data);
  setIsLoading(false);
}


}catch(error){
  console.log(error);
}
  }

  useEffect(()=>{
   let timerOut =  setTimeout (()=>{
          getMovies(`${API_URL}&i=${id}`);
      },800);

    return () =>clearTimeout(timerOut);
  },[]);
  if(isloading){
    return(
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    )
  }
  return (
    <>
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to ="/" className='back-btn'>Go Back</NavLink>
        </div>
      </div>
    </section>
    </>
  )
}

export default Singlemovie
