// denna hooken gör själva queryn som hämtar alla skådespelare och personal för en film. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from 'react-query'
import movieDB from '../services/movieDB'

const useCredits = (id) => {
	return useQuery(['movie-credits', id], () => movieDB.getCredits(id))
}

export default useCredits