import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderBack from '~/custom-libs/HeaderBack';
import {centerHeaderTitle} from '~/theme/style';
import {TRANSPARENT} from '~/theme/color';
import Community from '../bottom-tab/screens/Community';

const CommunityStackNavigator = createStackNavigator();
const CommunityStack = () => {
  return (
    <CommunityStackNavigator.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: centerHeaderTitle,
        headerStyle: {backgroundColor: TRANSPARENT},
        headerLeft: props => <HeaderBack {...props} />,
      }}
      initialRouteName="Profile">
      {CommunityScreens.map(item => (
        <CommunityStackNavigator.Screen
          key={item.name}
          options={item.options}
          name={item.name}
          component={item.component}
        />
      ))}
    </CommunityStackNavigator.Navigator>
  );
};

export const CommunityScreens = [
  {
    options: {headerShown: false},
    name: 'Community',
    component: Community,
  },
] as const;
export default CommunityStack;
