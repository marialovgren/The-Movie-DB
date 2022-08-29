import { Link } from 'react-router-dom'

// Bootstrap
import { Carousel, Row, Col } from 'react-bootstrap'



const MovieCarousel = ({ popularMovies, topRatedMovies, latestCinemaMovies }) => {

    const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

	return (
        <Row className="d-flex justify-content-center">
            <Col sm={12} md={5} lg={3} className="m-2 p-3">
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

            <Col sm={12} md={5} lg={3} className="m-2 p-3">
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

            <Col sm={12} md={5} lg={3} className="m-2 p-3">
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






