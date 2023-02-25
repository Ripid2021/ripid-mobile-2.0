import {StyleSheet, Text as Base, TextProps} from 'react-native';
import React from 'react';
import {FONT_FAMILY} from '~/theme/font-family';
import {BROWN} from '~/theme/color';

type TProps = TextProps & {
  color?: string;
};

const Text = ({color = BROWN, ...props}: TProps) => {
  return (
    <Base {...props} style={[styles.base, {color}, props.style]}>
      {props.children}
    </Base>
  );
};

export default Text;

const styles = StyleSheet.create({
  base: {
    fontFamily: FONT_FAMILY[400],
    color: BROWN,
  },
});
