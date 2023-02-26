import {createAction, createSlice} from '@reduxjs/toolkit';

type TInitialState = {};

const initialState: TInitialState = {};

export const setLanguage = createAction(
  'AUTH/SET_LANG',
  (lang: 'en' | 'vi') => ({
    payload: {
      lang,
    },
  }),
);

export const onboarding = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setLanguage, (state, {payload}) => {});
  },
});

export default onboarding.reducer;
