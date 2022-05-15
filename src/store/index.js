import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme';
import filterRegionReducer from './filter-region';
import countriesReducer from './countries';
import searchReducer from './search';

const store = configureStore({
	reducer: {
		theme: themeReducer,
		filterRegion: filterRegionReducer,
		countries: countriesReducer,
		search: searchReducer,
	},
});

export default store;
