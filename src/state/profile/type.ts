import {ImageURISource} from 'react-native';

export type PostFeedbackDto = {
  message: string;
};
export type TAdmire = {
  userId: string;
};

export type TProfile = {
  _id: string;
  admireBy: Array<TAdmire>;
  avatar: {
    _id: string;
    source: ImageURISource;
  };
  avatarSocial: string;
  dateOfBirth: Date;
  description: string;
  fullName: string;
  email: string;
  facebookUrl: string;
  gender: number;
  groups: Array<any>;
  habits: Array<string>;
  instagramUrl: string;
  isAutoRenew: boolean;
  isFirstLogin: boolean;
  nickName: string;
  packageId: string;
  productId: string;
  totalRipid: number;
  totalSeason: number;
  totalCompletedSeason: number;
  totalCompletedRipid: number;
  totalAdmiration: number;
  slugSearchValue: string;
};
