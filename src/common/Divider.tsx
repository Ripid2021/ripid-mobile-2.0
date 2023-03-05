import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {useMemo} from 'react';
import {scaleSize} from '~/theme/size';
import {BODY_TEXT, LIGHT_GREY, YELLOW} from '~/theme/color';

type TProps = {
  size?: number;
  color?: string;
  style?: ViewStyle;
};

const Divider = ({size, color, style}: TProps) => {
  const styled = useMemo<ViewStyle>(() => {
    const base: ViewStyle = {...styles.base, ...style};
    if (size) {
      base.height = size;
    }
    if (color) {
      base.backgroundColor = color;
    }
    return base;
  }, [color, size, style]);
  return <View style={styled} />;
};

export default Divider;

const styles = StyleSheet.create({
  base: {
    height: scaleSize(5),
    width: 4000,
    color: YELLOW,
    paddingVertical: scaleSize(20),
  },
});
