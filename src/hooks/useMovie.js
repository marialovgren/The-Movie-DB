import { useQuery } from 'react-query'
import movieDB from '../services/movieDB'

const useMovie = (id) => {
	return useQuery(['movie', id], () => movieDB.getMovie(id))
}

export default useMovie