import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {scaleSize} from '~/theme/size';
import {WHITE} from '~/theme/color';
import FastImage from 'react-native-fast-image';
import {ONBOARDING} from '~/asset/graphics';
import Text from '~/common/Text';
import {FONT_FAMILY} from '~/theme/font-family';
import UserList from '~/common/UserList';
import {THabitItem} from '~/state/onboarding/type';
import {t} from 'i18next';
import * as COLORS from '~/theme/color';

type TProps = {
  data: THabitItem;
  index: number;
  onPress: () => void;
};
const Category = ({data, index, onPress}: TProps) => {
  const isOdd = useMemo(() => index % 2 === 0, [index]);
  const LIST_GRADIENT = useMemo(
    () =>
      Object.values(COLORS).filter(item => Array.isArray(item)) as string[][],
    [],
  );
  const uri = useMemo(
    () => ONBOARDING[data.habitKey] || ONBOARDING.WAKE_UP_EARLY,
    [data.habitKey],
  );

  const colors = useMemo<string[]>(
    () => LIST_GRADIENT[index % LIST_GRADIENT.length],
    [LIST_GRADIENT, index],
  );

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={colors}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.item, {flexDirection: isOdd ? 'row-reverse' : 'row'}]}>
        <View style={styles.f1} />
        <View style={[styles.f1, styles.contentView]}>
          <Text style={styles.title}>{data.habitTitle}</Text>
          <UserList users={data.users || []} />
          <Text style={styles.numPeople}>
            {t('selectThisHabit', {count: data.count})}
          </Text>
        </View>
      </LinearGradient>
      <FastImage
        style={[
          styles.graphic,
          isOdd ? {right: scaleSize(20)} : {left: scaleSize(20)},
        ]}
        source={uri}
      />
    </TouchableOpacity>
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
    paddingHorizontal: scaleSize(32),
  },
});
