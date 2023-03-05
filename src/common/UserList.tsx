import {StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import React, {useCallback} from 'react';
import {scaleSize} from '~/theme/size';
import {WHITE, LIGHT_GREY} from '~/theme/color';
import {TUser} from '~/state/onboarding/type';
import {getChars} from '~/helper';

type TProps = {
  users: TUser[];
};

const UserList = ({users = []}: TProps) => {
  const _renderItem = useCallback((item: TUser, idx: number) => {
    const is1st = idx == 0;
    return (
      <Avatar
        key={idx}
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
        title={getChars(item)}
        source={{uri: item.avatar || undefined}}
      />
    );
  }, []);
  return <View style={styles.container}>{users.map(_renderItem)}</View>;
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    borderWidth: scaleSize(1),
    borderColor: WHITE,
    backgroundColor: LIGHT_GREY,
  },
  abs: {
    position: 'absolute',
  },
});
