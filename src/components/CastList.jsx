import { Link } from 'react-router-dom'

// Bootstrap
import Table from 'react-bootstrap/Table'

const CastList = ({ movie }) => {

	return (
		<Table striped hover>
			<thead>
				<tr>
					<th>Cast in this movie:</th>
				</tr>
			</thead>
			<tbody>
				{movie.credits.cast.map(cast => (
					<tr key={cast.id}>
						<td>
							<Link to={`/person/${cast.id}`}>{cast.name}</Link>
                        </td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default CastList