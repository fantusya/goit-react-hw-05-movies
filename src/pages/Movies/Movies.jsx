import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box } from 'components/Box/Box';

import { fetchingByName } from 'services/moviesApi';
import SearchMovie from 'components/SearchMovie';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    async function setQueriedMovies() {
      // setStatus(Status.PENDING);
      try {
        const movies = await fetchingByName(query);
        setSearchedMovies(movies);
        //   setStatus(Status.RESOLVED);
      } catch (error) {
        //   setStatus(Status.REJECTED);
        console.log(error);
      }
    }

    setQueriedMovies();
  }, [query]);

  const changeQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <Box as="main">
      <Box as="section" textAlign="center" px={4} py={5}>
        <SearchMovie onSubmit={changeQuery} />
        <Box pt={5}>
          {searchedMovies.length > 0 && (
            <MoviesList moviesArray={searchedMovies} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Movies;
