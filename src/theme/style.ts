import {TextStyle} from 'react-native/types';
import {BLACK} from '~/theme/color';
import {FONT_FAMILY} from '~/theme/font-family';
import {scaleSize} from '~/theme/size';

export const centerHeaderTitle: TextStyle = {
  fontSize: scaleSize(24),
  fontWeight: '700',
};

export const headlineText: TextStyle = {
  color: BLACK,
  fontSize: scaleSize(24),
  fontFamily: FONT_FAMILY[700],
  textAlign: 'center',
  paddingVertical: scaleSize(24),
};

export const bodyText: TextStyle = {
  color: BLACK,
  fontSize: scaleSize(14),
  fontFamily: FONT_FAMILY[400],
  fontWeight: '400',
};
