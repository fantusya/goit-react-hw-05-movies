import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const BASE_GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const api_key = `e09f06c48afcb3ebfd8a25b0b6965d1e`;

const urlParams = {
  params: {
    api_key,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get('trending/movie/day', urlParams);
  return response.data.results;
};

export const fetchingByName = async query => {
  const response = await axios.get('search/movie', {
    params: { ...urlParams.params, query },
  });
  return response.data.results;
};

export const fetchingById = async id => {
  const response = await axios.get(`movie/${id}`, urlParams);
  return response.data;
};

export const fetchingCast = async id => {
  const response = await axios.get(`movie/${id}/credits`, urlParams);
  return response.data.cast;
};

export const fetchingReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`, urlParams);
  return response.data.results;
};

export const fetchGenres = async () => {
  const response = await axios.get(BASE_GENRE_URL, urlParams);
  return response.data.genres;
};
