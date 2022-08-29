import { useQuery } from 'react-query'
import movieDB from '../services/movieDB'

const useCast = (id) => {
	return useQuery(['cast', id], () => movieDB.getCast(id))
}

export default useCast