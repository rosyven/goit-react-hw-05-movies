import React, { useState, useEffect } from "react";
import { getCast } from "services/api";
import Error from "components/Error/Error";
import { useParams } from "react-router-dom";
import Loading from "components/Loading/Loading";

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        setLoading(true);
        const castsData = await getCast(movieId);
        setCasts(castsData);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCasts();
  }, [movieId]);

  const {cast} = casts;

  return (
    <div>
      {loading && <Loading/>}
      {error && <Error/>}
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
                  {profile_path ? (
                      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                          alt={name} width='200' />) : <img src={'No Image'} alt={name} width='200' />}   
              <h3>{name}</h3>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cast;