/**
 * The Movie DB API service
 *
 * <https://www.themoviedb.org>
 * API: < https://developers.themoviedb.org/3/getting-started>
 * Reference: <https://developers.themoviedb.org/3>
 */

import axios from 'axios'
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_THE_MOVIE_DB_API_KEY

const get = async (endpoint) => {
	const response = await axios.get(endpoint)

	return response.data
}

const getMovie = async (id) => {
	return get(`/movie/${id}?api_key=${API_KEY}&region=US`)
}

const getPopularMovies = async () => {
	return get(`/movie/popular?api_key=${API_KEY}&region=US`)
}

const getTopRatedMovies = async () => {
	return get(`/movie/top_rated?api_key=${API_KEY}&region=US`)
}

const getLatestCinemaMovies = async () => {
	return get(`/movie/now_playing?api_key=${API_KEY}&region=US`)
}

const getMoviesByGenre = async ({queryKey}) => {
	const [_key, { page, genre_id }] = queryKey
	return get(`/discover/movie/?api_key=${API_KEY}&region=US&popularity.desc&with_genres=${genre_id}&include_adult=false&page=${page}`)
}

const getGenreList = async () => {
	return get(`/genre/movie/list?api_key=${API_KEY}&region=US`)
}

const getCredits = async (id) => {
	return get(`/movie/${id}/credits?api_key=${API_KEY}&region=US`)
}

const getCast = async (id) => {
	return get(`/person/${id}?api_key=${API_KEY}&region=US`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getMovie,
	getPopularMovies,
	getTopRatedMovies,
	getLatestCinemaMovies,
	getMoviesByGenre,
	getGenreList,
	getCredits,
	getCast,
}