import { createSlice } from '@reduxjs/toolkit';

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
      state.region = action.payload;
      switch (action.payload) {
        case 'all':
          state.filtered = filter({
            countries: state.all,
            query: state.search,
          });
          break;
        case 'africa':
          state.filtered = filter({
            countries: state.all,
            region: 'africa',
            query: state.search,
          });
          break;
        case 'america':
          state.filtered = filter({
            countries: state.all,
            region: 'americas',
            query: state.search,
          });
          break;
        case 'asia':
          state.filtered = filter({
            countries: state.all,
            region: 'asia',
            query: state.search,
          });
          break;
        case 'europe':
          state.filtered = filter({
            countries: state.all,
            region: 'europe',
            query: state.search,
          });
          break;
        case 'oceania':
          state.filtered = filter({
            countries: state.all,
            region: 'oceania',
            query: state.search,
          });
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
