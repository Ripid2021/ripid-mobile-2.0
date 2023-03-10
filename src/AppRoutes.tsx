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
import AppStack from '~/stacks/app/AppStack';
import ProfileStack from './stacks/profile/ProfileStack';
import BottomTabStack from '~/stacks/bottom-tab/BottomTabStack';
import {useAppSelector} from '~/hooks/useAppSelector';
import useAccessToken from '~/hooks/useAccessToken';

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
  const accessToken = useAppSelector(
    state => state.authReducer?.auth?.accessToken,
  );
  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);

  useI18n();
  useAccessToken();
  console.log({accessToken});

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
            {!accessToken ? (
              <>
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
              </>
            ) : (
              <>
                <RootStackNavigator.Screen
                  name="BottomTabStack"
                  component={BottomTabStack}
                  options={{
                    headerShown: false,
                  }}
                />
                <RootStackNavigator.Screen
                  name="AppStack"
                  component={AppStack}
                  options={{
                    headerShown: false,
                  }}
                />
                <RootStackNavigator.Screen
                  name="ProfileStack"
                  component={ProfileStack}
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            )}
          </RootStackNavigator.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default AppRoutes;
