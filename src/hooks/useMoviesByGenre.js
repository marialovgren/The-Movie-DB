import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

const useMoviesByGenre = (page, genre_id) => {
    return useQuery(['movie-by-genre', {page, genre_id}], movieDB.getMoviesByGenre, {keepPreviousData: true})
}

export default useMoviesByGenre