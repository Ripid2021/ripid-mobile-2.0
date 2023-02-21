import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Welcome from './screens/Welcome';

const OnboardingStackNavigator = createStackNavigator();

const OnboardingStack = () => {
  return (
    <OnboardingStackNavigator.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Welcome">
      <OnboardingStackNavigator.Screen name="Welcome" component={Welcome} />
    </OnboardingStackNavigator.Navigator>
  );
};

export default OnboardingStack;
