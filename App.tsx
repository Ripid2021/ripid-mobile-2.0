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
import { Provider } from 'react-redux';
import AppRoutes from './src/AppRoutes';
import { store } from './src/state/store';


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
</Provider>
  )
  
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    height: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Sentry.wrap(App);
// export default App;
