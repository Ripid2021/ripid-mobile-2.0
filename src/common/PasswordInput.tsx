import React, {PropsWithChildren, useCallback, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextInput from '~/common/TextInput';
import {BROWN} from '~/theme/color';
import {InputProps} from '@rneui/base';
import {scaleSize} from '~/theme/size';

type TProps = Omit<PropsWithChildren<InputProps>, 'ref'>;

const PasswordInput = (props: TProps) => {
  const [hidePassword, setHidePassword] = useState(true);
  const _handleTogglePassword = useCallback(() => {
    setHidePassword(prev => !prev);
  }, []);
  return (
    <TextInput
      rightIcon={
        <Ionicons
          onPress={_handleTogglePassword}
          name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
          size={scaleSize(20)}
          color={BROWN}
        />
      }
      secureTextEntry={!hidePassword}
      {...props}
    />
  );
};

export default PasswordInput;
