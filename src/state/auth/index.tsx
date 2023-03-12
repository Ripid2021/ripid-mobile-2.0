import {LoginManager} from 'react-native-fbsdk-next';
import {useMutation, UseMutationOptions, UseMutationResult} from 'react-query';
import BaseAxios from '~/config/base-axios';
import {useAppDispatch} from '~/hooks/useAppSelector';
import {clearAuth, setAuth} from '~/state/auth/reducer';
import {LoginDto, SSODto, TAuth} from '~/state/auth/type';
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

type UseSignOut = (
  args: UseMutationOptions<undefined, TBaseError, undefined>,
) => UseMutationResult<undefined, TBaseError, undefined>;
export const useSignOut: UseSignOut = () => {
  const dispatch = useAppDispatch();
  return useMutation(['AUTH/SIGN_OUT'], () => {
    LoginManager.logOut();
    // GoogleSignin.revokeAccess();
    // GoogleSignin.signOut();
    // appleAuth.performRequest({
    //   requestedOperation: appleAuth.Operation.LOGOUT,
    // });
    dispatch(clearAuth());
    BaseAxios.defaults.headers.common.Authorization = undefined;
    return Promise.resolve(undefined);
  });
};

type UseMetaLogin = (
  args: UseMutationOptions<TAuth, TBaseError, SSODto>,
) => UseMutationResult<TAuth, TBaseError, SSODto>;
export const useMetaLogin: UseMetaLogin = arg => {
  return useMutation(
    ['AUTH/LOGIN_META'],
    dto => {
      return BaseAxios.post('/auth/login/meta', dto).then(
        response => response.data,
      );
    },
    {
      ...arg,
    },
  );
};
