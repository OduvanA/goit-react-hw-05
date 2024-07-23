import axios from "axios";

// axios.defaults.params = {
//  api_key: "232e381ebf1a94e2e23bd4bc0f54042c"
// }

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzJlMzgxZWJmMWE5NGUyZTIzYmQ0YmMwZjU0MDQyYyIsIm5iZiI6MTcyMTc1NDU5MS45MTMyNjIsInN1YiI6IjY2OWZiODU3MDJhOTk2MGU5NjBhNmE5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7lFcrwemxq3qL9QhnptCcDd7AGK9fwF-Pt4j8rRQWrg'
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
