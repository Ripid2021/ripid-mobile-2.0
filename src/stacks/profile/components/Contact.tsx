import {Avatar} from '@rneui/themed';
import {t} from 'i18next';
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import {ONBOARDING} from '~/asset/graphics';
import Text from '~/common/Text';
import {LIGHT_GREY} from '~/theme/color';
import {S20, S24, scaleSize, SPACING} from '~/theme/size';
type TContactProps = {
  avatar?: ImageSourcePropType | string;
  admire: number;
  admired: number;
  ripid: number;
};
type TStateProps = {
  path?: string;
  source?: string;
};
const Contact = ({admire, admired, ripid, avatar}: TContactProps) => {
  const [state, setState] = useState<TStateProps>(avatar || {});
  useEffect(() => {
    setState(avatar);
  }, [avatar]);
  const listPoint = useMemo(
    () => [
      {
        id: 1,
        title: t('admire'),
        value: admire || 0,
      },
      {
        id: 2,
        title: t('admired'),
        value: admired || 0,
      },
      {
        id: 3,
        title: t('ripid'),
        value: ripid || 0,
      },
    ],
    [admire, admired, ripid],
  );
  const onPressAvatar = () => {
    console.log('onPressAvatar');
  };
  const renderImage = useCallback(() => {
    const uri =
      typeof state === 'string' ? state : state?.path || state?.source;
    if (uri) {
      return (
        <Avatar
          onPress={onPressAvatar}
          rounded
          size={scaleSize(100)}
          source={{uri}}
        />
      );
    } else {
      return (
        <Avatar
          onPress={onPressAvatar}
          rounded
          size={scaleSize(100)}
          source={ONBOARDING.AVATAR_DEFAULT}
        />
      );
    }
  }, [state]);
  return (
    <View style={styles.container}>
      {renderImage()}
      <View style={styles.pointContainer}>
        {listPoint.map((item, index) => (
          <Fragment key={item.id}>
            <View style={styles.detailPoint}>
              <Text style={styles.value}>{item.value}</Text>
              <Text>{item.title}</Text>
            </View>
            {index + 1 < listPoint.length && <View style={styles.line} />}
          </Fragment>
        ))}
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: S24,
    paddingHorizontal: SPACING,
  },
  pointContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  detailPoint: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: scaleSize(1),
    height: scaleSize(32),
    backgroundColor: LIGHT_GREY,
  },
  value: {
    fontWeight: '700',
    fontSize: S20,
  },
});
