import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import Progress from '~/common/Progress';
import {useGetHabitSummary} from '~/state/onboarding';
import ParsedText from 'react-native-parsed-text';
import {t} from 'i18next';
import {BLACK, YELLOW} from '~/theme/color';
import {bottomPadding, scaleSize} from '~/theme/size';
import {FONT_FAMILY} from '~/theme/font-family';
import Text from '~/common/Text';
import Category from '~/stacks/onboarding/components/Category';
import {normalize} from '@rneui/themed';

const SelectHabit = () => {
  const {data} = useGetHabitSummary({});

  const _renderItem = useCallback(
    () => (
      <TouchableOpacity>
        <Category />
      </TouchableOpacity>
    ),
    [],
  );
  const _renderSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );
  const _renderHeader = useCallback(
    () => (
      <ParsedText
        parse={[
          {
            pattern: new RegExp(t('habit') || '', 'gi'),
            style: styles.habit,
          },
        ]}
        style={styles.headline}>
        {t('selectHabitToStart')}
      </ParsedText>
    ),
    [],
  );

  return (
    <>
      <Progress />
      <FlatList
        ListHeaderComponent={_renderHeader}
        ItemSeparatorComponent={_renderSeparator}
        data={Array(10).fill(1)}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    </>
  );
};

export default SelectHabit;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(16),
    paddingBottom: bottomPadding,
  },
  headline: {
    color: BLACK,
    fontSize: scaleSize(24),
    fontFamily: FONT_FAMILY[700],
    textAlign: 'center',
    paddingVertical: normalize(24),
  },
  habit: {
    fontSize: scaleSize(40),
    color: YELLOW,
  },
  separator: {
    height: scaleSize(8),
  },
});
