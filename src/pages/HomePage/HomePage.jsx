import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../../movies-api";
import css from "./HomePage.module.css";
import { FadeLoader } from "react-spinners";

export default function HomePage() {

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [])

  return (
    <div className={css.container}>
      <h2>Trending today</h2>
      {loading && <FadeLoader color="navy" />}
      {trendingMovies.length > 0 && <MovieList movieList={trendingMovies} />}
      {error && <p className={css.error}>Oops! Something went wrong, please try again later.</p>}
    </div>
  );
}
