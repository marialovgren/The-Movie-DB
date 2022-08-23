// denna hooken gör själva queryn som hämtar genrelistan. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

const useGenreList = () => {
    return useQuery('movie-genre-list', movieDB.getGenreList, {keepPreviousData: true})
}

export default useGenreList