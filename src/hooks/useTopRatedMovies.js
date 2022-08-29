import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

const useTopRatedMovies = () => {
    return useQuery('movie-top-rated', movieDB.getTopRatedMovies, {keepPreviousData: true})
}

export default useTopRatedMovies