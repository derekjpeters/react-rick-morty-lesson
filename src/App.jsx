import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Characters from './pages/Characters';

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gray-100">
				<header className="bg-gray-900 text-green-400 shadow">
					<div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
						<h1 className="text-4xl font-extrabold">
							React with Rick & Morty API!
						</h1>
						<nav className="mt-4 sm:mt-0">
							<Link 
							to='/'
							className="mr-6 hover:text-green-300 transion-colors duration-200">
								Home
							</Link>
							<Link 
							to='/characters'
							className="mr-6 hover:text-green-300 transion-colors duration-200">
								Characters
							</Link>
						</nav>
					</div>
				</header>
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path="/characters" element={<Characters/>}/>
					</Routes>
				</main>
			</div>
		</Router>
	)
}

const Home = () => (
	<div className="text-center">
		<h2 className="text-5xl">
			Welcome to the Site!
		</h2>
		<p className="text-xl">
			Explore Rick & Morty Characters using React & Open APIs
		</p>
		<Link 
		to="/characters"
		className="inline-block bg-green-400 border-gray-900">
			Explore
		</Link>
	</div>
);

export default App;