import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';
import BaseAxios from '~/config/base-axios';
import {THabitSummary} from '~/state/onboarding/type';
import {TBaseError} from '~/type';
import {GET_PROFILE} from './type';
//use it later because i don't know how
type UseGetProfile = (
  arg: UseQueryOptions<THabitSummary, TBaseError, THabitSummary, string[]>,
) => UseQueryResult<THabitSummary, TBaseError>;

export const useGetProfile: UseGetProfile = () => {
  return useQuery([GET_PROFILE], () => {
    return BaseAxios.get('/user/info').then(response => response.data);
  });
};

export const usePostFeedback = () => {
  const _onSuccess = () => {
    console.log('success');
  };
  return useMutation(
    ({message}) => BaseAxios.post('/feedback', {message}).then(res => res.data),
    {
      onSuccess: _onSuccess,
    },
  );
};
