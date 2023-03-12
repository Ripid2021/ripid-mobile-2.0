export const hexToRGBA = (hexCode: string, opacity: number) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
export const LIGHT_BACKGROUND = '#FFF1A0';
export const TRANSPARENT = 'transparent';
export const WHITE = '#FFFFFF';
export const YELLOW_2 = '#F1D52B';
export const YELLOW = '#F2D52B';
export const BROWN = '#523923';
export const BODY_TEXT = '#9A9A9A';
export const BLUE = '#1890FF';
export const LIGHT_GREY = '#DEDEDE';
export const BLACK = '#191D23';
export const ORANGE_1 = '#FFA011';
export const BLUE_1 = '#5379FF';
export const LIGHT_BLUE_1 = '#B0ECFF';
export const GREEN = '#20C144';
export const GREEN_1 = '#B0FAC0';
export const GREEN_2 = '#E4FFEA';

export const RED = '#FF0000';

export const BLUE_GRADIENT = ['#5379FF', '#AEBDF5'];
export const ORANGE_GRADIENT = ['#FFA011', '#FFE299'];
export const LIGHT_BLUE_GRADIENT = ['##B0ECFF', '#0BC7E0'];

export const GREEN_GRADIENT = ['#2CCA13', '#AEFEAC'];
export const PINK_GRADIENT = ['#FF97DC', '#E21D9F'];
export const PURPLE_GRADIENT = ['#6100FF ', '#A36AFF'];

export const GREEN_2_GRADIENT = ['#37FFB7', '#00E08F'];
export const RED_GRADIENT = ['#FF2626', '#FF8C8C'];
export const BROWN_GRADIENT = ['#834531', '#CB7D65'];

export const LIGHT_BLUE_2_GRADIENT = ['#0085FF', '#78BEFF'];
export const GREEN_3_GRADIENT = ['#02D733', '#17D3C8'];
export const BLUE_3_GRADIENT = ['#0C38A9', '#2C62EA'];

export const ORANGE_2_GRADIENT = ['#FFC52E', '#F3A40B'];
export const PURPLE_2_GRADIENT = ['#9F00C7', '#DF62FF'];
export const RED_2_GRADIENT = ['#FF6B00', '#E01111'];

export const GREEN_4_GRADIENT = ['#128000', '#05FF00'];
export const ORANGE_3_GRADIENT = ['#FFC634', '#FFA800'];
export const RED_3_GRADIENT = ['#FF264D', '#FF7B92'];

export const LIGHT_BLUE_3_GRADIENT = ['#34CEFF', '#00AFC7'];
export const GREEN_5_GRADIENT = ['#13CABF', '#64FF61'];
