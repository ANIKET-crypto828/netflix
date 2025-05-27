import axios from 'axios';
import React from 'react'
import { options, Popular_Movie } from '../utils/constant';
import { getPopularMovies } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const usePopularMovies = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await axios.get(Popular_Movie, options);
        dispatch(getPopularMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPopularMovies();
  }, [dispatch]);
}

export default usePopularMovies