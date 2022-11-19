import { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';

import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from 'services/moviesApi';
import { Heading } from './Home.styled';
import LoadMore from 'components/LoadMore';
import { Status } from 'constants/status';
import Pending from 'components/Pending/CommonPending';
import Error from 'components/Error/CommonError';

const Home = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // (async () => {
    //   setTrendingMovies(await fetchTrendingMovies());
    // })();
    async function getTrendingMovies() {
      setStatus(Status.PENDING);

      try {
        if (page === 0) {
          setPage(1);
          return;
        }
        const movies = await fetchTrendingMovies(page);
        setTrendingMovies(prevState => [...prevState, ...movies.results]);
        setTotal(movies.total);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    }

    getTrendingMovies();
  }, [page]);

  return (
    <>
      {status === 'pending' && <Pending />}
      {status === 'resolved' && (
        <Box as="main" px={4} py={5}>
          <Box as="section" pb={5}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gridGap={4}
            >
              <Heading>Trending today</Heading>
            </Box>
            <MoviesList moviesArray={trendingMovies} />
          </Box>
          {trendingMovies.length < total && (
            <LoadMore onClick={() => setPage(prevState => prevState + 1)} />
          )}
        </Box>
      )}
      {status === 'rejected' && <Error />}
    </>
  );
};

export default Home;
