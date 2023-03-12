/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as Sentry from '@sentry/react-native';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import GlobalLoading from '~/common/GlobalLoading';
import AppRoutes from './src/AppRoutes';
import {store} from './src/state/store';

Sentry.init({
  dsn: 'https://c6e61692f43d4678b731c307b2abf070@o4504665800704000.ingest.sentry.io/4504665801687040',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <AppRoutes />
      <GlobalLoading />
    </Provider>
  );
}

export default Sentry.wrap(App);
// export default App;
