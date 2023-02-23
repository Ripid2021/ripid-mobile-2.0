import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import Icon from '~/common/Icon';
import {scaleSize} from '~/theme/size';
import Category from '~/stacks/onboarding/components/Category';
import {useAppNavigation} from '~/hooks/useAppNavigation';

const Welcome = () => {
  const navigation = useAppNavigation();
  const login = () => {
    navigation.navigate('AuthStack', {
      screen: 'Login',
    });
  };
  return (
    <View>
      <Text>{t('welcomeToRipid')}</Text>
      <Icon size={scaleSize(32)} name="eye" fill={'black'} />
      <Category />
      <Button onPress={login} title="Press" />
    </View>
  );
};

export default Welcome;

// const styles = StyleSheet.create({});
