import Container from 'react-bootstrap/Container'
import WarningAlert from '../components/alerts/WarningAlert'
import { useQuery } from "react-query";
import movieDB from "../services/movieDB";

//hooks
/* import useMoviesByGenre from '../hooks/useMoviesByGenre' */

const genre_id = 16 

const GenrePage = () => {
    
    const { data: moviesByGenre, isError, isLoading, error } = useQuery(['movie-by-genre', {genre_id}], movieDB.getDiscoverMovies)

    console.log("moviesByGenre:", moviesByGenre)

	return (
		<Container className="py-3 my-3">
			<h1>All movies</h1>

            {isLoading && <p>Loading movies by genre....</p>}

			{isError && <WarningAlert message={error.message} />}
            
            {moviesByGenre && (
                <>
                <p>Choose movie by genre</p>
               
                    {moviesByGenre.results.map(movie => (
                        <p>{movie.title}</p>
                    ))}
               
                </>
               
            )}
          
		</Container>
	)
}

export default GenrePage