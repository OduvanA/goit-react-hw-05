import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css"

export default function MovieList({ movieList }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movieList.map((movie) => (
        <li key={movie.id}>
          <Link
            className={css.link}
            to={`/movies/${movie.id}`}
            state={location}>
            {movie.title}
          </Link>
          </li>
      ))}
    </ul>
  )
}