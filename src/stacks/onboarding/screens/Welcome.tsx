import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {t} from 'i18next';

const Welcome = () => {
  return (
    <View>
      <Text>{t('welcomeToRipid')}</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
