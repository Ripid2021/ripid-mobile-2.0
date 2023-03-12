import {configureStore} from '@reduxjs/toolkit';
import authReducer, {TInitialAuthState} from './auth/reducer';
import globalReducer from './global/reducer';
import '~/config/reactron';
import Reactotron from 'reactotron-react-native';

import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VERSION = 2;

const authStoreConfig = {
  key: 'auth',
  storage: AsyncStorage,
  version: VERSION,
  blacklist: ['auth', 'lang'],
};

export const store = configureStore({
  reducer: {
    authReducer: persistReducer<TInitialAuthState>(
      authStoreConfig,
      authReducer,
    ),
    globalReducer,
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
  enhancers:
    __DEV__ && Reactotron.createEnhancer ? [Reactotron.createEnhancer()] : [],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
