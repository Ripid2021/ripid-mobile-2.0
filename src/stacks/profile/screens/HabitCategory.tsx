import {View, ListRenderItem, FlatList, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {useGetHabitSummary} from '~/state/onboarding';
import {normalize} from '@rneui/themed';
import {bottomPadding, scaleSize} from '~/theme/size';
import {TouchableOpacity} from 'react-native';
import Category from '~/stacks/onboarding/components/Category';
import {THabitItem} from '~/state/onboarding/type';

const HabitCategory = () => {
  const {data = []} = useGetHabitSummary({});

  const _renderItem = useCallback<ListRenderItem<THabitItem>>(
    ({item, index}) => (
      <TouchableOpacity key={item.habitKey}>
        <Category index={index} data={item} />
      </TouchableOpacity>
    ),
    [],
  );
  const _renderSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );
  return (
    <FlatList<THabitItem>
      ItemSeparatorComponent={_renderSeparator}
      data={data}
      renderItem={_renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

export default HabitCategory;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(16),
    paddingBottom: bottomPadding,
  },
  separator: {
    height: scaleSize(8),
  },
});
