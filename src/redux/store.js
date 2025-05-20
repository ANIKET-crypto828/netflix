import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import your user slice reducer

const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer, // Add your user reducer here
  },
});

export default store;