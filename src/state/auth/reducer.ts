import {createAction, createSlice} from '@reduxjs/toolkit';
import { TLang } from './type';

type TInitialState = {
  lang?: TLang
}

const initialState: TInitialState = {

};

export const setLanguage = createAction(
  'AUTH/SET_LANG',
  (lang: 'en' | 'vi') => ({
    payload: {
      lang,
    },
  }),
);

export const auth = createSlice({
  name: 'toast',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setLanguage, (state, {payload}) => {
      state.lang = payload.lang;
    });
  },
});

export default auth.reducer;
