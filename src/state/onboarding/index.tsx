import {useQuery, UseQueryOptions, UseQueryResult} from 'react-query';
import BaseAxios from '~/config/base-axios';
import {THabitSummary} from '~/state/onboarding/type';
import {TBaseError} from '~/type';

type UseGetHabitSummary = (
  arg: UseQueryOptions<THabitSummary, TBaseError, THabitSummary, string[]>,
) => UseQueryResult<THabitSummary, TBaseError>;
export const useGetHabitSummary: UseGetHabitSummary = options => {
  return useQuery(
    ['ONBOARDING/USE_GET_HABIT_SUMMARY'],
    () => {
      return BaseAxios.get('/habit-summary', {}).then(
        response => response.data,
      );
    },
    options,
  );
};
