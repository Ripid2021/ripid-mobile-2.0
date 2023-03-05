import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {t} from 'i18next';
import {bottomPadding, deviceWidth, scaleSize} from '~/theme/size';
import FastImage from 'react-native-fast-image';
import {AUTH} from '~/asset/graphics';
import {BLUE, BROWN, LIGHT_BACKGROUND, WHITE} from '~/theme/color';
import TextInput from '~/common/TextInput';
import Button from '~/common/Button';
import PasswordInput from '~/common/PasswordInput';
import Text from '~/common/Text';
import {useAppNavigation} from '~/hooks/useAppNavigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SSO from '~/stacks/auth/components/SSO';

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
        <SSO />
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
});

// const styles = StyleSheet.create({});
