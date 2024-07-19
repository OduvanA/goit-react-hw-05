export default function MovieList({trendingMovies}) {
  return (
    <ul>
      {trendingMovies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  )
}