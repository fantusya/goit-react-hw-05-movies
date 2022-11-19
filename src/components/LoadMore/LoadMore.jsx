import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';

import { LoadMoreBtn } from './LoadMore.styled';

const LoadMore = ({ onClick }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <LoadMoreBtn onClick={onClick}>LOAD MORE</LoadMoreBtn>
    </Box>
  );
};

export default LoadMore;

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
