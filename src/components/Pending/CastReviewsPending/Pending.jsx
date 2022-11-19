import { Box } from 'components/Box/Box';

import { FallingLines } from 'react-loader-spinner';

const CastReviewsPending = () => {
  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={5}
    >
      <FallingLines
        color="#FF1493"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </Box>
  );
};

export default CastReviewsPending;
