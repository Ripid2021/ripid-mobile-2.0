import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import Icon from '~/common/Icon';
import {scaleSize} from '~/theme/size';

const Welcome = () => {
  return (
    <View>
      <Text>{t('welcomeToRipid')}</Text>
      <Icon size={scaleSize(32)} name="eye" fill={'black'} />
    </View>
  );
};

export default Welcome;

// const styles = StyleSheet.create({});
