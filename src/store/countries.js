import { createSlice } from '@reduxjs/toolkit';

const filterByRegion = (countries, region) => {
	return countries.filter(country => {
		return country.region.toLowerCase() === region;
	});
};

const filterByName = (countries, query) => {
	return countries.filter(country => {
		return country.name.common.toLowerCase().includes(query.toLowerCase());
	});
};

const countriesSlice = createSlice({
	name: 'countries',
	initialState: { all: [], filtered: [], active: '' },
	reducers: {
		setCountries(state, action) {
			state.all = action.payload;
			state.filtered = state.all;
		},
		setCountry(state, action) {
			state.active = action.payload;
			const alreadyExist = state.all.find(
				country => country.cca3 === action.payload.cca3
			);

			if (!alreadyExist) {
				state.all.push(action.payload);
				state.filtered.push(action.payload);
			}
		},
		searchCountry(state, action) {
			state.filtered = filterByName(state.all, action.payload);
		},
		filterCountries(state, action) {
			switch (action.payload) {
				case 'all':
					state.filtered = state.all;
					break;
				case 'africa':
					state.filtered = filterByRegion(state.all, 'africa');
					break;
				case 'america':
					state.filtered = filterByRegion(state.all, 'americas');
					break;
				case 'asia':
					state.filtered = filterByRegion(state.all, 'asia');
					break;
				case 'europe':
					state.filtered = filterByRegion(state.all, 'europe');
					break;
				case 'oceania':
					state.filtered = filterByRegion(state.all, 'oceania');
					break;
				default:
					console.error('Invalid Region');
					break;
			}
		},
	},
});

const { reducer: countriesReducer, actions: countriesActions } = countriesSlice;

export { countriesReducer as default, countriesActions };
