import { Box } from 'components/Box/Box';

import { ErrorText, ErrorCastIcon } from '../CastReviewsError.styled';

const ReviewsError = () => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={3}
      py={5}
    >
      <ErrorCastIcon size={60} />
      <ErrorText>No reviews was found!</ErrorText>
    </Box>
  );
};

export default ReviewsError;
