import React from 'react'
import Card from 'react-bootstrap/Card'

const MovieCard = ({ movie }) => {

	const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

	return (
	
		<Card key={movie.id} className="my-3">
			<Card.Img variant="top" src={BASE_URL_IMAGE + movie.poster_path} />
			<Card.Body>
				{movie.title}
			</Card.Body>
		</Card>
		
	)
}

export default MovieCard



