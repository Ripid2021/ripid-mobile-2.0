import React, {useCallback} from 'react';
import Progress from '~/common/Progress';
import {FORGOT_PASSWORD_PROGRESS} from '~/constants';

import {useAppNavigation} from '~/hooks/useAppNavigation';
import CreatePasswordComponent from '~/common/CreatePassword';

const CompleteForgotPassword = () => {
  const navigation = useAppNavigation();

  const _handleContinue = useCallback(() => {
    navigation.navigate('AuthStack', {
      screen: 'Login',
    });
  }, [navigation]);

  return (
    <>
      <Progress index={2} data={FORGOT_PASSWORD_PROGRESS} />
      <CreatePasswordComponent onContinue={_handleContinue} />
    </>
  );
};

export default CompleteForgotPassword;
