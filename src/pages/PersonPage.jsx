import { useParams } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'

// Components
import WarningAlert from '../components/alerts/WarningAlert'
import PersonCard from '../components/PersonCard'

// Hooks 
import useCast from '../hooks/useCast'


const PersonPage = () => {
	const { id } = useParams()
	const { data: person, error, isError, isLoading } = useCast(id)
	
	return (
		<Container className="py-3">
			{isLoading && <p>Loading Movie.... </p>}

			{isError && <WarningAlert message={error.message} />}

			{person && <>
				<PersonCard person={person}/>
			</>}

		</Container>
	)
}

export default PersonPage