import axios from 'axios';

const API_KEY = '819e0dd0d797ffa44ee5350e15674068';
const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export async function getMovies() {
  return (await axios.get(`${BASE_URL}/trending/all/day`)).data;
}
export async function getReviews(id) {
  return (await axios.get(`${BASE_URL}/movie/${id}/reviews`)).data;
}
export async function getCast(id) {
  return (await axios.get(`${BASE_URL}/movie/${id}/credits`)).data;
}
export async function getMovieDetails(id) {
  return (await axios.get(`${BASE_URL}/movie/${id}`)).data;
}
export async function getSearchMovies(queryText, page = 1) {
  return (
    await axios.get(`${BASE_URL}/search/movie?query=${queryText}&page=${page}`)
  ).data;
}
