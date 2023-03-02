import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

export const {width: deviceWidth, height: deviceHeight} =
  Dimensions.get('window');

export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (deviceHeight === 780 ||
      deviceWidth === 780 ||
      deviceHeight === 812 ||
      deviceWidth === 812 ||
      deviceHeight === 844 ||
      deviceWidth === 844 ||
      deviceHeight === 896 ||
      deviceWidth === 896 ||
      deviceHeight === 926 ||
      deviceWidth === 926)
  );
}
const ip14ProMaxWidth = 430;
const ip14ProWidth = 393;

export function hasDynamicIsland() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    [ip14ProMaxWidth, ip14ProWidth].includes(deviceWidth)
  );
}

export function ifIphoneX(iphoneXStyle: number, regularStyle: number) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

const dynamicIsland = hasDynamicIsland();

export function getStatusBarHeight(safe: boolean) {
  return Platform.select({
    ios: dynamicIsland ? 59 : ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export function getBottomSpace() {
  if (dynamicIsland) return 34;
  return isIphoneX() ? 34 : 0;
}

export const statusBarHeight = getStatusBarHeight(false);

const scaleDP = (size: number) => {
  const isNotHaft = size?.toString().slice(-2) !== '.5';
  const newSize = (size * deviceWidth) / 375;
  if (Platform.OS === 'ios') {
    return isNotHaft
      ? PixelRatio.roundToNearestPixel(Math.round(newSize))
      : PixelRatio.roundToNearestPixel(newSize);
  } else {
    return isNotHaft
      ? PixelRatio.roundToNearestPixel(Math.round(newSize))
      : PixelRatio.roundToNearestPixel(newSize);
  }
};

const caching: {[key: number]: number} = {};

export const scaleSize = (size: number) => {
  if (!(size in caching)) {
    caching[size] = scaleDP(size);
  }
  return caching[size];
};

export const bottomHeight = getBottomSpace();
export const bottomPadding = bottomHeight + 17;
export const S5 = scaleSize(5);
export const S10 = scaleSize(10);
export const S16 = scaleSize(16);
export const S20 = scaleSize(20);
export const S24 = scaleSize(24);
export const S32 = scaleSize(32);
