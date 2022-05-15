import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
	name: 'search',
	initialState: { value: '' },
	reducers: {
		setSearch(state, action) {
			state.value = action.payload;
		},
		clearSearch(state) {
			state.value = '';
		},
	},
});

const { reducer: searchReducer, actions: searchActions } = searchSlice;

export { searchReducer as default, searchActions };
