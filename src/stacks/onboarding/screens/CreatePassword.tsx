import React, {useCallback} from 'react';
import Progress from '~/common/Progress';
import {ONBOARDING_PROGRESS} from '~/constants';

import {useAppNavigation} from '~/hooks/useAppNavigation';
import CreatePasswordComponent from '~/common/CreatePassword';

const CreatePassword = () => {
  const navigation = useAppNavigation();

  const _handleContinue = useCallback(() => {
    navigation.navigate('OnboardingStack', {
      screen: 'PersonalInformation',
    });
  }, [navigation]);

  return (
    <>
      <Progress index={3} data={ONBOARDING_PROGRESS} />
      <CreatePasswordComponent onContinue={_handleContinue} />
    </>
  );
};

export default CreatePassword;
