import axios from "axios";

axios.defaults.baseURL = '';

export const fetchTrendingMovies = async () => {
 
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjk5ZWJkZTE1OGY3YmYwZWYyMjdiNjY1NTVlNGY4MSIsIm5iZiI6MTcyMTMzMjAzNy40NzQ4NDksInN1YiI6IjY2OTk2NTY4M2FlYjhjMDQ3OTE4NGYxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.whI10elkrmddwp6X5bzlLgrKcTGrU5_wOc4FIa2eTAc'
    }
  };

  const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
  
  return res.data;
}


export const fetchMovies = async (search) => {
  const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjk5ZWJkZTE1OGY3YmYwZWYyMjdiNjY1NTVlNGY4MSIsIm5iZiI6MTcyMTMzMjAzNy40NzQ4NDksInN1YiI6IjY2OTk2NTY4M2FlYjhjMDQ3OTE4NGYxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.whI10elkrmddwp6X5bzlLgrKcTGrU5_wOc4FIa2eTAc'
    },
    params: {
      query: search,
    }
  };

  const res = await axios.get(url, options);
  
  return res.data;
}


