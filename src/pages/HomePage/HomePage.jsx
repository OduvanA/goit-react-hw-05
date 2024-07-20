import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../../movies-api";

export default function HomePage() {

  const [movieList, setMovieList] = useState([]);

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

  return (
    <div>
      <h1>Home page</h1>
      {movieList.length > 0 && <MovieList movieList={movieList} />}
    </div>
  );
}
