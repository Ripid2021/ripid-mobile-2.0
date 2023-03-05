import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {useMemo} from 'react';
import Text from '~/common/Text';
import {scaleSize} from '~/theme/size';
import {BROWN, YELLOW_2} from '~/theme/color';
import {FONT_FAMILY} from '~/theme/font-family';

type TProps = {
  title: string;
  color?: string;
  onPress: () => void;
  backgroundColor?: string;
  borderRadius?: number;
  style?: ViewStyle;
};

const Button = ({
  title,
  onPress,
  backgroundColor = YELLOW_2,
  borderRadius = scaleSize(28),
  color,
  style,
}: TProps) => {
  const combinedStyle = useMemo<StyleProp<TextStyle>>(() => {
    return {
      ...styles.base,
      backgroundColor,
      borderRadius,
      ...style,
    };
  }, [backgroundColor, borderRadius, style]);
  return (
    <TouchableOpacity style={combinedStyle} onPress={onPress}>
      <Text style={[styles.title, color ? {color} : {}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  base: {
    paddingVertical: scaleSize(16),
    paddingHorizontal: scaleSize(24),

    backgroundColor: YELLOW_2,
    borderRadius: scaleSize(28),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  title: {
    color: BROWN,
    fontFamily: FONT_FAMILY[700],
  },
});
