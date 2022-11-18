import { Box } from 'components/Box/Box';
import { Puff } from 'react-loader-spinner';

const Pending = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  );
};

export default Pending;
