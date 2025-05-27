import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './movieSlice'; // Import your user slice reducer
import searchSlice from './searchSlice'; // Import your movie slice reducer

const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer, 
    movie: movieReducer, 
    searchMovie: searchSlice, // Add your movie slice reducer
  },
});

export default store;