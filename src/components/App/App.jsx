import './App.css'
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { Routes, Route } from 'react-router-dom';



export default function App() {

  return (
    <>
      <Navigation/>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/movies' element={<MoviesPage />}></Route>
        {/* <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='/movies/:movieId/cast' element={<MovieCast />}></Route>
          <Route path='/movies/:movieId/reviews' element={<MovieReviews />}></Route>
        </Route> */}
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </>
  )
}

