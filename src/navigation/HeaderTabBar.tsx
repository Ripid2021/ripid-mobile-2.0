import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {scaleSize, SPACING} from '~/theme/size';
import Text from '~/common/Text';
import {BLACK} from '~/theme/color';
import {PROFILE} from '~/asset/graphics';

type THeaderTabBarProps = {
  title: string;
  children: any;
  onPress: () => void;
};

const HeaderTabBar = ({title, children, onPress}: THeaderTabBarProps) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <View style={styles.rightComponent}>
        {children}
        <TouchableOpacity onPress={onPress}>
          <Image source={PROFILE.SETTING} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderTabBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING,
  },
  title: {
    fontSize: scaleSize(24),
    color: BLACK,
    fontWeight: '700',
    flex: 1,
  },
  rightComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
