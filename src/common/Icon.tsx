import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from '~/asset/svg';

type TProps = {
  defaultViewBox?: string;
  fill: string;
  fillRule?: string;
  size?: number;
  name: string;
  stroke?: string;
  strokeWidth?: number;
  style?: object;
  viewBox?: string;
};

const Icon = ({size, ...props}: TProps) => (
  <SvgIcon width={size} height={size} {...props} svgs={svgs} />
);

export default Icon;
