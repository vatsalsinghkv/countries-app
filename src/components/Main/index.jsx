import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TOTAL_COUNTRIES } from '../../helper/config';
import useLoader from '../../hooks/use-loader';

import CountryCard from '../Country/CountryCard';
import Error from '../UI/Error';
import Spinner from '../UI/Spinner';

import img from '../../assets/Search-amico.svg';
import './index.scss';

const Main = () => {
	const { isLoading, load: loadCountries } = useLoader();
	const { all: allCountries, filtered: countries } = useSelector(
		state => state.countries
	);

	useEffect(() => {
		if (allCountries.length === TOTAL_COUNTRIES) {
			return;
		}
		loadCountries();
	}, [loadCountries, allCountries]);

	return (
		<main className="main">
			{isLoading ? (
				<Spinner />
			) : !countries.length ? (
				<Error
					text="Oops! No country found..."
					img={img}
					type="web"
					className="error__img--fix"
				/>
			) : (
				countries.map(country => (
					<CountryCard
						key={country.cca3}
						id={country.cca3}
						img={country.flags.svg}
						name={country.name.common}
						population={country.population}
						region={country.region}
						capital={country.capital}
					/>
				))
			)}
		</main>
	);
};

export default Main;
