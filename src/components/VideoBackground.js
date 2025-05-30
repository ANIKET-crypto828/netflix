import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId, bool}) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);

  useMovieById(movieId);

    if (!trailerMovie || !trailerMovie.key) {
    return null; // or a loading spinner
  }


  return (
    <div className='w-[vw] overflow-hidden'>
      <iframe 
      className={`${bool ? "w-[100%]" : "w-screen aspect-video"} `}
      src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=zlXovyzJwTMtvccc&autoplay=1&mute=1`}
      title="YouTube video player"
      frameborder="0" 
      allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground