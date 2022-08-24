import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import Navigation from './components/Navigation'
import './assets/scss/App.scss'

/* Pages */
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import GenrePage from './pages/GenrePage'
import MoviePage from './pages/MoviePage'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/genre" element={<GenrePage />} />
				<Route path="/movie/:id" element={<MoviePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
