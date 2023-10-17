import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/api";
import Error from "components/Error/Error";
import Loading from "components/Loading/Loading";

const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const reviewsData = await getReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  const { results } = reviews;

  
  return (
    <div>
      {loading && <Loading/>} 
      {error && <Error/>}
      {results && results.length > 0 ? (
        <ul>
          {results.map(({ author, id, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
      
    </div>
  );
};
export default Reviews;