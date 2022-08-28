import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import WarningAlert from '../components/alerts/WarningAlert'
import useCast from '../hooks/useCast'
import PersonCard from '../components/PersonCard'


const PersonPage = () => {
	const { id } = useParams()
	const { data: person, error, isError, isLoading } = useCast(id)

    console.log("person in personpage:", person)
	
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