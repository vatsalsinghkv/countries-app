import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TOTAL_COUNTRIES } from '../../helper/config';
import useLoader from '../../hooks/use-loader';

import CountryCard from '../Country/CountryCard';
import Error from '../UI/Error';
import Spinner from '../UI/Spinner';

import './index.scss';

const Main = () => {
  const { isLoading, load: loadCountries, error } = useLoader();
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
    <main className={`main ${isLoading ? 'main--lg' : ''}`}>
      {error &&
        (error.code === 500 ? (
          <Error type="timeout" message={error.message} />
        ) : (
          <Error type="404" message={error.message} />
        ))}

      {isLoading && !error ? (
        <Spinner />
      ) : !countries.length && !error ? (
        <Error type="not-found" message="Oops! No country found..." />
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
