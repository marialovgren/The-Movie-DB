import Container from 'react-bootstrap/Container'

//components
import MovieList20 from '../components/MovieList20'
import WarningAlert from '../components/alerts/WarningAlert'

//hooks
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

const HomePage = () => {
	const { isLoading, isError, error, data: popularMovies } = usePopularMovies()
	const { data: topRatedMovies } = useTopRatedMovies()

	console.log(topRatedMovies)

	return (
		<Container className="py-3">
			<h1>The Movie DB!</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && <WarningAlert message={error.message} />}	

			{popularMovies && (
				<>
					<h3>20 most popular movies</h3>
					<MovieList20 movie={popularMovies} />
				</>
			)}

			{topRatedMovies && (
				<>
				<h3>20 top rated movies</h3>
				<MovieList20 movie={topRatedMovies} />
			</>
			)}

		</Container>
	)
}

export default HomePage
