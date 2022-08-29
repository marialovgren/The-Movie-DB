import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

const usePopularMovies = () => {
    return useQuery('movie-popular', movieDB.getPopularMovies, {keepPreviousData: true})
}

export default usePopularMovies