import PropTypes from 'prop-types';

import { MovieImg, MovieTitleContainer, MovieTitle } from './MovieItem.styled';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieItem = ({ movie: { title, poster_path, name } }) => {
  let imagePath = ``;
  !poster_path
    ? (imagePath = `https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png`)
    : (imagePath = `${BASE_POSTER_URL}/${poster_path}`);
  return (
    <>
      <MovieImg src={imagePath} alt={`${title || name}`} />
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
