import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import './assets/scss/App.scss'

// Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// Pages 
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import GenrePage from './pages/GenrePage'
import MoviePage from './pages/MoviePage'
import PersonPage from './pages/PersonPage'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/genre" element={<GenrePage />} />
				<Route path="/movie/:id" element={<MoviePage />} />
				<Route path="/person/:id" element={<PersonPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<Footer />

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
