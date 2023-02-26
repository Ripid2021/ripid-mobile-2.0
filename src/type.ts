import {StackNavigationOptions} from '@react-navigation/stack';

export type TScreen = {
  options: StackNavigationOptions;
  component: () => JSX.Element;
  name: string;
};

export type TBaseError = {
  error: string;
  message: string;
  statusCode: number;
};
