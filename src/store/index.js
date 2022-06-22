import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme';
import filterRegionReducer from './filter-region';
import countriesReducer from './countries';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    filterRegion: filterRegionReducer,
    countries: countriesReducer,
  },
});

export default store;
