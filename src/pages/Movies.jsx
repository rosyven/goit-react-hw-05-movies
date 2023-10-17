import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Error from "components/Error/Error";
import Loading from "components/Loading/Loading";
import SearchForm from "components/Form/Form";
import SearchedMovies from "components/SearchedMovies/SearchedMovies";
import { getSearchMovies } from "services/api";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';
  const handleSearch = (query) => {
    setSearchParams({ query: query });
  };
    
    useEffect(() => {
    if (!queryParam) return setMovies([]);
    const searchMovie = async (query) => {
      setLoading(true);
      try {
        const { results } = await getSearchMovies(query);
        setMovies(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };
    searchMovie(queryParam);
  }, [queryParam]);

  return (
    <section>
      <div>
        <SearchForm setSearchParams={handleSearch} />
        {loading ? (
          <Loading />
        ) : (
          <>
            {movies.length !== 0 && <h2>Movies: '{queryParam}'</h2>}
            <SearchedMovies movies={movies} />
          </>
        )}
        {error && <Error />}
      </div>
    </section>
  );
};

export default Movies;