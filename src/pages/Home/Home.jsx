import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from 'services/moviesApi';
import { Heading } from './Home.styled';
import { Box } from 'components/Box/Box';
import { Status } from 'constants/status';
import Pending from 'components/Pending/CommonPending';
import Error from 'components/Error/CommonError';

const Home = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // (async () => {
    //   setTrendingMovies(await fetchTrendingMovies());
    // })();
    async function getTrendingMovies() {
      setStatus(Status.PENDING);

      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    }

    getTrendingMovies();
  }, []);

  return (
    <>
      {status === 'pending' && <Pending />}
      {status === 'resolved' && (
        <Box as="main" px={4} py={5}>
          <Box as="section">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gridGap={4}
            >
              <Heading>Trending today</Heading>
            </Box>
            <MoviesList moviesArray={trendingMovies} />{' '}
          </Box>
        </Box>
      )}
      {status === 'rejected' && <Error />}
    </>
  );
};

export default Home;
