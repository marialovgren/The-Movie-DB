import { useSearchParams, Link } from 'react-router-dom'
import { useState } from 'react'

// bootstrap
import { Dropdown, Container, Row, Col, Button } from 'react-bootstrap'

// components 
import WarningAlert from '../components/alerts/WarningAlert'
import SmallCard from '../components/SmallCard'

//hooks
import useGenreList from '../hooks/useGenreList' 
import useMoviesByGenre from '../hooks/useMoviesByGenre' 

const GenrePage = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        page: 1, 
        genre_id:"",
    })

    const [genreName, setGenreName] = useState("")
    
    const genre_id = searchParams.get('genre_id')
    const page = searchParams.get('page') // denna har jag till min paginering för att sätta page

    const { data: genreList, isError, isLoading, error } = useGenreList()
    const { data: moviesByGenre } = useMoviesByGenre(page, genre_id)

	return (
		<Container className="py-3 my-3">
            <Row className="d-flex align-items-center">
                <Col xs={12} md={10}>
                    <h1>All movies</h1>
                </Col>

                <Col xs={12, { order: 'first' }} md={2, { order: 'last' }} className="d-flex">
                    <Button 
                        className="mb-sm-2" 
                        active 
                        variant="dark" 
                        as={Link}
                        to={'/'}
                        >Back
                    </Button>
                </Col>
            </Row>

            {isLoading && <p>Loading all genres....</p>}

			{isError && <WarningAlert message={error.message} />}
            
            {genreList && (
                <div className="my-3">
                    <Row className="d-flex align-items-center">
                        <Col xs={12} md={6}>
                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                Choose genre
                            </Dropdown.Toggle>
                    
                            <Dropdown.Menu>
                            {genreList.genres.map(genre => (
                                <Dropdown.Item 
                                key={genre.id}
                                onClick={ () => {
                                    setSearchParams({
                                        page: 1,
                                        genre_id: genre.id
                                    })
                                setGenreName(genre.name)
                                }}
                                >
                                    {genre.name}
                                </Dropdown.Item>
                            ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>

                    <Col xs={12} md={6} className="d-flex justify-content-end">
                        {genreName && (
                            <h4 className="my-3">Now showing genre: {genreName}</h4>
                        )}
                        </Col>
			    </Row>
                    
                </div>
               
            )}   

            {moviesByGenre && (
                <Row className="d-flex flex-row justify-content-center">
                    {moviesByGenre.results.map(movie => (
                        <Col xs={10} md={4} lg={3} >
                            <SmallCard movie={movie} key={movie.id} />
                        </Col>	
                    ))}
                </Row>  
            )}        
		</Container>
	)
}

export default GenrePage