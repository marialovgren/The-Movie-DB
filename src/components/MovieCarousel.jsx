import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//hooks
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

// LÄGG IN FELHANTERING!!!!

const MovieCarousel = () => {
    const { data: popularMovies } = usePopularMovies()
	const { data: topRatedMovies } = useTopRatedMovies()

    const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'
	return (
        <Row className="movieCarouselWrapper">
            <Col sm={12} md={5} lg={4}>
                <h3>10 most popular movies</h3>
                {popularMovies && (
                    <Carousel className="my-3 movieCarousel">
                    {popularMovies.map(movie => (
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
                <h3>10 top rated movies</h3>
                {topRatedMovies && (
                    <Carousel className="my-3 movieCarousel">
                    {topRatedMovies.map(movie => (
                    <Carousel.Item key={movie.id} interval={2000} >
                        <img 
                        className="d-block w-100"
                        src={BASE_URL_IMAGE + movie.poster_path}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>{movie.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
                </Carousel>
                )}
                
            </Col>

            <Col sm={12} md={5} lg={4}>
                <h3>10 top rated movies</h3>
                {topRatedMovies && (
                    <Carousel className="my-3 movieCarousel">
                    {topRatedMovies.map(movie => (
                    <Carousel.Item key={movie.id} interval={2000} >
                        <img 
                        className="d-block w-100"
                        src={BASE_URL_IMAGE + movie.poster_path}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>{movie.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
                </Carousel>
                )}
                
            </Col>
        </Row>
	)
}

export default MovieCarousel






