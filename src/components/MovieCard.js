import React from 'react'
import { TMDB_IMAGE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import { getId } from '../redux/movieSlice';

const MovieCard = ({poster, movieId}) => {
  const dispatch = useDispatch();
  if (!poster) {
    return null; // Return null if poster is not available
  }

  const handleOpen = () => {
    dispatch(getId(movieId));
   dispatch(setOpen(true));
  }

  return (
    <div className='w-48 pr-2' onClick={handleOpen}>
      <img src={`${TMDB_IMAGE_URL}/${poster}`} alt='movie poster'/>
    </div>
  )
}

export default MovieCard