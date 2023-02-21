import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/reducer';
// import Reactotron from 'reactotron-react-native';
// import './ReactotronConfig';
import {
  persistStore,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    authReducer,
  },
  devTools: !!__DEV__,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        // serializableCheck: {
        //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // },
        serializableCheck: false,
      }),
    // enhancers: __DEV__ ? [Reactotron.createEnhancer] : [],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
