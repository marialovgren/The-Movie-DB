import Table from 'react-bootstrap/Table'
import { Link/* , useParams */ } from 'react-router-dom'

/* import useCast from '../hooks/useCast' */

const CastList = ({ movie }) => {
/* 	const { id } = useParams()
	const { data: person } = useCast(id) */


    console.log("movie in CastList: ", movie)

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
                            <a className="text-decoration-none"
                                href={`/person/${cast.id}`}
                                as={Link}
                                >{cast.name}
                            </a>
                            </td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default CastList