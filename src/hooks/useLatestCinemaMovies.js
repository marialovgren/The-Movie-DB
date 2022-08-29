import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

const useLatestCinemaMovies = () => {
    return useQuery('movie-latest-cinema', movieDB.getLatestCinemaMovies, {keepPreviousData: true})
}

export default useLatestCinemaMovies