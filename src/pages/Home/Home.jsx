import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from 'services/moviesApi';
import { Heading } from './Home.styled';
import { BsFillPatchExclamationFill } from 'react-icons/bs';
import { Box } from 'components/Box/Box';
import { Status } from 'constants/status';
import Pending from 'components/Pending';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

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
      <Box as="main" px={4} py={5}>
        <Box as="section">
          <Box display="flex" alignItems="center" gridGap={4}>
            {/* <BsFillPatchExclamationFill size={55} color="white" /> */}
            <Heading>Trending today</Heading>
          </Box>

          {status === 'resolved' && <MoviesList moviesArray={trendingMovies} />}
          {status === 'rejected' && <p>OOOPS ERROR</p>}
        </Box>
      </Box>
    </>
  );
};

export default Home;
