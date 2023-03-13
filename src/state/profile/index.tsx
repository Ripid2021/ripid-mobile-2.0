import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';
import BaseAxios from '~/config/base-axios';
import {THabitSummary} from '~/state/onboarding/type';
import {PostFeedbackDto} from '~/state/profile/type';
import {TBaseError} from '~/type';
//use it later because i don't know how
type UseGetProfile = (
  arg: UseQueryOptions<THabitSummary, TBaseError, THabitSummary, string[]>,
) => UseQueryResult<THabitSummary, TBaseError>;

export const useGetProfile: UseGetProfile = () => {
  return useQuery(['PROFILE/GET_PROFILE'], () => {
    return BaseAxios.get('/user/info').then(response => response.data);
  });
};

// export const usePostFeedback = () => {
//   const _onSuccess = () => {
//     console.log('success');
//   };
//   return useMutation(
//     ({message}) => BaseAxios.post('/feedback', {message}).then(res => res.data),
//     {
//       onSuccess: _onSuccess,
//     },
//   );
// };
type usePostFeedback = (
  args: UseMutationOptions<unknown, TBaseError, PostFeedbackDto>,
) => UseMutationResult<unknown, TBaseError, PostFeedbackDto>;
export const usePostFeeusePostFeedback: usePostFeedback = arg => {
  return useMutation(
    ['PROFILE/POST_FEEDBACK'],
    dto => {
      return BaseAxios.post('/feedback', dto).then(response => response.data);
    },
    {
      ...arg,
    },
  );
};
