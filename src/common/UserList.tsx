import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import React, {useCallback} from 'react';
import {ONBOARDING} from '~/asset/graphics';
import {scaleSize} from '~/theme/size';
import {WHITE} from '~/theme/color';

const UserList = () => {
  const _renderItem = useCallback((_: any, idx: number) => {
    const is1st = idx == 0;
    return (
      <Avatar
        size={scaleSize(28)}
        rounded
        containerStyle={[
          styles.avatar,
          is1st
            ? {}
            : {
                ...styles.abs,
                left: idx * (scaleSize(28) - scaleSize(6)),
              },
        ]}
        source={ONBOARDING.WEAK_UP}
      />
    );
  }, []);
  return (
    <View style={styles.container}>{Array(5).fill(1).map(_renderItem)}</View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    borderWidth: scaleSize(1),
    borderColor: WHITE,
    backgroundColor: WHITE,
  },
  abs: {
    position: 'absolute',
  },
});
