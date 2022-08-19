import Container from 'react-bootstrap/Container'
import WarningAlert from '../components/alerts/WarningAlert'
import Card from 'react-bootstrap/Card'
import usePopularMovies from '../hooks/usePopularMovies';

const HomePage = () => {
	const { isLoading, isError, error, data: popularMovies } = usePopularMovies()


	console.log("data: ", popularMovies)

	return (
		<Container className="py-3">
			<h1>The Movie DB!</h1>

			{isLoading && (<p>Loading movies...</p>)}

			{isError && <WarningAlert message={error.message} />}	

			{popularMovies && (
				<Container>
					<h3>10 most popular movies</h3>
					{popularMovies.map(movie => (
						<Card key={movie.id}>
							{movie.title}
						</Card>
					))}
				</Container>
			)}

		</Container>
	)
}

export default HomePage
