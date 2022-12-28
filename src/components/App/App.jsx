import './App.scss'
import '../../css/main.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Project from '../../pages/Project'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import Contacts from '../../pages/Contacts'
import ScrollToTop from '../../utils/scrollToTop'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<ScrollToTop />
				<Navbar />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/project/:id' element={<Project />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
