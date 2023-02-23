import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {scaleSize} from '~/theme/size';

const Category = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#5379FF', '#AEBDF5']}
      style={styles.item}>
      <Text>Sign in with Facebook</Text>
    </LinearGradient>
  );
};

export default Category;

const styles = StyleSheet.create({
  item: {
    height: scaleSize(120),
  },
});
