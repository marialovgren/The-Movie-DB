import { Link } from 'react-router-dom'

// Bootstrap
import Table from 'react-bootstrap/Table'

const FilmsList = ({ person }) => {

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
							<Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                        </td>
					</tr>
				))}  
			</tbody>
		</Table>
	)
}

export default FilmsList