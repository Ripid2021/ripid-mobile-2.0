import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import Progress from '~/common/Progress';
import {ONBOARDING_PROGRESS} from '~/constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {bodyText, headlineText} from '~/theme/style';
import {t} from 'i18next';
import {bottomPadding, scaleSize} from '~/theme/size';
import ParsedText from 'react-native-parsed-text';
import Button from '~/common/Button';
import {FONT_FAMILY} from '~/theme/font-family';
import {YELLOW} from '~/theme/color';
import {useAppNavigation} from '~/hooks/useAppNavigation';

const VerifyOTP = () => {
  const navigation = useAppNavigation();
  const _handleContinue = useCallback(() => {
    navigation.navigate('OnboardingStack', {
      screen: 'CreatePassword',
    });
  }, [navigation]);
  const _handleResend = useCallback(() => {}, []);

  return (
    <>
      <Progress index={3} data={ONBOARDING_PROGRESS} />
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={headlineText}>{t('verify')}</Text>
        <ParsedText
          parse={[
            {
              type: 'email',
              style: styles.email,
            },
          ]}
          style={[bodyText, styles.hint]}>
          {t('typeOTP', {
            email: 'nkvi.dev@gmail.com',
          })}
        </ParsedText>
        <OTPTextInput
          keyboardType="numeric"
          containerStyle={styles.otpInputContainer}
          textInputStyle={styles.roundedTextInput}
          tintColor={YELLOW}
        />
        <Button onPress={_handleContinue} title={t('continue')} />
        <View style={styles.countDownView}>
          <Pressable onPress={_handleResend}>
            <Text style={styles.resend}>{t('resendOTP')}</Text>
          </Pressable>
          <Text>112s</Text>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: scaleSize(16),
    paddingBottom: bottomPadding,
  },
  hint: {
    textAlign: 'center',
    lineHeight: scaleSize(24),
  },
  email: {
    fontWeight: '700',
  },
  countDownView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: scaleSize(8),
    marginTop: scaleSize(24),
  },
  resend: {
    textDecorationLine: 'underline',
    fontSize: scaleSize(14),
    fontFamily: FONT_FAMILY[500],
  },
  otpInputContainer: {
    paddingHorizontal: scaleSize(32),
    marginVertical: scaleSize(48),
  },
  roundedTextInput: {
    borderRadius: scaleSize(100),
    borderWidth: scaleSize(4),
  },
});
