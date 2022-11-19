import PropTypes from 'prop-types';
import { BASE_POSTER_URL, FALLBACK_IMAGE_PATH } from 'constants/urls';
import { MovieImg, MovieTitleContainer, MovieTitle } from './MovieItem.styled';

const MovieItem = ({ movie: { title, poster_path, name } }) => {
  let imagePath = ``;
  !poster_path
    ? (imagePath = FALLBACK_IMAGE_PATH)
    : (imagePath = `${BASE_POSTER_URL}/${poster_path}`);
  return (
    <>
      <div>
        <MovieImg src={imagePath} alt={`${title || name}`} loading="lazy" />
      </div>
      <MovieTitleContainer>
        <MovieTitle>{title || name}</MovieTitle>
      </MovieTitleContainer>
    </>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  poster_path: PropTypes.string,
};
