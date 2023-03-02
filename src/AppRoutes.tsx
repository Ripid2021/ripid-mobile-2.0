import {StatusBar} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {
  LinkingOptions,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {RootStackParamList} from '~/hooks/useAppNavigation';
import OnboardingStack from '~/stacks/onboarding/OnboardingStack';
import {createStackNavigator} from '@react-navigation/stack';
import useI18n from '~/hooks/useI18n';
import AuthStack from '~/stacks/auth/AuthStack';
import HomeTabNavigator from './navigation/HomeTabNavigator';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['ripid://', 'https://ripid.vn'],
  config: {
    screens: {
      //   InviteGroupScreen: {path: 'group/:id'},
      //   SettingScreen: 'settings',
    },
  },
};

const RootStackNavigator = createStackNavigator();

const AppRoutes = () => {
  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);

  useI18n();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="dark-content"
        />
        <NavigationContainer ref={navigationRef} linking={linking}>
          <RootStackNavigator.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="OnboardingStack">
            <RootStackNavigator.Screen
              name="OnboardingStack"
              component={OnboardingStack}
              options={{
                headerShown: false,
              }}
            />
            <RootStackNavigator.Screen
              name="AuthStack"
              component={AuthStack}
              options={{
                headerShown: false,
              }}
            />
            <RootStackNavigator.Screen
              name="HomeTabNavigator"
              component={HomeTabNavigator}
              options={{
                headerShown: false,
              }}
            />
          </RootStackNavigator.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default AppRoutes;
