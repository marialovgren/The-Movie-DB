import Table from 'react-bootstrap/Table'

const CastList = ({ movieCredits }) => {
/* 	if (!movie.length) {
		return <p>No movies for you!</p>
	} */

    console.log("movieCredits.cast in CastList: ", movieCredits.cast)

	return (
		<Table bordered>
			<thead>
				<tr>
					<th>Cast in this movie:</th>
                    <th>Read More</th>
				</tr>
			</thead>
			<tbody>
				{movieCredits.cast.map(credits => (
					<tr key={credits.id}>
						<td>{credits.name}</td>
                        <td>Click here</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default CastList