import React, {memo} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from '~/common/Icon';
import {WHITE} from '~/theme/color';
import {shadow} from '~/theme/shadow';
import {scaleSize} from '~/theme/size';

type THeaderLeftProps = {
  onPress?: () => void;
};

const HeaderBack = ({onPress}: THeaderLeftProps) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <View style={[styles.border, shadow]}>
        <Icon size={scaleSize(16)} name="back" fill={'black'} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingLeft: scaleSize(16),
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  border: {
    padding: scaleSize(8),
    borderRadius: scaleSize(8),
    backgroundColor: WHITE,
  },
});

export default memo(HeaderBack);
