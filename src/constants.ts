import {TProgress} from '~/type';

export const SUPPORTED_LANGUAGES = [
  {
    title: 'Tiếng việt',
    key: 'vi',
  },
  {
    title: 'English',
    key: 'en',
  },
];

export const SUPPORTED_LANGUAGE_KEYS = SUPPORTED_LANGUAGES.map(
  lang => lang.key,
);

export const ONBOARDING_PROGRESS: TProgress[] = [
  {
    key: 'habit',
  },
  {
    key: 'target',
  },
  {
    key: 'register',
  },
  {
    key: 'verify',
  },
  {
    key: 'profile',
  },
];

export const FORGOT_PASSWORD_PROGRESS: TProgress[] = [
  {
    key: 'typeEmail',
  },
  {
    key: 'verify',
  },
  {
    key: 'complete',
  },
];
