import {useEffect} from 'react';
import BaseAxios from '~/config/base-axios';
import {useAppSelector} from '~/hooks/useAppSelector';

const useAccessToken = () => {
  const accessToken = useAppSelector(
    state => state.authReducer?.auth?.accessToken,
  );
  useEffect(() => {
    BaseAxios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }, [accessToken]);
  return null;
};

export default useAccessToken;
