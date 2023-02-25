import {useCallback, useState} from 'react';
import {LayoutChangeEvent, LayoutRectangle} from 'react-native';

export const useComponentSize = () => {
  const [size, setSize] = useState<Partial<LayoutRectangle>>({
    width: 0,
    height: 0,
  });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    setSize({width, height});
  }, []);

  return [size, onLayout] as [
    Partial<LayoutRectangle>,
    (event: LayoutChangeEvent) => void,
  ];
};
