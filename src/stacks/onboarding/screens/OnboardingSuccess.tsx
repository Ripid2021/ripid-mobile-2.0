import React, {useCallback} from 'react';
import {t} from 'i18next';
import {useAppNavigation} from '~/hooks/useAppNavigation';
import Success from '~/common/Success';

const OnboardingSuccess = () => {
  const navigation = useAppNavigation();
  const _handleSuccess = useCallback(() => {
    navigation.navigate('AuthStack', {
      screen: 'Login',
    });
  }, [navigation]);
  return (
    <Success
      onPress={_handleSuccess}
      content={t('onboardingSuccessContent')}
      title={t('onboardingSuccessTitle')}
    />
  );
};

export default OnboardingSuccess;
