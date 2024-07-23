import axios from "axios";

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2ViNWU3MWI1MDI5NjkzYWQyMDFmNzY0MGNkZTM5MyIsIm5iZiI6MTcyMTY5OTYyNi4xMjg1NjMsInN1YiI6IjY2OTk2NTY4M2FlYjhjMDQ3OTE4NGYxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3LCJLHL3LzKMBJBgcf-slqPBjN1dikv8Vk-8lpNzdvk'
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