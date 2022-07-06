import { createSlice } from '@reduxjs/toolkit';
import { REGION_TYPES } from '../helper/config';

const filter = ({ countries, query = '', region = 'all' }) => {
  return countries.filter(country => {
    return (
      (region !== 'all' ? country.region.toLowerCase() === region : true) &&
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  });
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    all: [],
    filtered: [],
    active: '',
    search: '',
    region: 'all',
  },
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
      state.search = action.payload;
      state.filtered = filter({
        countries: state.all,
        query: action.payload,
        region: state.region,
      });
    },
    filterCountries(state, action) {
      const selectedRegion = action.payload;
      state.region = selectedRegion;

      if (action.region === 'all') {
        state.filtered = filter({
          countries: state.all,
          query: state.search,
        });
        return;
      }

      const foundRegion = REGION_TYPES.find(
        region => selectedRegion === region
      );

      if (!foundRegion) {
        console.error('Invalid Region');
        return;
      }

      state.filtered = filter({
        countries: state.all,
        region: foundRegion,
        query: state.search,
      });
    },
  },
});

const { reducer: countriesReducer, actions: countriesActions } = countriesSlice;

export { countriesReducer as default, countriesActions };
