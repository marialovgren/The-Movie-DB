import Container from 'react-bootstrap/Container'
import WarningAlert from '../components/alerts/WarningAlert'
import Dropdown from 'react-bootstrap/Dropdown';
import {useSearchParams} from 'react-router-dom'
import {useState} from 'react'

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

    console.log("moviesByGenre.results: ", moviesByGenre?.results)

	return (
		<Container className="py-3 my-3">
			<h1>Choose movie by genre</h1>

            {isLoading && <p>Loading all genres....</p>}

			{isError && <WarningAlert message={error.message} />}
            
            {genreList && (
                <div className="my-3">
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
           
                    
                </div>
               
            )}   

            {moviesByGenre && (
                <>
                <h4 className="my-3">Now showing genre: {genreName}</h4>
                {moviesByGenre.results.map(movie => (
                    <p key={movie.id}>{movie.title}</p>
                ))}
                </>
            )}        


            
          
		</Container>
	)
}

export default GenrePage