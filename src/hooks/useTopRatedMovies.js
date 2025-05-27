import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { options, Top_Rated_Movie } from '../utils/constant';
import { getTopRatedMovies } from '../redux/movieSlice';

const useTopRatedMovies = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopRatedMovies();
  }, [dispatch]);
}

export default useTopRatedMovies