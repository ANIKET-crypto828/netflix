import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { options, Upcoming_Movie } from '../utils/constant';
import { getUpcomingMovies } from '../redux/movieSlice';

const useUpcomingMovies = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const res = await axios.get(Upcoming_Movie, options);
        dispatch(getUpcomingMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUpcomingMovies();
  }, [dispatch]);
}

export default useUpcomingMovies