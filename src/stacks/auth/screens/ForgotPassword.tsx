import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import Progress from '~/common/Progress';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FORGOT_PASSWORD_PROGRESS} from '~/constants';
import {bodyText, borderCard, headlineText} from '~/theme/style';
import {t} from 'i18next';
import {bottomPadding, scaleSize} from '~/theme/size';
import TextInput from '~/common/TextInput';
import Button from '~/common/Button';
import {useAppNavigation} from '~/hooks/useAppNavigation';
import {BROWN, WHITE} from '~/theme/color';

const ForgotPassword = () => {
  const navigation = useAppNavigation();
  const _handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const _handleContinue = useCallback(() => {
    navigation.navigate('AuthStack', {
      screen: 'ForgotOTP',
    });
  }, [navigation]);
  return (
    <>
      <Progress index={0} data={FORGOT_PASSWORD_PROGRESS} />
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={headlineText}>{t('forgotPassword')}</Text>
        <View style={borderCard}>
          <TextInput
            label={t('typeYourEmail')}
            labelStyle={bodyText}
            placeholder={t('email') || ''}
          />
          <View style={styles.buttonGroup}>
            <Button
              onPress={_handleGoBack}
              style={styles.button}
              color={WHITE}
              backgroundColor={BROWN}
              title={t('goBack')}
            />
            <Button
              onPress={_handleContinue}
              style={styles.button}
              title={t('continue')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: scaleSize(16),
    paddingBottom: bottomPadding,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: scaleSize(24),
  },
  button: {
    flex: 1,
  },
});
