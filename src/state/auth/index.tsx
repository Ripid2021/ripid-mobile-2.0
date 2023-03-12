import {useMutation, UseMutationOptions, UseMutationResult} from 'react-query';
import BaseAxios from '~/config/base-axios';
import {LoginDto, TAuth} from '~/state/auth/type';
import {TBaseError} from '~/type';

type UseLogin = (
  args: UseMutationOptions<TAuth, TBaseError, LoginDto>,
) => UseMutationResult<TAuth, TBaseError, LoginDto>;
export const useLogin: UseLogin = arg => {
  return useMutation(
    ['AUTH/LOGIN'],
    dto => {
      return BaseAxios.post('/auth/login', dto).then(response => response.data);
    },
    {
      ...arg,
    },
  );
};
