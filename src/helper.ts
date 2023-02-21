import {NativeModules, Platform} from 'react-native';
import {SUPPORTED_LANGUAGE_KEYS} from './constants';

export const getLocale = () => {
  let deviceLanguage = Platform.select({
    ios: NativeModules?.SettingsManager?.settings?.AppleLocale,
    android: NativeModules?.I18nManager?.localeIdentifier,
  });

  if (deviceLanguage === undefined) {
    // iOS 13 workaround, take first of AppleLanguages array
    deviceLanguage =
      NativeModules?.SettingsManager?.settings?.AppleLanguages[0];
    if (deviceLanguage === undefined) {
      return 'en';
    } // default language
  }
  const key = `${deviceLanguage}`.split(new RegExp('[_|-]'))[0];
  return SUPPORTED_LANGUAGE_KEYS.includes(key) ? key : 'en';
};
