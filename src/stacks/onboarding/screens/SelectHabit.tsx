import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import React, {useCallback} from 'react';
import Progress from '~/common/Progress';
import {useGetHabitSummary} from '~/state/onboarding';
import ParsedText from 'react-native-parsed-text';
import {t} from 'i18next';
import {BLACK, YELLOW} from '~/theme/color';
import {bottomPadding, scaleSize} from '~/theme/size';
import {FONT_FAMILY} from '~/theme/font-family';
import Category from '~/stacks/onboarding/components/Category';
import {normalize} from '@rneui/themed';
import {THabitItem} from '~/state/onboarding/type';
import {ONBOARDING_PROGRESS} from '~/constants';
import {useAppNavigation} from '~/hooks/useAppNavigation';
import {headlineText} from '~/theme/style';

const SelectHabit = () => {
  const {data = []} = useGetHabitSummary({});
  const navigation = useAppNavigation();

  const _handleHabitPress = useCallback(
    (item: THabitItem) => () => {
      navigation.navigate('OnboardingStack', {
        screen: 'HabitSetting',
      });
    },
    [navigation],
  );

  const _renderItem = useCallback<ListRenderItem<THabitItem>>(
    ({item, index}) => (
      <TouchableOpacity key={item.habitKey}>
        <Category onPress={_handleHabitPress(item)} index={index} data={item} />
      </TouchableOpacity>
    ),
    [_handleHabitPress],
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
        style={headlineText}>
        {t('selectHabitToStart')}
      </ParsedText>
    ),
    [],
  );

  return (
    <>
      <Progress index={0} data={ONBOARDING_PROGRESS} />
      <FlatList<THabitItem>
        ListHeaderComponent={_renderHeader}
        ItemSeparatorComponent={_renderSeparator}
        data={data}
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

  habit: {
    fontSize: scaleSize(40),
    color: YELLOW,
  },
  separator: {
    height: scaleSize(8),
  },
});
