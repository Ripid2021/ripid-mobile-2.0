import {TTimestamps} from '~/type';
import {ONBOARDING} from '~/asset/graphics';

export type TUser = TTimestamps & {
  avatar: string;
  email: string;
  fullName: string;
  nickName: string;
};
export type THabitItem = {
  count: number;
  habitKey: keyof typeof ONBOARDING;
  habitTitle: string;
  users: TUser[];
};
export type THabitSummary = THabitItem[];
