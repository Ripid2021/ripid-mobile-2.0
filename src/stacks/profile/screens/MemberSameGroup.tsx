import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FAKE_DATA_MEMBER} from '../components/ListMemberSameGroup';
import ContactCard from '../components/ContactCard';
import {ScrollView} from 'react-native-gesture-handler';
import {S24, SPACING} from '~/theme/size';

const MemberSameGroup = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {FAKE_DATA_MEMBER.map((item, index: number) => (
          <ContactCard style={styles.card} key={index} data={item} showAdmire />
        ))}
      </ScrollView>
    </View>
  );
};

export default MemberSameGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: S24,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    marginHorizontal: SPACING,
    marginTop: S24,
  },
});
