import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Avatar} from '@rneui/themed';
import {scaleSize} from '~/theme/size';
import {hexToRGBA, LIGHT_GREY, WHITE} from '~/theme/color';
import {ONBOARDING} from '~/asset/graphics';
import ImageCropPicker, {Image} from 'react-native-image-crop-picker';

type TProps = {
  onChange: (image: Image) => void;
  value: Image | null;
};

const AvatarPicker = ({value = null, onChange}: TProps) => {
  const source = useMemo(() => {
    return value ? {uri: value.path} : ONBOARDING.AVATAR_DEFAULT;
  }, [value]);
  const iconName = useMemo(() => {
    return value ? 'camera' : 'camerao';
  }, [value]);
  const _handleTouch = useCallback(() => {
    ImageCropPicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      mediaType: 'photo',
    }).then(image => {
      onChange(image);
    });
  }, [onChange]);
  return (
    <View style={styles.container}>
      <Avatar
        source={source}
        rounded
        containerStyle={styles.avatar}
        size={SIZE}
      />
      <TouchableOpacity onPress={_handleTouch} style={styles.overlay}>
        <AntDesign color={WHITE} size={scaleSize(40)} name={iconName} />
      </TouchableOpacity>
    </View>
  );
};

export default AvatarPicker;

const SIZE = scaleSize(200);
const OVERLAY_COLOR = hexToRGBA('#888888', 0.7);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    borderWidth: scaleSize(5),
    borderColor: WHITE,
    backgroundColor: LIGHT_GREY,
  },
  overlay: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: OVERLAY_COLOR,
    borderRadius: SIZE / 2,
    borderWidth: scaleSize(5),
    borderColor: WHITE,
  },
});
