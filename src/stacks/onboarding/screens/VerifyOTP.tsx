import React, {useCallback} from 'react';
import Progress from '~/common/Progress';
import {ONBOARDING_PROGRESS} from '~/constants';

import {useAppNavigation} from '~/hooks/useAppNavigation';
import OTP from '~/common/OTP';

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
      <OTP
        onResend={_handleResend}
        onContinue={_handleContinue}
        email="nkvi.dev@gmail.com"
      />
    </>
  );
};

export default VerifyOTP;
