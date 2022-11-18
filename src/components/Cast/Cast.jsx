import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper';
import 'swiper/css/navigation';

import { Box } from 'components/Box/Box';

import { fetchingCast } from 'services/moviesApi';

import { ActorName, Character } from './Cast.styled';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
const img =
  'https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png';

const Cast = () => {
  const { movieId } = useParams();
  //   console.log(movieId);
  const [cast, setCast] = useState([]);
  const location = useLocation();
  // console.log('FROM CAST', location);

  useEffect(() => {
    if (!movieId) return;

    async function setMovieCast() {
      // setStatus(Status.PENDING);
      try {
        const castById = await fetchingCast(movieId);
        setCast(castById);
        console.log(castById);
        //   setStatus(Status.RESOLVED);
      } catch (error) {
        //   setStatus(Status.REJECTED);
        console.log(error);
      }
    }
    setMovieCast();
  }, [movieId]);

  return (
    <Box as="section" p={4}>
      {!cast.length ? (
        <p>No cast found</p>
      ) : (
        <Swiper
          spaceBetween={15}
          slidesPerView={7}
          modules={[Navigation, Keyboard]}
          navigation
          keyboard
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {cast.map(({ id, name, character, profile_path }) => {
            // console.log(profile_path);
            return (
              <SwiperSlide key={id}>
                <li>
                  <img
                    width="200px"
                    src={profile_path ? BASE_POSTER_URL + profile_path : img}
                    alt={name}
                  />
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gridGap={3}
                    pt={4}
                  >
                    <ActorName>{name}</ActorName>
                    <Character>{character}</Character>
                  </Box>
                </li>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </Box>
  );
};

export default Cast;
