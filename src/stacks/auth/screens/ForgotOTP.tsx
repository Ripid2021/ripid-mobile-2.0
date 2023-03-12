import React, {useCallback} from 'react';
import Progress from '~/common/Progress';
import {FORGOT_PASSWORD_PROGRESS} from '~/constants';

import {useAppNavigation} from '~/hooks/useAppNavigation';
import OTP from '~/common/OTP';

const ForgotOTP = () => {
  const navigation = useAppNavigation();
  const _handleContinue = useCallback(() => {
    navigation.navigate('AuthStack', {
      screen: 'CompleteForgotPassword',
    });
  }, [navigation]);
  const _handleResend = useCallback(() => {}, []);

  return (
    <>
      <Progress index={1} data={FORGOT_PASSWORD_PROGRESS} />
      <OTP
        onResend={_handleResend}
        onContinue={_handleContinue}
        email="nkvi.dev@gmail.com"
      />
    </>
  );
};

export default ForgotOTP;
