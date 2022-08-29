import React from 'react'
import { useNavigate } from "react-router-dom"

// Bootstrap
import { Card, Col, Row, ListGroup, Button } from 'react-bootstrap'

// Components
import CastList from './CastList'

const MovieCard = ({ movie }) => {

	const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'
	const navigate = useNavigate();

	return (
		<>
			<Row className="d-flex justify-content-start p-3">
				<Col xs={12} md={10}>
					<h2>{movie.title}</h2>
				</Col>
				<Col xs={12, { order: 'first' }} md={2, { order: 'last' }}>
					<Button className="mb-2" active variant="dark" onClick={() => navigate(-1)}>Back</Button>
				</Col>
			</Row>

			<Row className="d-flex justify-content-center">
				<Col xs={10} md={6} lg={5}>
					<Card key={movie.id} className="my-3">
						<Card.Body>
							<Card.Img variant="top" src={BASE_URL_IMAGE + movie.poster_path} />
						</Card.Body>
					</Card>
				</Col>

				<Col xs={10} md={6} lg={5}>
					<Card key={movie.id} className="my-3">
						<ListGroup className="list-group-flush">
							<ListGroup.Item>{movie.overview}</ListGroup.Item>
							<ListGroup.Item>Released: {movie.release_date}</ListGroup.Item>
							<ListGroup.Item>Budget: {movie.budget}</ListGroup.Item>
							<ListGroup.Item>IMDB: {movie.imdb_id}</ListGroup.Item>
							{movie.tagline && (
								<ListGroup.Item>Tagline: <span><i>{movie.tagline}</i></span></ListGroup.Item>
							)}
							<ListGroup.Item>
								{movie.credits.cast && (
									<CastList movie={movie} />
								)}
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default MovieCard



