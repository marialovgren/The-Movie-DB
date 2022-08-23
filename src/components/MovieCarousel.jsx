import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//hooks
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useLatestCinemaMovies from '../hooks/useLatestCinemaMovies'

const MovieCarousel = () => {
    const { data: popularMovies } = usePopularMovies()
	const { data: topRatedMovies } = useTopRatedMovies()
    const { data: latestCinemaMovies } = useLatestCinemaMovies()

    const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'

    if (!popularMovies || !topRatedMovies || !latestCinemaMovies) {
		return <p>Couldn´t load any movies!</p>
	}

	return (
        <Row className="movieCarouselWrapper">
            <Col sm={12} md={5} lg={4}>
                <h5>20 most popular movies</h5>
                {popularMovies && (
                    <Carousel className="my-3 movieCarousel">
                    {popularMovies.results.map(movie => (
                    <Carousel.Item key={movie.id} interval={2000} >
                        <img 
                        className="d-block w-100"
                        src={BASE_URL_IMAGE + movie.poster_path}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    ))}
                </Carousel>
                )}
                
            </Col>

            <Col sm={12} md={5} lg={4}>
                <h5>20 top rated movies</h5>
                {topRatedMovies && (
                    <Carousel className="my-3 movieCarousel">
                    {topRatedMovies.results.map(movie => (
                    <Carousel.Item key={movie.id} interval={2000} >
                        <img 
                        className="d-block w-100"
                        src={BASE_URL_IMAGE + movie.poster_path}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    ))}
                </Carousel>
                )}
                
            </Col>

            <Col sm={12} md={5} lg={4}>
                <h5>20 lates movies in cinema</h5>
                {latestCinemaMovies && (
                    <Carousel className="my-3 movieCarousel">
                    {latestCinemaMovies.results.map(movie => (
                    <Carousel.Item key={movie.id} interval={2000} >
                        <img 
                        className="d-block w-100"
                        src={BASE_URL_IMAGE + movie.poster_path}
                        alt="First slide"
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






