import { Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchingById } from 'services/moviesApi';
import { gettingGenresListForModal } from 'services/genres';
import { setReleaseDate, setReleaseVote } from 'services/round';
import { toHoursAndMinutes } from 'services/times';

import { Box } from 'components/Box/Box';
import {
  BackLink,
  BackIcon,
  BackText,
  MovieTitle,
  MovieImg,
  MoviePar,
  MovieDesc,
  MovieText,
  DetailsLink,
  Container,
  Ul,
} from './MovieDetails.styled';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
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
      // setStatus(Status.PENDING);
      try {
        const movieById = await fetchingById(movieId);
        setMovie(movieById);

        const filteredGenres = movieById.genres.map(el => el.id);
        setGenres(gettingGenresListForModal(filteredGenres));

        setMinutes(toHoursAndMinutes(movieById.runtime));

        setVote(setReleaseVote(movieById.vote_average));

        setDate(setReleaseDate(movieById.release_date));

        setCompanies(makeCompaniesArray(movieById.production_companies));
        // console.log(movieById.production_companies.map(el => el.name));

        console.log(movieById);
        //   setStatus(Status.RESOLVED);
      } catch (error) {
        //   setStatus(Status.REJECTED);
        console.log(error);
      }
    }
    setMovieById();
  }, [movieId]);

  const backLinkHref = location?.state?.from ?? '/movies';
  const { title, name, overview, tagline, poster_path, backdrop_path } = movie;

  let imagePath = ``;
  !poster_path
    ? (imagePath = `https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png`)
    : (imagePath = `${BASE_POSTER_URL}/${poster_path}`);

  return (
    <Box as="main">
      <Container bgImg={BASE_POSTER_URL + backdrop_path}>
        <BackLink to={backLinkHref}>
          <BackIcon size={40} />
          <BackText>Go back</BackText>
        </BackLink>
        <MovieTitle>{title || name}</MovieTitle>
        <Box display="inline-flex" gridGap="80px">
          <MovieImg src={imagePath} alt={title || name} />
          <Box>
            <Ul>
              <Box as="li" display="flex" alignItems="baseline" gridGap={4}>
                <MoviePar>Rating:</MoviePar>
                <MovieDesc>{vote}</MovieDesc>
              </Box>
              <Box
                as="li"
                display="inline-flex"
                alignItems="baseline"
                gridGap={4}
              >
                <MoviePar>Release date:</MoviePar>
                <MovieDesc>{date}</MovieDesc>
              </Box>
              <Box
                as="li"
                display="inline-flex"
                alignItems="baseline"
                gridGap={4}
              >
                <MoviePar>Tagline:</MoviePar>
                <MovieDesc>{tagline || `—`}</MovieDesc>
              </Box>
              <Box
                as="li"
                display="inline-flex"
                alignItems="baseline"
                gridGap={4}
              >
                <MoviePar>Runtime:</MoviePar>
                <MovieDesc>{minutes || `—`}</MovieDesc>
              </Box>
              <Box
                as="li"
                display="inline-flex"
                alignItems="baseline"
                gridGap={4}
              >
                <MoviePar>Genre:</MoviePar>
                <MovieDesc>{genres || 'Genre not found'}</MovieDesc>
              </Box>
              <Box
                as="li"
                display="inline-flex"
                alignItems="baseline"
                gridGap={4}
              >
                <MoviePar>Production companies:</MoviePar>
                <MovieDesc>{companies}</MovieDesc>;
              </Box>
              <Box
                as="li"
                display="inline-flex"
                alignItems="baseline"
                gridGap={3}
                flexDirection="column"
              >
                <MoviePar>Description:</MoviePar>
                <MovieText>{overview || `No description was found`}</MovieText>
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
      <Suspense fallback={<h1>INNER LOADING</h1>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;

function makeCompaniesArray(array) {
  let companies = '';

  for (const obj of array) {
    const company = obj.name;
    if (!company) {
      continue;
    }
    if (companies) {
      companies += ', ';
    }
    companies += company;
  }
  return companies;
}

// export function gettingGenresListForModal(array) {
//   let genre_names = '';

//   for (const id of array) {
//     const genre_name = localStorage.getItem(`genre_${id}`);
//     if (!genre_name) {
//       continue;
//     }
//     if (genre_names) {
//       genre_names += ', ';
//     }
//     genre_names += genre_name;
//   }
//   return genre_names;
// }
