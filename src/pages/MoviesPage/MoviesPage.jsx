import MovieList from "../../components/MovieList/MovieList";
import { Formik, Form, Field } from "formik";
import { fetchMovies } from "../../../movies-api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const query = searchParams.get("query") ?? "";

  const handleSubmit = (values, actions) => {

    if (!values.searchBar) {
      return;
    }

    searchParams.set("query", values.searchBar);
    setSearchParams(searchParams);
    actions.resetForm();
    }

    useEffect(() => {

    async function getMovies() {
      try {
        setLoading(true);
        const data = await fetchMovies(query);
        setMovieList(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [query])

  return (
    <div>
      <h1>Movies page</h1>
      <Formik initialValues={{searchBar: ""}} onSubmit={handleSubmit}>
      <Form> className={css.form}
        <Field className={css.field} type="text" name="searchBar" />
        <button className={css.button} type="submit">Search</button>
      </Form>
      </Formik>
      {loading && <FadeLoader color="navy" />}
      {movieList.length > 0 && !loading && <MovieList movieList={movieList} />}
      {error && <p className={css.error}>Oops! Something went wrong, please try again later.</p>}
    </div>
  );
}

