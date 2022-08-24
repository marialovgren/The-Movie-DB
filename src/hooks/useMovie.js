// denna hooken gör själva queryn som hämtar en specifik film. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from 'react-query'
import movieBD from '../services/movieDB'

const useMovie = (id) => {
	return useQuery(['movie', id], () => movieBD.getMovie(id))
}

export default useMovie