export type TLang = 'en' | 'vi';
export type LoginDto = {
  email: string;
  password: string;
};
export type TAuth = {
  nickname: string;
  email: string;
  accessToken: string;
  isFirstLogin: string;
  id: string;
};
