import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../../movies-api";
import css from "./HomePage.module.css";
import { FadeLoader } from "react-spinners";

export default function HomePage() {

  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies();
        setMovieList(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [])

  return (
    <>
      <h1>Trending today</h1>
      {loading && <FadeLoader color="navy" />}
      {movieList.length > 0 && <MovieList movieList={movieList} />}
      {error && <p className={css.error}>Oops! Something went wrong, please try again later.</p>}
    </>
  );
}
