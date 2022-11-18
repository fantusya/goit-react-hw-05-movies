import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { List, ListItem, MovieLink } from './MoviesList.styled';
import MovieItem from 'components/MovieItem';
import ExtraInfo from 'components/ExtraInfo';

const MoviesList = ({ moviesArray }) => {
  const location = useLocation();
  // console.log('FROM PARENT, LIST', location);
  return (
    <List>
      {moviesArray.map(movie => (
        <ListItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieItem movie={movie} />
            <ExtraInfo movie={movie} />
          </MovieLink>
        </ListItem>
      ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  moviesArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
