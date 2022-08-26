import Table from 'react-bootstrap/Table'
import { Link/* , useParams */ } from 'react-router-dom'

/* import useCast from '../hooks/useCast' */

const CastList = ({ movieCredits }) => {
/* 	const { id } = useParams()
	const { data: person } = useCast(id) */


    console.log("movieCredits in CastList: ", movieCredits)
	console.log("movieCredits.cast in CastList: ", movieCredits.cast)

	return (
		<Table striped hover>
			<thead>
				<tr>
					<th>Cast in this movie:</th>
                   
				</tr>
			</thead>
			<tbody>
				{movieCredits.cast.map(credits => (
					<tr key={credits.id}>
						<td>
                            <a className="text-decoration-none"
                                href={`/person/${credits.cast}`}
                                as={Link}
                                >{credits.name}
                            </a>
                            </td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default CastList