import axios from 'axios';

import { BASE_GENRE_URL, api_key } from 'constants/urls';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const urlParams = {
  params: {
    api_key,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async page => {
  const response = await axios.get('trending/movie/day', {
    params: { ...urlParams.params, page },
  });
  const total = response.data.total_results;
  const results = response.data.results;
  return { total, results };
};

export const fetchingByName = async (query, page) => {
  const response = await axios.get('search/movie', {
    params: { ...urlParams.params, query, page },
  });

  if (response.data.total_results === 0) {
    return Promise.reject(new Error(`Ooops! No images with ${query}`));
  } else {
    const total = response.data.total_results;
    const results = response.data.results;
    return { total, results };
  }
};

export const fetchingById = async id => {
  const response = await axios.get(`movie/${id}`, urlParams);
  return response.data;
};

export const fetchingCast = async id => {
  const response = await axios.get(`movie/${id}/credits`, urlParams);

  if (response.data.cast.length === 0) {
    return Promise.reject(new Error(`Ooops! No cast was found.`));
  } else {
    return response.data.cast;
  }
};

export const fetchingReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`, urlParams);

  if (response.data.total_results === 0) {
    return Promise.reject(new Error(`Ooops! No reviews was found.`));
  } else {
    return response.data.results;
  }
};

export const fetchGenres = async () => {
  const response = await axios.get(BASE_GENRE_URL, urlParams);
  return response.data.genres;
};
