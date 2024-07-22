import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../../movies-api";
import css from "./MovieCast.module.css";
import FadeLoader from "react-spinners/FadeLoader";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovieCast() {
      try {
        setLoading(true);
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);    
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <ul className={css.container}>
      {loading && <FadeLoader color="navy" />}
      {cast &&
        cast.map((cast) => (
          <li key={cast.id} className={css.listItem}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
              alt={cast.name}
            />
            <h3>{cast.name}</h3>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      {error && <p className={css.error}>Oops! omething went wrong, please, try again later.</p>}
    </ul>
  );
}