import {t} from 'i18next';
import {useMemo} from 'react';

export const usePasswordValidate = (password = '') => {
  const conditions = useMemo(
    () => [
      {
        title: t('atLeast8Chars'),
        key: 'atLeast8Chars',
        isValid: password.trim().length >= 8,
      },
      {
        title: t('haveNumber'),
        key: 'haveNumber',
        isValid: /\d/.test(password),
      },
      {
        title: t('haveLowercase'),
        key: 'haveLowercase',
        isValid: password.toUpperCase() != password,
      },
      {
        title: t('haveUppercase'),
        key: 'haveUppercase',
        isValid: password.toLowerCase() != password,
      },
    ],
    [password],
  );
  return conditions;
};
