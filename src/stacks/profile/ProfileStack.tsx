import {createStackNavigator} from '@react-navigation/stack';
import {t} from 'i18next';
import React from 'react';
import HeaderBack from '~/custom-libs/HeaderBack';
import {TRANSPARENT} from '~/theme/color';
import {centerHeaderTitle} from '~/theme/style';
import HabitCategory from './screens/HabitCategory';
import MemberSameGroup from './screens/MemberSameGroup';
import MessageGroup from './screens/MessageGroup';
import Profile from './screens/Profile';

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
  {
    options: () => ({
      headerShown: true,
      title: t('member'),
    }),
    name: 'MemberSameGroup',
    component: MemberSameGroup,
  },
  {
    options: () => ({
      headerShown: true,
      title: t('mail'),
    }),
    name: 'MessageGroup',
    component: MessageGroup,
  },
  {
    options: () => ({
      headerShown: true,
      title: t('habit'),
    }),
    name: 'HabitCategory',
    component: HabitCategory,
  },
] as const;
export default ProfileStack;
