import {NativeModules, Platform} from 'react-native';
import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'; // defaults to localStorage for web

import url from 'url';

if (__DEV__) {
  const {scriptURL} = NativeModules.SourceCode;
  const hostname =
    Platform.OS === 'android'
      ? url.parse(scriptURL).hostname
      : scriptURL.split('://')[1].split(':')[0];
  // eslint-disable-next-line no-console
  console.log('hostname', hostname);

  if (Reactotron.clear && Reactotron.setAsyncStorageHandler) {
    Reactotron.setAsyncStorageHandler(AsyncStorage)
      .configure({
        name: 'Ripid',
        host: hostname,
      })
      .useReactNative({
        overlay: false, // just turning off overlay
        networking: {
          // optionally, you can turn it off with false.
          ignoreUrls:
            /symbolicate|https:\/\/clients3\.google\.com\/generate_204|socket\.io/,
        },
      })
      .use(
        networking({
          //   ignoreContentTypes: /^(image)\/.*$/i,
          ignoreUrls: /\/(logs|symbolicate)$/,
        }),
      )
      .use(reactotronRedux())
      .connect();
    Reactotron.clear();
  }

  // eslint-disable-next-line no-console
  console.tron = Reactotron;
}
