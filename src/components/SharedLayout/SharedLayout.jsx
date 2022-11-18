import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink, Text, Icon } from './SharedLayout.styled';
import { Box } from 'components/Box/Box';
import { gettingGenres } from 'services/genres';
import { Link } from 'react-router-dom';

const SharedLayout = () => {
  gettingGenres();
  return (
    <>
      <Box
        as="header"
        px={8}
        borderBottom="normal"
        borderColor="accent"
        backgroundColor="header"
        boxShadow="headerBoxShadow"
      >
        <Box
          as="nav"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to="/">
            <Icon size={50} />
          </Link>
          <Box as="div" display="flex" alignItems="center" gridGap="200px">
            <NavLink to="/">
              <Text>Home</Text>
            </NavLink>
            <NavLink to="/movies">
              <Text>Movies</Text>
            </NavLink>
          </Box>
        </Box>
      </Box>

      <Suspense fallback={<h1>LOADING</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
