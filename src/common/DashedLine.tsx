import React, {useEffect, useMemo, useState} from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import Svg, {Line} from 'react-native-svg';
import {useComponentSize} from '~/hooks/useComponentSize';
import {BODY_TEXT} from '~/theme/color';
import {scaleSize} from '~/theme/size';

type TDashedLineProps = {
  isHorizontal?: boolean;
  color?: string;
  dashLength?: number;
  dashThickness?: number;
  dashGap?: number;
  lineLength?: number | undefined;
  /**
   * wrapperStyle can define static width or height for DashedLine
   */
  wrapperStyle?: StyleProp<ViewStyle>;
  lineProps?: Line;
};

const DashedLine = ({
  isHorizontal = false,
  color = BODY_TEXT,
  dashLength = scaleSize(3),
  dashThickness = scaleSize(2),
  dashGap = scaleSize(3),
  lineLength,
  wrapperStyle,
  lineProps,
}: TDashedLineProps) => {
  const [size, onLayout] = useComponentSize();
  const [dashedLineLength, setDashedLineLength] = useState(lineLength);

  const dashedLineProps = useMemo(
    () => ({
      stroke: color,
      strokeWidth: dashThickness,
      strokeDasharray: `${dashLength}, ${dashGap}`,
      x1: '0',
      y1: '0',
      x2: isHorizontal ? dashedLineLength : '0',
      y2: isHorizontal ? '0' : dashedLineLength,
      ...lineProps,
    }),
    [
      color,
      dashGap,
      dashLength,
      dashThickness,
      dashedLineLength,
      isHorizontal,
      lineProps,
    ],
  );

  useEffect(() => {
    setDashedLineLength(isHorizontal ? size.width : size.height);
  }, [isHorizontal, size.height, size.width]);

  return (
    <View
      onLayout={onLayout}
      style={[
        styles.wrapperStyles,
        isHorizontal ? styles.row : styles.column,
        wrapperStyle,
      ]}>
      <Svg height={dashedLineLength} width={dashThickness}>
        <Line {...dashedLineProps} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperStyles: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});

export default DashedLine;
