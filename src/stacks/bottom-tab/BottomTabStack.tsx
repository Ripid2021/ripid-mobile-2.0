import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {t} from 'i18next';
import React from 'react';
import {Platform, Pressable, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BOTTOM_TAB} from '~/asset/graphics';
import Community from '~/stacks/bottom-tab/screens/Community';
import Group from '~/stacks/bottom-tab/screens/Group';
import Profile from '~/stacks/bottom-tab/screens/Profile';
import {YELLOW} from '~/theme/color';
import {bottomHeight, S20, scaleSize} from '~/theme/size';

const BottomTab = createBottomTabNavigator();

const CustomTabButton = (props: BottomTabBarButtonProps) => (
  <Pressable
    {...props}
    style={
      props.accessibilityState.selected
        ? [props.style, styles.tabBarItemActive]
        : props.style
    }
  />
);

const BottomTabStack = () => {
  // const {data: dataInfo = []} = useGetProfile({});
  return (
    <BottomTab.Navigator
      initialRouteName="ProfileStack"
      screenOptions={() => {
        return {
          tabBarStyle: [
            styles.barItemContainer,
            // {
            //   display:
            //     getFocusedRouteNameFromRoute(props.route) !== undefined
            //       ? 'none'
            //       : 'flex',
            // },
          ],
        };
      }}>
      <BottomTab.Screen
        name={'Community'}
        component={Community}
        options={{
          title: `${t('community')}`,
          tabBarIcon: ({focused}) => {
            return (
              <FastImage
                style={styles.icon}
                source={
                  focused ? BOTTOM_TAB.COMMUNITY_SELECTED : BOTTOM_TAB.COMMUNITY
                }
              />
            );
          },
          tabBarButton: CustomTabButton,
          headerShown: false,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <BottomTab.Screen
        name={'Group'}
        component={Group}
        options={{
          title: `${t('group')}`,
          tabBarIcon: ({focused}) => {
            return (
              <FastImage
                style={styles.icon}
                source={focused ? BOTTOM_TAB.GROUP_SELECTED : BOTTOM_TAB.GROUP}
              />
            );
          },
          headerShown: false,
          tabBarButton: CustomTabButton,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <BottomTab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          title: `${t('me')}`,
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: false,
          // tabBarIcon: ({focused}) => (
          //   <>
          //     {dataInfo?.avatar?.source ? (
          //       <Avatar
          //         rounded
          //         source={{uri: dataInfo?.avatar?.source}}
          //         // eslint-disable-next-line react-native/no-inline-styles
          //         containerStyle={{
          //           ...styles.barItem,
          //           borderWidth: focused ? normalize(1) : 0,
          //           borderRadius: normalize(20),
          //           borderColor: Colors.LIGHT_YELLOW,
          //         }}
          //       />
          //     ) : (
          //       <Image
          //         source={
          //           focused
          //             ? assets.home.personal_selected
          //             : assets.home.personal
          //         }
          //         style={styles.barItem}
          //       />
          //     )}
          //   </>
          // ),
          tabBarButton: CustomTabButton,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabStack;

const styles = StyleSheet.create({
  tabBarItemActive: {
    borderTopColor: YELLOW,
    borderTopWidth: scaleSize(3),
  },
  barItemContainer: {
    paddingBottom: bottomHeight,
    height: Platform.select({
      android: scaleSize(55),
      ios: scaleSize(80),
    }),
  },
  tabBarLabel: {
    fontSize: scaleSize(13),
  },
  icon: {
    width: S20,
    height: S20,
    resizeMode: 'contain',
  },
});
