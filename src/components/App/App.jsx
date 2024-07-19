import { useState, useEffect } from 'react';
import './App.css'
import { fetchMovies, fetchTrendingMovies } from '../../../movies-api';
import MovieList from '../MovieList/MovieList';
import SearchBar from '../SearchBar/SearchBar';



export default function App() {
  // const [error, setError] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState('');


  const handleSearch = (search) => {
    setMovieList([]);
    setSearch(search);
  }

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovieList(data.results);
      } catch (error) {
        // setError(true);
      } 
    }

    getMovies();
  }, [])

  useEffect(() => {
    if (!search) {
      return;
    }

    async function getMovies() {
      try {
        const data = await fetchMovies(search);
        setMovieList(data.results);
      } catch (error) {
        // setError(true);
      } 
    }

    getMovies();
  }, [search])

  return (
    <>
      <h1>Hello!!!</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList trendingMovies={movieList} />
      
    </>
  )
}


