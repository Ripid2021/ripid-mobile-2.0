import {Avatar} from '@rneui/base';
import {t} from 'i18next';
import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import Button from '~/common/Button';
import Text from '~/common/Text';
import {BODY_TEXT} from '~/theme/color';
import {S16, S20, S8, scaleSize} from '~/theme/size';
import {TContactCardItemProps} from './ListMemberSameGroup';
import {ONBOARDING} from '~/asset/graphics';
type TContactCardProps = {
  data: TContactCardItemProps;
  showAdmire?: boolean;
  showTimeActive?: boolean;
  style?: ViewStyle;
};

const ContactCard: FC<TContactCardProps> = ({
  data,
  showAdmire = false,
  showTimeActive,
  style,
}) => {
  const onPressAdmire = () => {
    console.log('red');
  };
  return (
    <>
      <TouchableOpacity style={[styles.container, style]}>
        <View style={styles.userInfoContainer}>
          <Avatar
            rounded
            size={scaleSize(50)}
            source={{uri: data?.avatar} || ONBOARDING.AVATAR_DEFAULT}
            containerStyle={styles.avatar}
          />
          <View style={styles.f1}>
            <View style={styles.userInfo}>
              <Text style={styles.name}>{data?.name}</Text>
              <View style={styles.row}>
                <Text>{data?.groupname}</Text>
                {showTimeActive && <Text>{'2h'}</Text>}
              </View>
            </View>
            {showAdmire && (
              <Button
                onPress={onPressAdmire}
                title={t('admire')}
                style={styles.admireButtonActive}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: scaleSize(1),
    borderRadius: S16,
    padding: S16,
  },
  userInfoContainer: {
    flexDirection: 'row',
  },
  userInfo: {},
  f1: {
    flex: 1,
  },
  avatar: {
    marginRight: scaleSize(3),
  },
  name: {
    fontWeight: '700',
    fontSize: S20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scaleSize(12),
  },
  admireButtonActive: {
    alignSelf: 'flex-start',
    paddingVertical: S8,
  },
  admireButtonInActive: {
    alignSelf: 'flex-start',
    paddingVertical: S8,
    backgroundColor: BODY_TEXT,
  },
});
