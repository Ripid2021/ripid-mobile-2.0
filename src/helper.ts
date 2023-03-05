import {NativeModules, Platform} from 'react-native';
import {TUser} from '~/state/onboarding/type';
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

export const getUserName = (user: TUser) =>
  user.nickName || user.fullName || '';

export const getChars = (user: TUser, num = 2) => {
  const name = getUserName(user);
  const chars = name
    .match(/(\b\S)?/g)
    ?.join('')
    .toUpperCase();
  return chars?.slice(0, num);
};
