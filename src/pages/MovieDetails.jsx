import React, { Suspense, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "components/Error/Error";
import Loading from "components/Loading/Loading";
import MoviesList from "components/MoviesList/MoviesList";
import { getMovieDetails } from "services/api";
import { Outlet } from "react-router-dom";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
    const details = async id => {
      try {
        const response = await getMovieDetails(id);
        setMovie(response);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(false);
      }
    };

    details(movieId);

    return () => {
      details(movieId);
    };
  }, [movieId]);

  return (
    <>
        <div>
          {error && <Error />}
          {loading ? <MoviesList movie={movie} /> : <Loading />}
        </div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}
export default MovieDetails;