import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchingReviews } from 'services/moviesApi';
import { Box } from 'components/Box/Box';

import {
  AuthorName,
  PersonIcon,
  TextContainer,
  ReviewText,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  //   console.log(movieId);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    async function setMovieReviews() {
      // setStatus(Status.PENDING);
      try {
        const reviewsById = await fetchingReviews(movieId);
        setReviews(reviewsById);
        console.log(reviewsById);
        //   setStatus(Status.RESOLVED);
      } catch (error) {
        //   setStatus(Status.REJECTED);
        console.log(error);
      }
    }
    setMovieReviews();
  }, [movieId]);

  return (
    <Box as="section" px={7} py={5}>
      {!reviews.length ? (
        <p>No reviews found</p>
      ) : (
        <Box as="ul" display="inline-flex" flexDirection="column" gridGap={6}>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Box display="flex" alignItems="center" gridGap={4} mb={4}>
                <PersonIcon size={50} />
                <AuthorName>{author}</AuthorName>
              </Box>
              <Box
                backgroundColor="#0e1c3ca3"
                borderRadius="normal"
                border="normal"
                borderColor="border"
              >
                <TextContainer>
                  <ReviewText>{content}</ReviewText>
                </TextContainer>
              </Box>
            </li>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Reviews;
