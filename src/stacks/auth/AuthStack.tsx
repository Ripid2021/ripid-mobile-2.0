import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HeaderBack from '~/custom-libs/HeaderBack';
import {TRANSPARENT} from '~/theme/color';
import {centerHeaderTitle} from '~/theme/style';
import Login from './screens/Login';

const AuthStackNavigator = createStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: centerHeaderTitle,
        headerStyle: {backgroundColor: TRANSPARENT},
        headerLeft: props => <HeaderBack {...props} />,
      }}
      initialRouteName="Login">
      {AuthScreens.map(item => (
        <AuthStackNavigator.Screen
          key={item.name}
          options={item.options}
          name={item.name}
          component={item.component}
        />
      ))}
    </AuthStackNavigator.Navigator>
  );
};

export const AuthScreens = [
  {
    options: {headerShown: false},
    name: 'Login',
    component: Login,
  },
] as const;

export default AuthStack;
