import {createAction, createSlice} from '@reduxjs/toolkit';
import {TAuth, TLang} from './type';

export type TInitialAuthState = {
  lang?: TLang;
  auth?: TAuth;
};

const initialState: TInitialAuthState = {};

export const setLanguage = createAction(
  'AUTH/SET_LANG',
  (lang: 'en' | 'vi') => ({
    payload: {
      lang,
    },
  }),
);

export const setAuth = createAction('AUTH/SET_AUTH', (auth: TAuth) => ({
  payload: {
    auth,
  },
}));

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setLanguage, (state, {payload}) => {
      state.lang = payload.lang;
    });

    builder.addCase(setAuth, (state, {payload}) => {
      state.auth = payload.auth;
    });
  },
});

export default auth.reducer;
