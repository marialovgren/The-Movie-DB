import Table from 'react-bootstrap/Table'

const MovieList = ({ movies }) => {
	if (!movies.length) {
		return <p>No movies for you!</p>
	}

	return (
		<Table bordered>
			<thead>
				<tr>
					<th>Title</th>
					<th>Release Date</th>
                    <th>Read More</th>
				</tr>
			</thead>
			<tbody>
				{movies.map(movie => (
					<tr key={movie.id}>
						<td>{movie.title}</td>
						<td>{movie.release_date}</td>
                        <td>Click here</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
                    <th>Title</th>
					<th>Release Date</th>
                    <th>Read More</th>
				</tr>
			</tfoot>
		</Table>
	)
}

export default MovieList