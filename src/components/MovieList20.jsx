import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'


const MovieList20 = ({ movie }) => {

	return (
		<Row className="popularMoviesList" >
		
			{movie.map(movie => (
				<Col lg={4} md={6} sm={12} className="mb-3">
					<Card key={movie.id} >
					
						<Card.Header>
				
						{movie.title}
						</Card.Header>
						<Card.Body>
							<ListGroup lg={4} md={6} sm={12}  variant="flush">
							<ListGroup.Item>
								<strong>Released: </strong> {movie.release_date}
							</ListGroup.Item>

							</ListGroup>
						</Card.Body>
					
					</Card>
					</Col>
			))}
		
		</Row>
	)
}

export default MovieList20



