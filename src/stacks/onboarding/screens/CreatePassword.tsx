import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Progress from '~/common/Progress';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ONBOARDING_PROGRESS} from '~/constants';
import {borderCard, headlineText} from '~/theme/style';
import {t} from 'i18next';
import {bottomPadding, scaleSize} from '~/theme/size';
import Button from '~/common/Button';
import {useAppNavigation} from '~/hooks/useAppNavigation';
import PasswordInput from '~/common/PasswordInput';
import TermsConditionsAgreement from '~/stacks/onboarding/components/TermsConditionsAgreement';
import PasswordValidator from '~/stacks/onboarding/components/PasswordValidator';

const CreatePassword = () => {
  const navigation = useAppNavigation();
  const [state, setState] = useState({
    password: '',
  });

  const _handleContinue = useCallback(() => {
    navigation.navigate('OnboardingStack', {
      screen: 'Register',
    });
  }, [navigation]);

  const _handleChangePassword = useCallback((text: string) => {
    setState(prev => ({
      ...prev,
      password: text,
    }));
  }, []);
  return (
    <>
      <Progress index={3} data={ONBOARDING_PROGRESS} />
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={headlineText}>{t('createPassword')}</Text>
        <View style={borderCard}>
          <PasswordInput
            label={t('password')}
            value={state.password}
            onChangeText={_handleChangePassword}
            // labelStyle={bodyText}
            // placeholder={t('email') || ''}
          />
          <PasswordInput
            label={t('reTypePassword')}
            // labelStyle={bodyText}
            // placeholder={t('email') || ''}
            errorStyle={{height: scaleSize(0)}}
          />
          <View style={styles.padding}>
            <PasswordValidator password={state.password} />

            <TermsConditionsAgreement />
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

export default CreatePassword;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: scaleSize(16),
    paddingBottom: bottomPadding,
  },
  button: {
    flex: 1,
  },
  padding: {
    paddingHorizontal: scaleSize(8),
  },
});
