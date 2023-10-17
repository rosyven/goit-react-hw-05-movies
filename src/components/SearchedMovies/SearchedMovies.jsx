import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './SearchedMovies.module.css';

const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

const SearchedMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.search_list}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <img src={`${BASE_IMG}${poster_path}`} alt={title} />
              {title && title.substring(0, 18)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default SearchedMovies;