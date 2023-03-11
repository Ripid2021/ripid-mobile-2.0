import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Text from '~/common/Text';
import ContactCard from './ContactCard';
import {BLUE, LIGHT_BLUE_1, WHITE} from '~/theme/color';
import {S16, S24, S8, scaleSize} from '~/theme/size';
import {t} from 'i18next';

const data = [
  {
    id: 1,
    name: 'Phạm Nguyễn Trang Anhdsaddasdsadasdassdadasdasds',
    groupname: 'Nhóm chạy bộ',
    isAdmire: false,
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
  {
    id: 2,
    name: 'Phạm Nguyễn Trang Anh',
    groupname: 'Nhóm chạy bộ',
    isAdmire: true,
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
  {
    id: 3,
    name: 'Phạm Nguyễn Trang Anh',
    groupname: 'Nhóm chạy bộ',
    isAdmire: false,
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
  {
    id: 4,
    name: 'Phạm Nguyễn Trang Anh',
    groupname: 'Nhóm chạy bộ',
    isAdmire: false,
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
];

const ListMessage = () => {
  return (
    <>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{t('personalMessageBox')}</Text>
        <View style={styles.number}>
          <Text color={WHITE}>{data.length}</Text>
        </View>
      </View>
      {data.slice(0, 3).map((item, index: number) => (
        <View key={index} style={styles.item}>
          <ContactCard data={item} showTimeActive />
        </View>
      ))}
      <TouchableOpacity>
        <Text style={styles.labelSeeAll}>{t('seeAll')}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ListMessage;

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: scaleSize(18),
    fontWeight: '500',
  },
  number: {
    backgroundColor: BLUE,
    padding: S8 / 2,
    borderRadius: S8 / 2,
    borderWidth: scaleSize(1),
    borderColor: LIGHT_BLUE_1,
  },
  item: {
    paddingTop: S24,
  },
  labelSeeAll: {
    fontSize: S16,
    color: BLUE,
    paddingTop: S24,
  },
});
