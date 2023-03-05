// import React from 'react';

import {
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useNavigation,
  RouteProp,
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useRoute,
  NavigationProp,
} from '@react-navigation/native';
import {AuthScreens} from '~/stacks/auth/AuthStack';
import {OnboardingScreens} from '~/stacks/onboarding/OnboardingStack';

export type RootStackParamList = {
  Welcome: undefined;
  SelectHabit: undefined;
  HabitSetting: undefined;
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
