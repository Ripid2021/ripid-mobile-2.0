import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {t} from 'i18next';
import {bottomPadding, deviceWidth, scaleSize} from '~/theme/size';
import FastImage from 'react-native-fast-image';
import {AUTH} from '~/asset/graphics';
import {
  BLACK,
  BLUE,
  BODY_TEXT,
  BROWN,
  LIGHT_BACKGROUND,
  LIGHT_GREY,
  WHITE,
} from '~/theme/color';
import TextInput from '~/common/TextInput';
import Button from '~/common/Button';
import PasswordInput from '~/common/PasswordInput';
import Text from '~/common/Text';
import {useAppNavigation} from '~/hooks/useAppNavigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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

const Login = () => {
  const navigation = useAppNavigation();
  const _handleSignUp = useCallback(() => {
    navigation.navigate('AuthStack', {
      screen: 'SignUp',
    });
  }, [navigation]);
  const _handleForgot = useCallback(() => {
    navigation.navigate('AuthStack', {
      screen: 'ForgotPassword',
    });
  }, [navigation]);
  const _handleLogin = useCallback(() => {
    // navigation.navigate('AuthStack', {
    //   screen: 'ForgotPassword',
    // });
  }, []);
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <FastImage style={styles.banner} source={AUTH.LOGIN_BANNER} />
      <View style={styles.content}>
        <TextInput label={t('email')} />
        <PasswordInput label={t('password')} />
        <View style={styles.row}>
          <TouchableOpacity onPress={_handleForgot}>
            <Text style={styles.forgot}>{t('forgotPassword')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_handleSignUp}>
            <Text style={styles.register}>{t('register')}</Text>
          </TouchableOpacity>
        </View>
        <Button
          onPress={_handleLogin}
          borderRadius={scaleSize(28)}
          title={t('login')}
        />
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
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_BACKGROUND,
  },
  banner: {
    width: deviceWidth,
    height: scaleSize(300),
  },
  content: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: scaleSize(24),
    paddingBottom: bottomPadding,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleSize(24),
  },
  register: {
    color: BLUE,
    fontSize: scaleSize(14),
  },
  forgot: {
    color: BROWN,
    fontSize: scaleSize(14),
    textDecorationLine: 'underline',
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
});

// const styles = StyleSheet.create({});
