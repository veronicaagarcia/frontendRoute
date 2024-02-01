import { Routes, Route } from 'react-router-dom'
import { useFetchVideos } from './hooks/useVideos'
import { Header } from './components/common/Header'
import { Home } from './components/Home'
import { MyVideos } from './components/MyVideos'
import './App.css'
import { Loading } from './components/common/Loading'
import { About } from './components/About'
import { VideoDetails } from './components/VideoDetails'

function App() {
	const { isLoading } = useFetchVideos()

	return (
		<>
			{isLoading && <Loading />}
			<Header />
			<Routes>
				<Route path='/' Component={Home} />
				<Route path='/myVideos' Component={MyVideos} />
				<Route path='/details' Component={VideoDetails} />
				<Route path='/about' Component={About} />
			</Routes>
		</>
	)
}

export default App
