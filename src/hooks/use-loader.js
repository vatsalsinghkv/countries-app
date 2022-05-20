import { useDispatch } from 'react-redux';
import { countriesActions } from '../store/countries';
import { COUNTRIES_URL } from '../helper/config';
import useHttp from './use-http';
import { useCallback } from 'react';
import { getCountryURL } from '../helper';

/**
 * Loads all countries or specific country with id
 * @returns {Object} isLoading, error, load
 */

const useLoader = () => {
	const { isLoading, error, sendRequest } = useHttp();
	const { setCountries, setCountry } = countriesActions;

	const dispatch = useDispatch();

	/**
	 * Callback function for sorting countries array in ascending order
	 */

	const ascSort = useCallback((a, b) => {
		return a.name.common.toUpperCase() > b.name.common.toUpperCase() ? 1 : -1;
	}, []);

	const load = useCallback(
		(countryId = null, foundCountry = false) => {
			// Loading a Country
			if (countryId) {
				if (foundCountry) {
					dispatch(setCountry(foundCountry));
					return;
				}

				sendRequest(getCountryURL(countryId), data => {
					dispatch(setCountry(data));
				});
			}

			// Loading all countries
			sendRequest(COUNTRIES_URL, data => {
				dispatch(setCountries(data.sort(ascSort)));
			});
		},
		[dispatch, sendRequest, setCountry, ascSort, setCountries]
	);

	return {
		isLoading,
		error,
		load,
	};
};

export default useLoader;
