import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);
  
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
         <MovieList title={"Popular Movie"} movies={movie.popularMovies}/>
         <MovieList title={"Top Rated Movie"} movies={movie.topRatedMovies}/>
         <MovieList title={"Upcoming Movie"} movies={movie.upcomingMovies}/>
         <MovieList title={"Now Playing Movie"} movies={movie.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default MovieContainer