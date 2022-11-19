import { Box } from 'components/Box/Box';
import { ErrorText, ErrorReviewsIcon } from '../CastReviewsError.styled';

const CastError = () => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={3}
      py={5}
    >
      <ErrorReviewsIcon size={60} />
      <ErrorText>No cast was found!</ErrorText>
    </Box>
  );
};

export default CastError;
