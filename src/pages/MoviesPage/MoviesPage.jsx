import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovies } from "../../../movies-api";
import { useEffect, useState } from "react";

export default function MoviesPage() {
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState('');

    const handleSearch = (search) => {
    setMovieList([]);
    setSearch(search);
  }

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
    <div>
      <h1>Movies page</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movieList={movieList} />
    </div>
  );
}