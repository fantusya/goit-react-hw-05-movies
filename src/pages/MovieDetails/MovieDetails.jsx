import { Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';
import { TfiBackLeft } from 'react-icons/tfi';

import { fetchingById } from 'services/moviesApi';
import { gettingDetailedGenresList } from 'services/genres';
import { setReleaseDate, setReleaseVote } from 'services/round';
import { toHoursAndMinutes } from 'services/times';
import { makeCompaniesArray } from 'services/companies';
import { BASE_POSTER_URL, FALLBACK_IMAGE_PATH } from 'constants/urls';
import { Status } from 'constants/status';
import {
  BackLink,
  MovieTitle,
  MovieImg,
  MoviePar,
  MovieDesc,
  MovieText,
  DetailsLink,
  Container,
  Ul,
} from './MovieDetails.styled';
import Pending from 'components/Pending/CommonPending';
import Error from 'components/Error/CommonError';

const MovieDetails = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [minutes, setMinutes] = useState('');
  const [vote, setVote] = useState('');
  const [date, setDate] = useState('');
  const [companies, setCompanies] = useState([]);

  const location = useLocation();
  // console.log('FROM CHILD, DETAILS', location);

  useEffect(() => {
    if (!movieId) return;

    async function setMovieById() {
      setStatus(Status.PENDING);

      try {
        const movieById = await fetchingById(movieId);
        setMovie(movieById);

        const filteredGenres = movieById.genres.map(el => el.id);
        setGenres(gettingDetailedGenresList(filteredGenres));

        setMinutes(toHoursAndMinutes(movieById.runtime));

        setVote(setReleaseVote(movieById.vote_average));

        setDate(setReleaseDate(movieById.release_date));

        setCompanies(makeCompaniesArray(movieById.production_companies));

        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error);
      }
    }

    setMovieById();
  }, [movieId]);

  const backLinkHref = location?.state?.from ?? '/movies';
  const { title, name, overview, tagline, poster_path, backdrop_path } = movie;

  let imagePath = ``;
  !poster_path
    ? (imagePath = FALLBACK_IMAGE_PATH)
    : (imagePath = `${BASE_POSTER_URL}/${poster_path}`);

  let backdropPath = ``;
  !backdrop_path
    ? (backdropPath = ``)
    : (backdropPath = `${BASE_POSTER_URL}/${backdrop_path}`);

  return (
    <>
      {status === 'pending' && <Pending />}
      {status === 'resolved' && (
        <Box as="main">
          <Container bgImg={backdropPath}>
            <BackLink to={backLinkHref}>
              <TfiBackLeft size={40} />
              <span>Go back</span>
            </BackLink>
            <MovieTitle>{title || name}</MovieTitle>
            <Box display="inline-flex" gridGap="80px">
              <MovieImg src={imagePath} alt={title || name} loading="lazy" />
              <Box>
                <Ul>
                  <Box as="li" display="flex" alignItems="baseline" gridGap={3}>
                    <MoviePar>Rating:</MoviePar>
                    <MovieDesc>{vote || `vote not found`}</MovieDesc>
                  </Box>
                  <Box
                    as="li"
                    display="inline-flex"
                    alignItems="baseline"
                    gridGap={3}
                  >
                    <MoviePar>Release date:</MoviePar>
                    <MovieDesc>{date || `date not found`}</MovieDesc>
                  </Box>
                  <Box
                    as="li"
                    display="inline-flex"
                    alignItems="baseline"
                    gridGap={3}
                  >
                    <MoviePar>Tagline:</MoviePar>
                    <MovieDesc>{tagline || `tagline not found`}</MovieDesc>
                  </Box>
                  <Box
                    as="li"
                    display="inline-flex"
                    alignItems="baseline"
                    gridGap={3}
                  >
                    <MoviePar>Runtime:</MoviePar>
                    <MovieDesc>{minutes || `runtime not found`}</MovieDesc>
                  </Box>
                  <Box
                    as="li"
                    display="inline-flex"
                    alignItems="baseline"
                    gridGap={3}
                  >
                    <MoviePar>Genre:</MoviePar>
                    <MovieDesc>{genres || 'genre not found'}</MovieDesc>
                  </Box>
                  <Box
                    as="li"
                    display="inline-flex"
                    alignItems="baseline"
                    gridGap={3}
                  >
                    <MoviePar>Companies:</MoviePar>
                    <MovieDesc>{companies || `companies not found`}</MovieDesc>;
                  </Box>
                  <Box
                    as="li"
                    display="inline-flex"
                    alignItems="baseline"
                    gridGap={3}
                    flexDirection="column"
                  >
                    <MoviePar>Description:</MoviePar>
                    <MovieText>{overview || `description not found`}</MovieText>
                  </Box>
                </Ul>
                <Box display="flex" gridGap={6}>
                  <DetailsLink to="cast" state={{ from: backLinkHref }}>
                    Cast
                  </DetailsLink>
                  <DetailsLink to="reviews" state={{ from: backLinkHref }}>
                    Reviews
                  </DetailsLink>
                </Box>
              </Box>
            </Box>
          </Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>
      )}
      {status === 'rejected' && <Error />}
    </>
  );
};

export default MovieDetails;
