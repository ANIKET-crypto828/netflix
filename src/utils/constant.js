export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTNmNThlYWU5MjM1MTFiMzY3NmZlNjRiOWI5Y2I0ZSIsIm5iZiI6MTc0Nzc0ODM2Ni40NTQwMDAyLCJzdWIiOiI2ODJjODYwZTA0NjM0YTZmNTEyZjEwM2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.llbOUmCmsi3QfuHC2FCK6SD7bR5mVtgMC3r3TlhbnhU'
  }
};

// TMDB Movie Url
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

// Movie API Endpoints

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";

export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";

export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";

export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";

export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";

// TV API Endpoints

export const Airing_Today_TV = "https://api.themoviedb.org/3/tv/airing_today";

export const On_The_Air_TV = "https://api.themoviedb.org/3/tv/on_the_air";

export const Popular_TV = "https://api.themoviedb.org/3/tv/popular";

export const Top_Rated_TV = "https://api.themoviedb.org/3/tv/top_rated";
