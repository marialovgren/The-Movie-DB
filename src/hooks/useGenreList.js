import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

const useGenreList = () => {
    return useQuery('movie-genre-list', movieDB.getGenreList, {keepPreviousData: true})
}

export default useGenreList