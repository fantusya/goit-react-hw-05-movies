import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper';
import 'swiper/css/navigation';
import { BASE_POSTER_URL, FALLBACK_CAST_IMAGE_PATH } from 'constants/urls';
import { Box } from 'components/Box/Box';

import { fetchingCast } from 'services/moviesApi';

import { ActorName, Character } from './Cast.styled';
import CastError from 'components/Error/CastReviewsError/Cast';
import CastReviewsPending from 'components/Pending/CastReviewsPending';
import { Status } from 'constants/status';

const Cast = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  // console.log('FROM CAST', location);

  useEffect(() => {
    if (!movieId) return;

    async function setMovieCast() {
      setStatus(Status.PENDING);
      try {
        const castById = await fetchingCast(movieId);
        setCast(castById);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error);
      }
    }
    setMovieCast();
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <CastReviewsPending />}
      {status === 'resolved' && (
        <Box as="section" p={4}>
          <Swiper
            spaceBetween={15}
            slidesPerView={7}
            modules={[Navigation, Keyboard]}
            navigation
            keyboard
          >
            {cast.map(({ id, name, character, profile_path }) => (
              <SwiperSlide key={id}>
                <li>
                  <img
                    width="200px"
                    height="300px"
                    src={
                      profile_path
                        ? BASE_POSTER_URL + profile_path
                        : FALLBACK_CAST_IMAGE_PATH
                    }
                    alt={name}
                    loading="lazy"
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
            ))}
          </Swiper>
        </Box>
      )}
      {status === 'rejected' && <CastError />}
    </>
  );
};

export default Cast;
