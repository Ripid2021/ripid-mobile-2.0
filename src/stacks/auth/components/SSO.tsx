import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaleSize} from '~/theme/size';
import {BLACK, BODY_TEXT, LIGHT_GREY, WHITE} from '~/theme/color';
import FastImage from 'react-native-fast-image';
import {AUTH} from '~/asset/graphics';
import {t} from 'i18next';

export const LOGIN_SOCIAL = [
  {
    label: 'Google',
    source: AUTH.GOOGLE,
  },
  {
    label: 'Facebook',
    source: AUTH.FACEBOOK,
  },
  {
    label: 'Apple',
    source: AUTH.APPLE,
  },
];

const SSO = () => {
  return (
    <>
      <View style={styles.socialView}>
        <View style={styles.line} />
        <Text style={styles.loginSocial}>{t('orLoginWith')}</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialWrapper}>
        {LOGIN_SOCIAL.map(item => (
          <TouchableOpacity style={styles.socialItem} key={item.label}>
            <FastImage style={styles.socialIcon} source={item.source} />
            <Text style={styles.socialLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default SSO;

const styles = StyleSheet.create({
  socialIcon: {
    width: scaleSize(20),
    height: scaleSize(20),
  },
  socialItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scaleSize(16),
    borderColor: LIGHT_GREY,
    borderWidth: scaleSize(1),
    borderRadius: scaleSize(12),
    marginVertical: scaleSize(8),
    backgroundColor: WHITE,
  },
  socialWrapper: {
    paddingVertical: scaleSize(16),
    paddingHorizontal: scaleSize(32),
  },
  socialLabel: {
    marginLeft: scaleSize(10),
    fontSize: scaleSize(16),
    color: BLACK,
  },
  socialView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleSize(16),
  },
  line: {
    height: scaleSize(2),
    width: scaleSize(32),
    backgroundColor: BODY_TEXT,
  },
  loginSocial: {
    marginHorizontal: scaleSize(8),
  },
});
