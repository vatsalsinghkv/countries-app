import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllCountries from './pages/AllCountries';
import Country from './pages/Country';
// import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Spinner from './components/UI/Spinner';
import './App.scss';

// Loaded only when these routes are visited
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
	return (
		<div className="App">
			<Header />
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path="/" element={<AllCountries />} />
					<Route path=":countryId" element={<Country />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
			<Footer />
		</div>
	);
};

export default App;
