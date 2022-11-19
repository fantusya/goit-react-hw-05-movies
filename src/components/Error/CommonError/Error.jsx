import errorImg from 'images/error.jpg';
import { Box } from 'components/Box/Box';

const CommonErrorMessage = () => {
  return (
    <Box
      as="main"
      display="flex"
      height="80vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <img src={errorImg} width="600px" alt="we didn't find any images" />
      </Box>
    </Box>
  );
};

export default CommonErrorMessage;
