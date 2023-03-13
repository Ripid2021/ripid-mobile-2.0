import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Text from '~/common/Text';
import {t} from 'i18next';
import {S16, scaleSize, SPACING} from '~/theme/size';
import {BLUE, LIGHT_GREY} from '~/theme/color';
import {useGetHabitSummary} from '~/state/onboarding';
import HabitItem from './HabitItem';
import Button from '~/common/Button';
import {useAppNavigation} from '~/hooks/useAppNavigation';

const ListHabit = () => {
  const navigation = useAppNavigation();
  const {data = []} = useGetHabitSummary({});
  const onPressSeeAll = () => {
    navigation.navigate('ProfileStack', {
      screen: 'HabitCategory',
    });
  };
  const onPressItem = () => {
    console.log('press');
  };
  const onPressSuggestNewHabit = () => {
    console.log('press');
  };
  return (
    <>
      <View style={styles.habitJoin}>
        <Text size={S16}>{t('habitJoin')}</Text>
        <TouchableOpacity onPress={onPressSeeAll}>
          <Text style={styles.labelSeeAll}>{t('seeAll')}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.habitKey}
        renderItem={({item, index}) => (
          <View
            style={{
              paddingLeft: index === 0 && S16,
            }}>
            <HabitItem index={index} item={item} onPress={onPressItem} />
          </View>
        )}
      />
      <Button
        title={t('suggestNewHabit')}
        backgroundColor={'transparent'}
        style={styles.suggestNewHabit}
        onPress={onPressSuggestNewHabit}>
        <Text style={styles.iconButton}>{'>'}</Text>
      </Button>
    </>
  );
};

export default ListHabit;

const styles = StyleSheet.create({
  habitJoin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING,
  },
  labelSeeAll: {
    fontSize: S16,
    color: BLUE,
  },
  suggestNewHabit: {
    borderWidth: scaleSize(2),
    borderColor: LIGHT_GREY,
    height: scaleSize(48),
    paddingVertical: 0,
    marginHorizontal: SPACING,
  },
  iconButton: {
    position: 'absolute',
    right: S16,
  },
});
