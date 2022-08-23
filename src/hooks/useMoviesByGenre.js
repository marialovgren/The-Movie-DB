// denna hooken gör själva queryn som hämtar filmerna baserat på genre. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

const useMoviesByGenre = (genre_id) => {
    return useQuery( ['movie-by-genre', genre_id], () => { movieDB.getDiscoverMovies(genre_id), {keepPreviousData: true}})
}

export default useMoviesByGenre