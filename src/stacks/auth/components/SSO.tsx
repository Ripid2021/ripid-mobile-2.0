import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {scaleSize} from '~/theme/size';
import {BLACK, BODY_TEXT, LIGHT_GREY, WHITE} from '~/theme/color';
import FastImage from 'react-native-fast-image';
import {AUTH} from '~/asset/graphics';
import {t} from 'i18next';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {useMetaLogin} from '~/state/auth';
import {setAuth} from '~/state/auth/reducer';
import {useAppDispatch} from '~/hooks/useAppSelector';
import {endLoading, startLoading} from '~/state/global/reducer';

const SSO = () => {
  const dispatch = useAppDispatch();
  const {mutate: metaLoginFn} = useMetaLogin({
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

  const LOGIN_SOCIAL = useMemo(
    () => [
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
      {
        label: 'Apple',
        source: AUTH.APPLE,
        handler: () => {},
      },
    ],
    [_metaSignIn],
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
