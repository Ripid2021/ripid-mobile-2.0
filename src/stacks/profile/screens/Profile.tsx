import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {PROFILE} from '~/asset/graphics';
import {useAppNavigation} from '~/hooks/useAppNavigation';
import HeaderTabBar from '~/navigation/HeaderTabBar';
import {useGetProfile, usePostFeedback} from '~/state/profile';
import {LIGHT_GREY} from '~/theme/color';
import {S24, scaleSize, SPACING} from '~/theme/size';
import BIO from '../components/BIO';
import Contact from '../components/Contact';
import ContactRipid from '../components/ContactRipid';
import FeedBack from '../components/FeedBack';
import ListHabit from '../components/ListHabit';
import ListMemberSameGroup from '../components/ListMemberSameGroup';
import ListMessage from '../components/ListMessage';
import SSOInfo from '../components/SSOInfo';

const Profile = () => {
  const navigation = useAppNavigation();
  // const {data: profile} = useGetProfile({});
  // const {mutate: postFeedBack} = usePostFeedback();
  const onPressSetting = () => {
    // navigation.navigate('SettingScreen')
    console.log('profile');
  };
  const tmpAvt = 'https://randomuser.me/api/portraits/men/36.jpg';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWrapper}>
        <HeaderTabBar title="Lê Quang Thuận" onPress={onPressSetting}>
          <TouchableOpacity style={styles.buttonRight1}>
            <Image source={PROFILE.NOTIFICATION} resizeMode="contain" />
          </TouchableOpacity>
        </HeaderTabBar>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.content}
          scrollEventThrottle={16}
          bounces>
          <Contact admire={2} admired={2} ripid={10} avatar={tmpAvt} />
          <ListHabit />
          <BIO bio="dasdsdasd" />
          <SSOInfo />
          <View style={styles.line} />
          <ListMemberSameGroup />
          <View style={styles.line} />
          <ListMessage />
          <View style={styles.line} />
          <ContactRipid />
          <FeedBack />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWrapper: {
    flex: 1,
    paddingHorizontal: SPACING,
    paddingBottom: SPACING,
  },
  buttonRight1: {
    paddingRight: SPACING,
  },
  content: {
    flex: 1,
    flexGrow: 1,
  },
  line: {
    height: scaleSize(1),
    backgroundColor: LIGHT_GREY,
    marginVertical: S24,
  },
});
