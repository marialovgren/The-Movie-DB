import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CastList = ({ movieCredits }) => {
/* 	if (!movie.length) {
		return <p>No movies for you!</p>
	} */

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
                                href="/"
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