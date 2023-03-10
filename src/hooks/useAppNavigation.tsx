// import React from 'react';

import {
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useNavigation,
  RouteProp,
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useRoute,
  NavigationProp,
} from '@react-navigation/native';
import {WebViewSource} from 'react-native-webview/lib/WebViewTypes';
import {AppScreens} from '~/stacks/app/AppStack';
import {AuthScreens} from '~/stacks/auth/AuthStack';
import {OnboardingScreens} from '~/stacks/onboarding/OnboardingStack';

export type RootStackParamList = {
  Welcome: undefined;
  SelectHabit: undefined;
  HabitSetting: undefined;
  VerifyOTP: undefined;
  CreatePassword: undefined;
  PersonalInformation: undefined;
  OnboardingSuccess: undefined;
  OnboardingStack: {
    screen: (typeof OnboardingScreens)[number]['name'];
    params?: RootStackParamList[(typeof OnboardingScreens)[number]['name']];
  };

  Login: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
  Register: undefined;

  AuthStack: {
    screen: (typeof AuthScreens)[number]['name'];
    params?: RootStackParamList[(typeof AuthScreens)[number]['name']];
  };

  WebView: {
    source: WebViewSource;
    title: string;
  };
  AppStack: {
    screen: (typeof AppScreens)[number]['name'];
    params?: RootStackParamList[(typeof AppScreens)[number]['name']];
  };
};

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

// export const useAppRoute = <RouteName extends keyof RootStackParamList>(
//   route: RouteName,
// ) => {
//   return useRoute<RouteProp<RootStackParamList, typeof route>>();
// };

export const useAppRoute = <RouteName extends keyof RootStackParamList>(
  route: RouteName,
) => {
  return useRoute<RouteProp<RootStackParamList, typeof route>>();
};
