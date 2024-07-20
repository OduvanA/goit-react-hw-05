import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage"
import { Link } from "react-router-dom"

export default function MovieList({ movieList }) {
  return (
    <ul>
      {movieList.map((movie) => (
        <li key={movie.id}>
          <Link to={':movieId'} element={<MovieDetailsPage movie={movie} />}>{movie.title}</Link>
          
          
          </li>
      ))}
    </ul>
  )
}