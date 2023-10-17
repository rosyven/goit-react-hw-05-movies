import { useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import css from '../MoviesList.module.css';

const BASE_IMG = 'https://image.tmdb.org/t/p/w300';

const MovieItem = ({ movie }) => {
  const location = useLocation();

  const ref = useRef(location.state?.from ?? '/');
  const { title, overview, genres, release_date, vote_average, poster_path } =
    movie;
  return (
    <>
      <Link to={ref.current}>Go back</Link>
      <div className={css.movie_desc}>
        <div>
          <img src={`${BASE_IMG}${poster_path}`} alt={title} />
          {vote_average ? (
            <span rating={vote_average}>{vote_average.toFixed(1)}</span>
          ) : (
            ''
          )}
        </div>
        <div>
          <h2>{title}</h2>
          <p>Release data: {release_date}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
          </div>
      </div>
    </>
  );
};
export default MovieItem;