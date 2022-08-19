import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MovieList20 = ({ movie }) => {

	const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'

	return (
		<Row className="popularMoviesList" >
			{movie.map(movie => (
				<Col lg={4} md={6} sm={12} className="mb-3">
					<Card key={movie.id} >
						<Card.Img variant="top" src={BASE_URL_IMAGE + movie.poster_path} />
						<Card.Body>
						{movie.title}
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default MovieList20



