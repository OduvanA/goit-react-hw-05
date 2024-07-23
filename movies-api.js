import axios from "axios";

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg2YjYzNDVjM2Q1NTczYWY2ZDhkMmI0MGY1NWVkNyIsIm5iZiI6MTcyMTc0MTk5MC43OTA2Mywic3ViIjoiNjY5OTY1NjgzYWViOGMwNDc5MTg0ZjFlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.FSVRTU4dV2DacJaD8HSNBT0yMXLEdI_VhSBtUBlRBas'
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
