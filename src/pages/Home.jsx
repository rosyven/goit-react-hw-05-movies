import React, { useEffect, useState } from 'react';
import { getMovies } from 'services/api';
import HomeList from 'components/HomeList/HomeList';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import css from './Home.module.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

  useEffect(() => {
    const details = async () => {
      try {
        const { results } = await getMovies();
          setMovies(results);
          setLoading(true);
      } catch (error) {
          console.error(error.message);
          setError(true);
          setLoading(true);
      }
    }

    details();
  }, []);

  return (
    <div>
      <h1 className={css.trending}>Trending Today</h1>
      {error && <Error />}
      {loading ? <HomeList movies={movies} /> : <Loading />}
    </div>
  );
}

export default Home;