// import React from 'react';

import {
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useNavigation,
  RouteProp,
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useRoute,
  NavigationProp,
} from '@react-navigation/native';

export type RootStackParamList = {
  Welcome: undefined;
  OnboardingStack: {
    screen: 'Welcome';
    params?: RootStackParamList['Welcome'];
  };

  Login: undefined;
  AuthStack: {
    screen: 'Login';
    params?: RootStackParamList['Login'];
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
