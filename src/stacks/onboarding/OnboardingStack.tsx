import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HeaderBack from '~/custom-libs/HeaderBack';
import {TRANSPARENT} from '~/theme/color';
import {centerHeaderTitle} from '~/theme/style';
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
      <OnboardingStackNavigator.Screen name="Welcome" component={Welcome} />
    </OnboardingStackNavigator.Navigator>
  );
};

export default OnboardingStack;
