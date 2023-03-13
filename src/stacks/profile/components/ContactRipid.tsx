import {t} from 'i18next';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AUTH, SOCIAL} from '~/asset/graphics';
import Text from '~/common/Text';
import {S24, scaleSize, SPACING} from '~/theme/size';

type TContactRipid = {
  icon: ImageSourcePropType;
  url: string;
};
type TItemContactRipid = {
  data: TContactRipid;
};

const SOCIAL_RIPID = [
  {
    icon: SOCIAL.instagram,
    url: 'https://www.instagram.com/ripid.ourhabit',
  },
  {
    icon: AUTH.FACEBOOK,
    url: 'https://www.facebook.com/ripid.ourhabit',
  },
  {
    icon: AUTH.GOOGLE,
    url: 'https://www.tiktok.com/@ripid.ourhabit',
  },
  {
    icon: SOCIAL.mail,
    url: 'mailto:admin@ripid.vn',
  },
];

const ContactRipid = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('infoRipid')}</Text>
      <View style={styles.row}>
        {SOCIAL_RIPID.map((item, index) => (
          <ItemContactRipid data={item} key={index} />
        ))}
      </View>
    </View>
  );
};

export default ContactRipid;

const ItemContactRipid = ({data}: TItemContactRipid) => {
  const _handleContact = () => {
    let uri = data?.url;
    const regexProtocol = /^(http|https):/;
    const protocol = 'https://' || 'http://';
    if (!regexProtocol.test(data?.url)) uri = protocol + data?.url;
    if (data?.icon === SOCIAL.mail) uri = `mailto:${data?.url}`;
    Linking.openURL(uri);
  };
  return (
    <TouchableOpacity onPress={_handleContact} style={styles.itemContainer}>
      <Image source={data.icon} style={styles.item} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: SPACING,
  },
  label: {
    fontSize: scaleSize(18),
    fontWeight: '500',
  },
  item: {
    width: scaleSize(32),
    height: scaleSize(32),
  },
  row: {
    flexDirection: 'row',
  },
  itemContainer: {
    paddingVertical: S24,
    paddingHorizontal: S24 / 2,
  },
});
