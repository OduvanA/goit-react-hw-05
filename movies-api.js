import axios from "axios";

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTM0MGVjZTA3YWFjYTU5ODE3MDJjNjVhYjZlYjQ0MCIsIm5iZiI6MTcyMTczOTU0My45ODcwOTQsInN1YiI6IjY2OTk2NTY4M2FlYjhjMDQ3OTE4NGYxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jY4u_SM2bqHPPp3sCZ5bnxWwCwN6zej4hT5pCGsGBgw'
    }
  };

export const fetchTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const res = await axios.get(url, options);
  return res.data;
}

export const fetchMovies = async (search) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
  const res = await axios.get(url, options);
  return res.data;
}

export async function fetchMovieDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const res = await axios.get(url, options);
  return res.data;
}

export async function fetchMovieCast(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const res = await axios.get(url, options);
  return res.data;
}

export async function fetchMovieReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  const res = await axios.get(url, options);
  return res.data;
}
