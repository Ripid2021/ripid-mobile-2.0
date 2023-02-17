/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as Sentry from '@sentry/react-native';

import React, {useCallback, useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
Sentry.init({
  dsn: 'https://c6e61692f43d4678b731c307b2abf070@o4504665800704000.ingest.sentry.io/4504665801687040',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const rnBiometrics = new ReactNativeBiometrics();

function App(): JSX.Element {
  const [auth, setAuth] = useState(false);
  const [keysExist, setKeysExist] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleLoginPassword = useCallback(() => {
    setAuth(true);
  }, []);
  const handleLoginBiometric = useCallback(() => {
    // let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    let payload = 'Hello, world!';
    rnBiometrics
      .createSignature({
        promptMessage: 'Sign in',
        payload: payload,
      })
      .then(resultObject => {
        const {success, signature} = resultObject;

        if (success) {
          console.log(signature);
          // verifySignatureWithServer(signature, payload);
        }
      });
  }, []);

  const handleLogout = () => {
    setAuth(false);
  };

  const handleEnableBiometric = useCallback(() => {
    rnBiometrics.createKeys().then(resultObject => {
      const {publicKey} = resultObject;
      console.log({publicKey});
      // sendPublicKeyToServer(publicKey)
    });
    rnBiometrics.biometricKeysExist().then(resultObject => {
      setKeysExist(resultObject.keysExist);
    });
  }, []);

  const handleDisableBiometric = useCallback(() => {
    rnBiometrics.deleteKeys().then(resultObject => {
      const {keysDeleted} = resultObject;

      if (keysDeleted) {
        console.log('Successful deletion');
      } else {
        console.log(
          'Unsuccessful deletion because there were no keys to delete',
        );
      }
      rnBiometrics.biometricKeysExist().then(resultObject => {
        setKeysExist(resultObject.keysExist);
      });
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    // throw new Error('My first Sentry error!');
  }, []);

  useEffect(() => {
    fetchBiometric();
    rnBiometrics.biometricKeysExist().then(resultObject => {
      setKeysExist(resultObject.keysExist);
    });
  }, []);

  const fetchBiometric = async () => {
    const {biometryType, available} = await rnBiometrics.isSensorAvailable();
    console.log({biometryType, available});

    if (biometryType === BiometryTypes.Biometrics) {
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        {auth ? (
          <>
            <Text>Home Screen</Text>
            {keysExist ? (
              <Button
                onPress={handleDisableBiometric}
                title="Disable Biometric"
              />
            ) : (
              <Button
                onPress={handleEnableBiometric}
                title="Enable Biometric"
              />
            )}
            <Button onPress={handleLogout} title="Log out" />
          </>
        ) : (
          <>
            <Text>Login Screen</Text>
            <Button onPress={handleLoginPassword} title="Login With Password" />
            <Button
              onPress={handleLoginBiometric}
              title="Login With Biometric"
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
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
