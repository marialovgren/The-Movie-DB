import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import WarningAlert from '../components/alerts/WarningAlert'
import useMovie from '../hooks/useMovie'
import MovieCard from '../components/MovieCard'

const MoviePage = () => {
	const { id } = useParams()
	const { data: movie, error, isError, isLoading } = useMovie(id)

	return (
		<Container className="py-3">
			{isLoading && <p>Loading Movie.... </p>}

			{isError && <WarningAlert message={error.message} />}

			{movie && <>
				<MovieCard movie={movie}/>
			</>}
		</Container>
	)
}

export default MoviePage