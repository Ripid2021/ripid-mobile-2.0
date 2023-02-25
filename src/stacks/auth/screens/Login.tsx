import {StyleSheet, View} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import {deviceWidth, scaleSize} from '~/theme/size';
import FastImage from 'react-native-fast-image';
import {AUTH} from '~/asset/graphics';
import {LIGHT_BACKGROUND, WHITE} from '~/theme/color';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <FastImage style={styles.banner} source={AUTH.LOGIN_BANNER} />
      <View style={styles.content}></View>
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_BACKGROUND,
    flex: 1,
  },
  banner: {
    width: deviceWidth,
    height: scaleSize(300),
  },
  content: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

// const styles = StyleSheet.create({});
