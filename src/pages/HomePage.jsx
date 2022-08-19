import Container from 'react-bootstrap/Container'

//components

import WarningAlert from '../components/alerts/WarningAlert'
import MovieCarousel from '../components/MovieCarousel'

const HomePage = () => {

	return (
		<Container className="py-3">
			<h1>The Movie DB!</h1>

			<MovieCarousel />
		
		</Container>
	)
}

export default HomePage
