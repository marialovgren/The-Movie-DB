// denna hooken gör själva queryn som hämtar en skådespelare. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from 'react-query'
import movieDB from '../services/movieDB'

const useCast = (id) => {
	return useQuery(['cast', id], () => movieDB.getCast(id))
}

export default useCast