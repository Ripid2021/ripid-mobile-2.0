import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {ONBOARDING} from '~/asset/graphics';
import Text from '~/common/Text';
import {THabitItem} from '~/state/onboarding/type';
import * as COLORS from '~/theme/color';
import {S16, S24, S8, scaleSize} from '~/theme/size';

type THabitItemProps = {
  item: THabitItem;
  index: number;
  onPress: () => void;
};

const HabitItem = ({item, index, onPress}: THabitItemProps) => {
  const LIST_GRADIENT = useMemo(
    () =>
      Object.values(COLORS).filter(item => Array.isArray(item)) as string[][],
    [],
  );
  const colors = useMemo<string[]>(
    () => LIST_GRADIENT[index],
    [LIST_GRADIENT, index],
  );
  const uri = useMemo(
    () => ONBOARDING[item.habitKey] || ONBOARDING.WAKE_UP_EARLY,
    [item.habitKey],
  );

  return (
    <TouchableOpacity onPress={onPress} style={styles.containerWrapper}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
        <FastImage style={[styles.graphic]} source={uri} />
      </LinearGradient>
      <Text style={styles.labelHabit}>{item?.habitTitle}</Text>
    </TouchableOpacity>
  );
};

export default HabitItem;

const styles = StyleSheet.create({
  containerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: S24,
    marginRight: S16,
  },
  container: {
    width: scaleSize(80),
    height: scaleSize(80),
    borderRadius: scaleSize(40),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphic: {
    width: scaleSize(48),
    height: scaleSize(48),
    resizeMode: 'contain',
  },
  labelHabit: {
    fontSize: scaleSize(12),
    paddingTop: S8,
  },
});
