import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../../movies-api";
import css from "./MovieReviews.module.css";
import { FadeLoader } from "react-spinners";
import { GoCodeReview } from "react-icons/go";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    async function getMovieReviews() {
      try {
        setLoading(true);
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

    }
    getMovieReviews();
  }, [movieId]);

  return (
    <ul className={css.container}>
      {loading && <FadeLoader color="navy" />}
      {reviews.length > 0
      ?
      (reviews.map((review) => (
        <li key={review.id} className={css.listItem}>
          <h3 className={css.author}><GoCodeReview /> {review.author}</h3>
          <p className={css.review}>{review.content}</p>
        </li>
      )))
      : (
        <p>No reviews yet</p>
        )}
      {error && <p className={css.error}>Oops! Something went wrong, please try again later.</p>}
    </ul>
  )
}