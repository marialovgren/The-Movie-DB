import { Link } from 'react-router-dom'

// Bootstrap
import { Carousel, Row, Col } from 'react-bootstrap'

// H¢ooks
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useLatestCinemaMovies from '../hooks/useLatestCinemaMovies'

const MovieCarousel = () => {
    const { data: popularMovies } = usePopularMovies()
	const { data: topRatedMovies } = useTopRatedMovies()
    const { data: latestCinemaMovies } = useLatestCinemaMovies()

    const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

    if (!popularMovies || !topRatedMovies || !latestCinemaMovies) {
		return <p>Couldn´t load any movies!</p>
	}

	return (
        <Row className="d-flex justify-content-center">
            <Col sm={12} md={5} lg={3}>
                <h6>20 most popular movies</h6>
                {popularMovies && (
                    <Carousel className="my-3">
                        {popularMovies.results.map(movie => (
                            <Carousel.Item 
                                key={movie.id} 
                                interval={2000} 
                                action="true"
                                as={Link}
                                to={`/movie/${movie.id}`}
                            >
                                <img 
                                className="d-block w-100"
                                src={BASE_URL_IMAGE + movie.poster_path}
                                alt="Movie Poster"
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </Col>

            <Col sm={12} md={5} lg={3}>
                <h6>20 top rated movies</h6>
                {topRatedMovies && (
                    <Carousel className="my-3">
                        {topRatedMovies.results.map(movie => (
                            <Carousel.Item 
                                key={movie.id} 
                                interval={2000} 
                                action="true"
                                as={Link}
                                to={`/movie/${movie.id}`}
                            >
                                <img 
                                className="d-block w-100"
                                src={BASE_URL_IMAGE + movie.poster_path}
                                alt="Movie Poster"
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
                
            </Col>

            <Col sm={12} md={5} lg={3}>
                <h6>20 lates movies in cinema</h6>
                {latestCinemaMovies && (
                    <Carousel className="my-3">
                        {latestCinemaMovies.results.map(movie => (
                            <Carousel.Item 
                                key={movie.id} 
                                interval={2000} 
                                action="true"
                                as={Link}
                                to={`/movie/${movie.id}`}
                            >
                                <img 
                                className="d-block w-100"
                                src={BASE_URL_IMAGE + movie.poster_path}
                                alt="Movie Poster"
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </Col>
        </Row>
	)
}

export default MovieCarousel






