import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {scaleSize, statusBarHeight} from '~/theme/size';
import {BODY_TEXT, WHITE, YELLOW_2} from '~/theme/color';
import Text from '~/common/Text';
import {FONT_FAMILY} from '~/theme/font-family';
import {t} from 'i18next';

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

      const name = isPrevious ? 'circle-slice-8' : 'circle-outline';
      const color = isCurrent || isPrevious ? YELLOW_2 : BODY_TEXT;

      return (
        <View key={item.key} style={styles.item}>
          <MaterialCommunityIcons
            color={color}
            size={scaleSize(24)}
            name={name}
          />
          <Text color={BODY_TEXT} style={styles.text}>
            {t(item.key)}
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
    paddingHorizontal: scaleSize(12),
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
