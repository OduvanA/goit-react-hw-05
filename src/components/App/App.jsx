import './App.css'
import Navigation from '../Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import FadeLoader from "react-spinners/FadeLoader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));


export default function App() {

  return (
    <>
      <Navigation />

      <Suspense fallback={<FadeLoader
        color="navy"
        speedMultiplier={0.8}
      />}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/movies' element={<MoviesPage />}></Route>
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />}></Route>
            <Route path='reviews' element={<MovieReviews />}></Route>
          </Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>

    </>
  );
}

