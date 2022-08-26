import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
/* import CastList from './CastList' */
import useCredits from '../hooks/useCredits'


const PersonCard = ({ movie, data }) => {
	const { id } = useParams()
	const { data: movieCredits } = useCredits(id)

	const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'
	const navigate = useNavigate();

	return (
		<>
			<Row className="d-flex justify-content-sm-start">
				<Col xs={12} md={10}>
					<h2>{movie.title}</h2>
				</Col>
				<Col xs={12} md={2} xs={{ order: 'first' }} md={{ order: 'last' }}>
					<Button className="mb-sm-2" active variant="dark" onClick={() => navigate(-1)}>Back</Button>
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
								{movieCredits && (
									<CastList movieCredits={movieCredits} />
								)}
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default PersonCard



