import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

const FilmsList = ({ person }) => {

    console.log("person.credits in FilmsList: ", person.credits)

	return (
		<Table striped hover>
			<thead>
				<tr>
					<th>Has acted in these movies:</th>
                   
				</tr>
			</thead>
			<tbody>
				  {person.credits.cast.map(movie => (
					<tr key={movie.id}>
						<td>
                            <a className="text-decoration-none"
                                href={`/movie/${movie.id}`}
                                as={Link}
                                >{movie.title}
                            </a>
                            </td>
					</tr>
				))}  
			</tbody>
		</Table>
	)
}

export default FilmsList