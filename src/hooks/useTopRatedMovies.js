// denna hooken gör själva queryn som hämtar de högst rankade filmerna. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

const useTopRatedMovies = () => {
    return useQuery('movie-top-rated', movieDB.getTopRatedMovies, {keepPreviousData: true})
}

export default useTopRatedMovies