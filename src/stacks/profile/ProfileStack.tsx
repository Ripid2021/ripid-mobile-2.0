import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './screens/Profile';
import HeaderBack from '~/custom-libs/HeaderBack';
import {centerHeaderTitle} from '~/theme/style';
import {TRANSPARENT} from '~/theme/color';

const ProfileStackNavigator = createStackNavigator();
const ProfileStack = () => {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: centerHeaderTitle,
        headerStyle: {backgroundColor: TRANSPARENT},
        headerLeft: props => <HeaderBack {...props} />,
      }}
      initialRouteName="Profile">
      {ProfileScreens.map(item => (
        <ProfileStackNavigator.Screen
          key={item.name}
          options={item.options}
          name={item.name}
          component={item.component}
        />
      ))}
    </ProfileStackNavigator.Navigator>
  );
};

export const ProfileScreens = [
  {
    options: {headerShown: false},
    name: 'Profile',
    component: Profile,
  },
];
export default ProfileStack;
