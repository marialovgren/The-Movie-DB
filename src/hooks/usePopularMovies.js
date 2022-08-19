// denna hooken gör själva queryn som hämtar de populära filmerna. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

const usePopularMovies = () => {
    return useQuery('movie', movieDB.getPopularFilms, {keepPreviousData: true})
}

export default usePopularMovies