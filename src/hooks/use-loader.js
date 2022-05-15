import { useDispatch } from 'react-redux';
import { countriesActions } from '../store/countries';
import { COUNTRIES_URL } from '../helper/config';
import useHttp from './use-http';
import { useCallback } from 'react';

const useLoader = () => {
	const { isLoading, error, sendRequest } = useHttp();
	const { setCountries } = countriesActions;

	const dispatch = useDispatch();

	const load = useCallback(() => {
		const ascSort = (a, b) => {
			return a.name.common.toUpperCase() > b.name.common.toUpperCase() ? 1 : -1;
		};

		const getData = data => {
			dispatch(setCountries(data.sort(ascSort)));
		};

		sendRequest(COUNTRIES_URL, getData);
	}, [dispatch, sendRequest, setCountries]);

	return {
		isLoading,
		error,
		load,
	};
};

export default useLoader;
