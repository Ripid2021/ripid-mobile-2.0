import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import Text from '~/common/Text';
import {AUTH, PROFILE} from '~/asset/graphics';
import {S24, S32, S8, scaleSize, SPACING} from '~/theme/size';
import {t} from 'i18next';
import {LIGHT_GREY} from '~/theme/color';

type TItemProps = {
  id: number;
  type: string;
  url: string;
  icon: ImageSourcePropType;
};
type TSSOLinkProps = {
  item: TItemProps;
};

type TSSO = {
  facebookUrl: string;
  instagramUrl: string;
  emailUrl: string;
};
const SSOInfo = ({facebookUrl, instagramUrl, emailUrl}: TSSO) => {
  const dataResult = [
    {
      id: 1,
      type: 'facebook',
      url: facebookUrl,
      icon: AUTH.FACEBOOK,
    },
    {
      id: 2,
      type: 'facebook',
      url: instagramUrl,
      icon: AUTH.GOOGLE,
    },
    {
      id: 3,
      type: 'facebook',
      url: emailUrl,
      icon: AUTH.FACEBOOK,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{t('link')}</Text>
        <TouchableOpacity>
          <Image
            source={PROFILE.EDIT}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {dataResult.map(item => (
        <SSOLink item={item} key={item.id} />
      ))}
    </View>
  );
};

const SSOLink: FC<TSSOLinkProps> = ({item}) => {
  return (
    <View style={styles.ssoItemContainer}>
      <Image source={item.icon} resizeMode="contain" />
      <Text> : {item?.url || t('notLink')}</Text>
    </View>
  );
};
export default SSOInfo;
const styles = StyleSheet.create({
  container: {
    paddingTop: S24,
    paddingHorizontal: SPACING,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: scaleSize(18),
    fontWeight: '500',
  },
  icon: {
    width: S32,
    height: S32,
  },
  ssoItemContainer: {
    flexDirection: 'row',
    marginTop: S8,
    borderWidth: scaleSize(2),
    padding: scaleSize(12),
    alignItems: 'center',
    borderRadius: scaleSize(12),
    borderColor: LIGHT_GREY,
  },
});
