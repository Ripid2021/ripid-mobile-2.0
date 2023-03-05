import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import HeaderBack from '~/custom-libs/HeaderBack';
import HabitSetting from '~/stacks/onboarding/screens/HabitSetting';
import Register from '~/stacks/onboarding/screens/Register';
import SelectHabit from '~/stacks/onboarding/screens/SelectHabit';
import {TRANSPARENT} from '~/theme/color';
import {centerHeaderTitle} from '~/theme/style';
import {TScreen} from '~/type';
import Welcome from './screens/Welcome';

const OnboardingStackNavigator = createStackNavigator();

const OnboardingStack = () => {
  return (
    <OnboardingStackNavigator.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: centerHeaderTitle,
        headerStyle: {backgroundColor: TRANSPARENT},
        headerLeft: props => <HeaderBack {...props} />,
      }}
      initialRouteName="Welcome">
      {OnboardingScreens.map(item => (
        <OnboardingStackNavigator.Screen
          key={item.name}
          options={item.options}
          name={item.name}
          component={item.component}
        />
      ))}
    </OnboardingStackNavigator.Navigator>
  );
};

export const OnboardingScreens = [
  {
    options: {headerShown: false},
    name: 'Welcome',
    component: Welcome,
  },
  {
    options: {headerShown: false},
    name: 'SelectHabit',
    component: SelectHabit,
  },
  {
    options: {headerShown: false},
    name: 'HabitSetting',
    component: HabitSetting,
  },
  {
    options: {headerShown: false},
    name: 'Register',
    component: Register,
  },
] as const;

export default OnboardingStack;
