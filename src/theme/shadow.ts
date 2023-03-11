import {Platform} from 'react-native';

export const shadow = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  android: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
