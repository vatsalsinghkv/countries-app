import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  },
  reducers: {
    toggle(state) {
      state.isDark = !state.isDark;
      document.querySelector('body').classList.toggle('dark-theme');
    },
  },
});

const { reducer: themeReducer, actions: themeActions } = themeSlice;

export { themeReducer as default, themeActions };
