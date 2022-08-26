// denna hooken gör själva queryn som hämtar en skådespelare. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from 'react-query'
import movieBD from '../services/movieDB'

const useCast = (id) => {
	return useQuery(['cast', id], () => movieBD.getCast(id))
}

export default useCast