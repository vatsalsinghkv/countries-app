import { createSlice } from '@reduxjs/toolkit';

const filterRegionSlice = createSlice({
	name: 'filterRegion',
	initialState: { showFilter: false, region: 'all' },
	reducers: {
		toggleFilter(state) {
			state.showFilter = !state.showFilter;
		},
		hideFilter(state) {
			state.showFilter = false;
		},
		changeRegion(state, action) {
			state.region = action.payload;
		},
	},
});

const { reducer: filterRegionReducer, actions: filterRegionActions } =
	filterRegionSlice;

export { filterRegionReducer as default, filterRegionActions };
