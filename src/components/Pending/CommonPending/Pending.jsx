import { createPortal } from 'react-dom';
import { Box } from 'components/Box/Box';
import { Puff } from 'react-loader-spinner';

const pendingRoot = document.querySelector('#pending-root');

const Pending = () => {
  return createPortal(
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="backdrop"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Puff
        height="100"
        width="100"
        radius={1}
        color="#FF1493"
        ariaLabel="puff-loading"
        visible={true}
      />
    </Box>,
    pendingRoot
  );
};

export default Pending;
