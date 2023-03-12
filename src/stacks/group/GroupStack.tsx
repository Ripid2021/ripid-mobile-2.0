import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderBack from '~/custom-libs/HeaderBack';
import {centerHeaderTitle} from '~/theme/style';
import {TRANSPARENT} from '~/theme/color';
import Group from '../bottom-tab/screens/Group';

const GroupStackNavigator = createStackNavigator();
const GroupStack = () => {
  return (
    <GroupStackNavigator.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: centerHeaderTitle,
        headerStyle: {backgroundColor: TRANSPARENT},
        headerLeft: props => <HeaderBack {...props} />,
      }}
      initialRouteName="Profile">
      {GroupScreens.map(item => (
        <GroupStackNavigator.Screen
          key={item.name}
          options={item.options}
          name={item.name}
          component={item.component}
        />
      ))}
    </GroupStackNavigator.Navigator>
  );
};

export const GroupScreens = [
  {
    options: {headerShown: false},
    name: 'Group',
    component: Group,
  },
] as const;
export default GroupStack;
