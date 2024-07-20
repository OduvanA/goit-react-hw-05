import { NavLink, useParams, Outlet } from "react-router-dom";



export default function MovieDetailsPage({movie: {title, poster_path, overview, }}) { 
  const { movieId } = useParams;

  console.log(movieId);

  return (
    <div>


      <h2>{title}</h2>
      <img src={poster_path} alt={title} />
      <p>{overview}</p>
      
      <ul>
        <li>
          <NavLink to={'cast'}
            // element={<MovieCast />}
          >Cast</NavLink>
        </li>
        <li>
          <NavLink to={'reviews'}
            // element={<MovieReviews />}
          >Reviews</NavLink>
        </li>
      </ul>

      <Outlet/>
    </div>
  );
}