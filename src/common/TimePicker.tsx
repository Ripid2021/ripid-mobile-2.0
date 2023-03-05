import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {headlineText} from '~/theme/style';
import {scaleSize} from '~/theme/size';
import {LIGHT_GREY} from '~/theme/color';
import dayjs from 'dayjs';

type TProps = {
  containerStyle?: ViewStyle;
  timeStyle?: TextStyle;
  value: Date;
  onChange: (time: Date) => void;
};
const TimePicker = ({
  containerStyle,
  timeStyle,
  onChange,
  value = new Date(),
}: TProps) => {
  const [open, setOpen] = useState(false);

  const _handlePress = useCallback(() => {
    setOpen(true);
  }, []);

  const _handleConfirm = useCallback(
    (date: Date) => {
      setOpen(false);
      onChange(date);
    },
    [onChange],
  );

  const _text = useMemo(() => dayjs(value).format('HH : mm'), [value]);

  return (
    <TouchableOpacity
      onPress={_handlePress}
      style={[styles.container, containerStyle]}>
      <Text style={[headlineText, styles.timeStyle, timeStyle]}>{_text}</Text>
      <DatePicker
        modal
        mode="time"
        open={open}
        date={value}
        onConfirm={_handleConfirm}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </TouchableOpacity>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  container: {
    padding: scaleSize(16),
    borderWidth: scaleSize(1),
    borderColor: LIGHT_GREY,
    borderRadius: scaleSize(12),
    alignSelf: 'flex-start',
    marginTop: scaleSize(16),
  },
  timeStyle: {
    textAlign: 'left',
    paddingVertical: 0,
  },
});
