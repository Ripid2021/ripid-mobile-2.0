import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {scaleSize, statusBarHeight} from '~/theme/size';
import {BODY_TEXT, WHITE, YELLOW_2} from '~/theme/color';
import Icon from '~/common/Icon';
import Text from '~/common/Text';
import {FONT_FAMILY} from '~/theme/font-family';

type TDataItem = {
  key: string;
};

const data: TDataItem[] = [
  {
    key: 'habit',
  },
  {
    key: 'target',
  },
  {
    key: 'register',
  },
  {
    key: 'verify',
  },
  {
    key: 'profile',
  },
];

type TProps = {
  data: TDataItem[];
  index: number;
};

const Progress = ({index = 1}: TProps) => {
  const _renderItem = useCallback(
    (item: TDataItem, idx: number) => {
      const isCurrent = index === idx;
      const isPrevious = index > idx;

      const name = isCurrent ? 'circle-fill' : 'circle';
      const fill = isCurrent ? YELLOW_2 : WHITE;

      const stroke = isCurrent || isPrevious ? YELLOW_2 : BODY_TEXT;

      return (
        <View key={item.key} style={styles.item}>
          <Icon size={scaleSize(30)} stroke={stroke} fill={fill} name={name} />
          <Text color={BODY_TEXT} style={styles.text}>
            {item.key}
          </Text>
        </View>
      );
    },
    [index],
  );
  return <View style={styles.container}>{data.map(_renderItem)}</View>;
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleSize(16),
    paddingTop: statusBarHeight + scaleSize(16),
    backgroundColor: WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: scaleSize(12),
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: scaleSize(12),
    fontFamily: FONT_FAMILY[400],
    marginTop: scaleSize(6),
  },
});
