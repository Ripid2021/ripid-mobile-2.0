import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {PROFILE} from '~/asset/graphics';
import Text from '~/common/Text';
import {S24, S32, scaleSize} from '~/theme/size';

type TBIOProps = {
  bio: string;
};
const BIO: React.FC<TBIOProps> = ({bio}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Bio :</Text>
        <TouchableOpacity>
          <Image
            source={PROFILE.EDIT}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Text>{bio}</Text>
    </View>
  );
};

export default BIO;

const styles = StyleSheet.create({
  container: {
    paddingTop: S24,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: scaleSize(18),
    fontWeight: '500',
  },
  icon: {
    width: S32,
    height: S32,
  },
});
