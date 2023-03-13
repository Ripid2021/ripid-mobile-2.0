import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {scaleSize} from '~/theme/size';
import {BLACK, BODY_TEXT, LIGHT_GREY, WHITE} from '~/theme/color';
import FastImage from 'react-native-fast-image';
import {AUTH} from '~/asset/graphics';
import {t} from 'i18next';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {useAppleLogin, useMetaLogin} from '~/state/auth';
import {setAuth} from '~/state/auth/reducer';
import {useAppDispatch} from '~/hooks/useAppSelector';
import {endLoading, startLoading} from '~/state/global/reducer';
import appleAuth from '@invertase/react-native-apple-authentication';
import jwtDecode from 'jwt-decode';

const SSO = () => {
  const dispatch = useAppDispatch();
  const {mutate: metaLoginFn} = useMetaLogin({
    onSuccess: data => {
      dispatch(setAuth(data));
    },
    onMutate: () => {
      dispatch(startLoading());
    },
    onSettled: () => {
      dispatch(endLoading());
    },
  });
  const {mutate: appleLoginFn} = useAppleLogin({
    onSuccess: data => {
      console.log({data});

      dispatch(setAuth(data));
    },
    onMutate: () => {
      dispatch(startLoading());
    },
    onSettled: () => {
      dispatch(endLoading());
    },
  });
  const _metaSignIn = useCallback(async () => {
    if (Platform.OS === 'android') LoginManager.setLoginBehavior('web_only');

    await LoginManager.logInWithPermissions(
      ['public_profile', 'email'],
      'enabled',
      'nonceIos',
    ).then(
      res => res,
      err => err,
    );
    const accessToken = await AccessToken.getCurrentAccessToken().then(
      res => res?.accessToken,
    );

    if (accessToken) metaLoginFn({token: accessToken});
    throw new Error('NO TOKEN');
  }, [metaLoginFn]);

  const _appleSignIn = useCallback(async () => {
    // Must read if maintain: https://github.com/invertase/react-native-apple-authentication#4-implement-the-logout-process
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.REFRESH,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );
    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
    }
    if (appleAuthRequestResponse.identityToken) {
      const {email, sub} = jwtDecode<{email: string; sub: string}>(
        appleAuthRequestResponse.identityToken,
      );

      appleLoginFn({
        email,
        idToken: appleAuthRequestResponse.identityToken,
        userAppleId: sub,
      });
    }
  }, [appleLoginFn]);

  const LOGIN_SOCIAL = useMemo(
    () =>
      [
        {
          label: 'Google',
          source: AUTH.GOOGLE,
          handler: () => {},
        },
        {
          label: 'Facebook',
          source: AUTH.FACEBOOK,
          handler: _metaSignIn,
        },
      ].concat(
        ...(Platform.OS === 'ios'
          ? [
              {
                label: 'Apple',
                source: AUTH.APPLE,
                handler: _appleSignIn,
              },
            ]
          : []),
      ),
    [_appleSignIn, _metaSignIn],
  );
  return (
    <>
      <View style={styles.socialView}>
        <View style={styles.line} />
        <Text style={styles.loginSocial}>{t('orLoginWith')}</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialWrapper}>
        {LOGIN_SOCIAL.map(item => (
          <TouchableOpacity
            onPress={item.handler}
            style={styles.socialItem}
            key={item.label}>
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
