import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderBack from '~/custom-libs/HeaderBack';
import {centerHeaderTitle} from '~/theme/style';
import {TRANSPARENT} from '~/theme/color';
import WebView from '~/stacks/app/screens/WebView';
import {TScreen} from '~/type';
import {t} from 'i18next';

const AppStackNavigator = createStackNavigator();
const AppStack = () => {
  return (
    <AppStackNavigator.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: centerHeaderTitle,
        headerStyle: {backgroundColor: TRANSPARENT},
        headerLeft: props => <HeaderBack {...props} />,
      }}
      initialRouteName="Profile">
      {AppScreens.map(item => (
        <AppStackNavigator.Screen
          key={item.name}
          options={item.options}
          name={item.name}
          component={item.component}
        />
      ))}
    </AppStackNavigator.Navigator>
  );
};

export const AppScreens = [
  {
    options: {headerShown: true},
    name: 'WebView',
    component: WebView,
  },
] as const;
export default AppStack;
