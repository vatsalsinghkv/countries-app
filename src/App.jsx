import './App.scss';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './pages/Country';
import AllCountries from './pages/AllCountries';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<AllCountries />
						</>
					}
				/>
				<Route path=":countryId" element={<CountryDetails />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer name="Vatsal Singh" github="https://github.com/vatsalsinghkv" />
		</div>
	);
};

export default App;
