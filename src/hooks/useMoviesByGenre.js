// denna hooken gör själva queryn som hämtar filmerna baserat på genre. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

const useMoviesByGenre = (page, genre_id) => {
    return useQuery(['movie-by-genre', {page, genre_id}], movieDB.getMoviesByGenre, {keepPreviousData: true})
}

export default useMoviesByGenre