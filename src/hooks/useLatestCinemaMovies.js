// denna hooken gör själva queryn som hämtar de senaste biofilmerna. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

const useLatestCinemaMovies = () => {
    return useQuery('movie-latest-cinema', movieDB.getLatestCinemaMovies, {keepPreviousData: true})
}

export default useLatestCinemaMovies