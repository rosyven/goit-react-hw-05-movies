import { Link } from "react-router-dom";
import MovieItem from "./MoviesItem/MoviesItem";
import css from './MoviesList.module.css';

const MoviesList = ({ movie }) => {
    return (
        <>
            <div className={css.movie_container}>
                <MovieItem movie={movie}></MovieItem>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default MoviesList;