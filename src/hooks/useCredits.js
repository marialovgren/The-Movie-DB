// denna hooken gör själva queryn som hämtar alla skådespelare och personal för en film. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from 'react-query'
import movieBD from '../services/movieDB'

const useCredits = (id) => {
	return useQuery(['movie-credits', id], () => movieBD.getCredits(id))
}

export default useCredits