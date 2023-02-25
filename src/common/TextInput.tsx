import {StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Input, InputProps} from '@rneui/themed';
import {scaleSize} from '~/theme/size';
import {BODY_TEXT, BROWN} from '~/theme/color';
import {FONT_FAMILY} from '~/theme/font-family';

type TProps = Omit<PropsWithChildren<InputProps>, 'ref'>;

const TextInput = (props: TProps) => {
  return (
    <Input
      labelStyle={styles.label}
      inputContainerStyle={styles.inputContainer}
      style={styles.text}
      {...props}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: scaleSize(1),
    borderColor: BODY_TEXT,
    borderRadius: scaleSize(8),
    paddingHorizontal: scaleSize(12),
    marginVertical: scaleSize(6),
  },
  label: {
    fontFamily: FONT_FAMILY[400],
    fontWeight: '400',
    fontSize: scaleSize(14),
    color: BROWN,
  },
  text: {
    fontFamily: FONT_FAMILY[400],
    fontWeight: '400',
    fontSize: scaleSize(16),
    color: BROWN,
  },
});
