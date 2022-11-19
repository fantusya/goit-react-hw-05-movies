import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box } from 'components/Box/Box';

import { fetchingByName } from 'services/moviesApi';
import SearchMovie from 'components/SearchMovie';
import MoviesList from 'components/MoviesList';
import LoadMore from 'components/LoadMore';
import { Status } from 'constants/status';
import Error from 'components/Error/CommonError';
import CastReviewsPending from 'components/Pending/CastReviewsPending';

const Movies = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState(Status.IDLE);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    async function setQueriedMovies() {
      setStatus(Status.PENDING);

      try {
        if (page === 0) {
          setPage(1);
          return;
        }
        const movies = await fetchingByName(query, page);
        setSearchedMovies(prevState => [...prevState, ...movies.results]);
        setTotal(movies.total);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error);
      }
    }

    setQueriedMovies();
  }, [query, page]);

  const changeQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
    setSearchedMovies([]);
    setPage(1);
    setTotal(0);
  };

  return (
    <>
      <Box as="main">
        <Box as="section" textAlign="center" px={4} py={5}>
          <SearchMovie onSubmit={changeQuery} />
          <Box py={5}>
            <MoviesList moviesArray={searchedMovies} />
          </Box>
          {status === 'pending' && <CastReviewsPending />}
          {searchedMovies &&
            status === 'resolved' &&
            searchedMovies.length < total && (
              <LoadMore onClick={() => setPage(prevState => prevState + 1)} />
            )}
          {status === 'rejected' && <Error />}
        </Box>
      </Box>
    </>
  );
};

export default Movies;
