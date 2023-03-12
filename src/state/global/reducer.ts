import {createAction, createSlice} from '@reduxjs/toolkit';

type TInitialState = {
  loading: boolean;
};

const initialState: TInitialState = {
  loading: false,
};

export const startLoading = createAction('LOADING/START_LOADING', () => ({
  payload: undefined,
}));

export const endLoading = createAction('LOADING/END_LOADING', () => ({
  payload: undefined,
}));

export const global = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(startLoading, state => {
      state.loading = true;
    });
    builder.addCase(endLoading, state => {
      state.loading = false;
    });
  },
});

export default global.reducer;
