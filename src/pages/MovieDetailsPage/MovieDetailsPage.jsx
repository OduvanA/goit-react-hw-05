import { NavLink, useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchMovieDetails } from "../../../movies-api";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FadeLoader } from "react-spinners";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const buildNavLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
}

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

 
  useEffect(() => {
    async function getMovieDitails() {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovieDitails();
  }, [movieId])


  return (
    <>
      <div className={css.goBackContainer}>
        <Link className={css.goBackLink} to={backLinkRef.current}>
          <FaArrowLeftLong />
          Go back
        </Link>
      </div>
   {loading && <FadeLoader color="navy" />} 
   {movie && (
    <>
      <div className={css.movieContainer}>
        <div className={css.imageContainer}>
          <img className={css.image}
            src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path}
            alt={movie.title}>
          </img>
        </div>
        <div className={css.movieInfo}>
          <h2>{movie.title}</h2>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((item) => item.name).join(", ")}</p>
        </div>      
      </div>
      <div className={css.addInfoContainer}>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <NavLink
              className={buildNavLinkClass}
              to="cast"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={buildNavLinkClass}
              to="reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
      )}
      {error && <p className={css.error}>Oops! omething went wrong, please, try again later.</p>}
    </>
   );
}

