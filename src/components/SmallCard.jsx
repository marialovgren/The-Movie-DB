import React from 'react'
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const SmallCard = ({ movie }) => {

	const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

	return (
		
			
					<Card key={movie.id} className="my-3">
                        <Card.Img variant="top" src={BASE_URL_IMAGE + movie.poster_path} />
						<Card.Body>
                            <Card.Title className="cardTitle">{movie.title}</Card.Title>
                            <Button 
                                className="my-3" 
                                active 
                                variant="dark" 
                                as={Link}
                                to={`/movie/${movie.id}`}
                                >Read more</Button>
						</Card.Body>
					</Card>
				  
	)
}

export default SmallCard



