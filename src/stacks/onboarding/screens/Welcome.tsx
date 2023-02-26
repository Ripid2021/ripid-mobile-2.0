import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import {bottomPadding, scaleSize} from '~/theme/size';
import {useAppNavigation} from '~/hooks/useAppNavigation';
import {FONT_FAMILY} from '~/theme/font-family';
import Button from '~/common/Button';
import {BODY_TEXT, BROWN, LIGHT_BACKGROUND, WHITE} from '~/theme/color';
import FastImage from 'react-native-fast-image';
import {ONBOARDING} from '~/asset/graphics';

const Welcome = () => {
  const navigation = useAppNavigation();
  const _handleGetStarted = () => {
    navigation.navigate('OnboardingStack', {
      screen: 'SelectHabit',
    });
  };
  const _handleAccountAlready = () => {
    navigation.navigate('AuthStack', {
      screen: 'Login',
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <FastImage style={styles.image} source={ONBOARDING.WELCOME} />
      </View>
      <View style={styles.overlay}>
        <Text style={styles.heading}>{t('welcomeToRipid')}</Text>
        <Text style={styles.intro}>{t('intro')}</Text>
        <Button
          style={styles.start}
          onPress={_handleGetStarted}
          title={t('startNow')}
        />
        <Button
          style={styles.hasAccount}
          backgroundColor={BROWN}
          color={WHITE}
          onPress={_handleAccountAlready}
          title={t('hasAccountAlready')}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  overlay: {
    backgroundColor: WHITE,
    alignSelf: 'stretch',
    borderTopEndRadius: scaleSize(40),
    borderTopStartRadius: scaleSize(40),
    padding: scaleSize(40),
    paddingBottom: bottomPadding,
    alignItems: 'center',
  },
  image: {
    width: scaleSize(300),
    height: scaleSize(300),
  },
  banner: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontFamily: FONT_FAMILY[700],
    fontSize: scaleSize(32),
    color: BROWN,
    textAlign: 'center',
  },
  intro: {
    textAlign: 'center',
    color: BODY_TEXT,
    marginTop: scaleSize(16),
  },
  start: {
    marginTop: scaleSize(32),
  },
  hasAccount: {
    marginTop: scaleSize(24),
  },
});
