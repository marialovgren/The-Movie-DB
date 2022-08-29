// Bootstrap
import Container from 'react-bootstrap/Container'

//Components
import MovieCarousel from '../components/MovieCarousel'
import WarningAlert from '../components/alerts/WarningAlert'

// Hooks
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useLatestCinemaMovies from '../hooks/useLatestCinemaMovies'

const HomePage = () => {
	const { data: popularMovies, error: popularMoviesError, isError: popularMoviesIsError, isLoading: popularMoviesIsLoading } = usePopularMovies()
	const { data: topRatedMovies, error: topRatedMoviesError, isError: topRatedMoviesIsError, isLoading: topRatedMoviesIsLoading } = useTopRatedMovies()
    const { data: latestCinemaMovies, error: latestCinemaMoviesError, isError: latestCinemaMoviesIsError, isLoading: latestCinemaMoviesIsLoading } = useLatestCinemaMovies()

	return (
		<Container className="py-3 my-3">
			<h1>The Movie DB!</h1>

			{popularMoviesIsLoading && <p>Loading Popular Movies....</p>}
			{popularMoviesIsError && <WarningAlert message={popularMoviesError.message} />}

			{topRatedMoviesIsLoading && <p>Loading Top rated movies...</p>}
			{topRatedMoviesIsError && <WarningAlert message={topRatedMoviesError.message} />}

			{latestCinemaMoviesIsLoading && <p>Loading latest cinema movies...</p>}
			{latestCinemaMoviesIsError && <WarningAlert message={latestCinemaMoviesError.message} />}

			<MovieCarousel popularMovies={popularMovies} topRatedMovies={topRatedMovies} latestCinemaMovies={latestCinemaMovies} />
		
		</Container>
	)
}

export default HomePage
