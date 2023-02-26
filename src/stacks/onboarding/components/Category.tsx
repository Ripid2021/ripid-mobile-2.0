import {StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {scaleSize} from '~/theme/size';
import {BLUE_1, BLUE_GRADIENT, WHITE} from '~/theme/color';
import FastImage from 'react-native-fast-image';
import {ONBOARDING} from '~/asset/graphics';
import Text from '~/common/Text';
import {FONT_FAMILY} from '~/theme/font-family';
import UserList from '~/common/UserList';

const Category = () => {
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={BLUE_GRADIENT}
        style={styles.item}>
        <View style={styles.f1} />
        <View style={[styles.f1, styles.contentView]}>
          <Text style={styles.title}>Dậy sớm</Text>
          <UserList />
          <Text style={styles.numPeople}>140 người chọn thói quen này</Text>
        </View>
      </LinearGradient>
      <FastImage style={styles.graphic} source={ONBOARDING.WEAK_UP} />
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  item: {
    height: scaleSize(120),
    marginBottom: scaleSize(26),
    flexDirection: 'row',
    borderRadius: scaleSize(16),
  },
  graphic: {
    width: scaleSize(138),
    height: scaleSize(138),
    position: 'absolute',
    bottom: 0,
    left: scaleSize(20),
  },
  f1: {
    flex: 1,
  },
  title: {
    color: WHITE,
    fontFamily: FONT_FAMILY[700],
    fontSize: scaleSize(20),
  },
  numPeople: {
    color: WHITE,
    fontSize: scaleSize(12),
  },
  contentView: {
    paddingVertical: scaleSize(16),
  },
});
