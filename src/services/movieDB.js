/**
 * The Movie DB API service
 *
 * <https://www.themoviedb.org>
 * API: < https://developers.themoviedb.org/3/getting-started>
 * Reference: <https://developers.themoviedb.org/3.>
 */

import axios from 'axios'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_THE_MOVIE_DB_API_KEY

const getPopularMovies = async () => {
	const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&region=US`)

	return res.data.results
}

const getTopRatedMovies = async () => {
	const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&region=US`)

	return res.data.results
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getPopularMovies,
	getTopRatedMovies,
}