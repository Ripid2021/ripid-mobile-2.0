import React, {useLayoutEffect} from 'react';
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
import {useGetProfile} from '~/state/profile';
import {LIGHT_GREY} from '~/theme/color';
import {S24, scaleSize, SPACING} from '~/theme/size';
import BIO from '../../profile/components/BIO';
import Contact from '../../profile/components/Contact';
import ContactRipid from '../../profile/components/ContactRipid';
import FeedBack from '../../profile/components/FeedBack';
import ListHabit from '../../profile/components/ListHabit';
import ListMemberSameGroup from '../../profile/components/ListMemberSameGroup';
import ListMessage from '../../profile/components/ListMessage';
import SSOInfo from '../../profile/components/SSOInfo';

const Profile = () => {
  const navigation = useAppNavigation();
  const {data: profile, refetch: refetchProfile} = useGetProfile({});

  useLayoutEffect(() => {
    refetchProfile();
  }, [refetchProfile]);
  // const {mutate: postFeedBack} = usePostFeedback();
  const onPressSetting = () => {
    // navigation.navigate('SettingScreen')
    console.log('profile');
  };
  const tmpAvt = 'https://randomuser.me/api/portraits/men/36.jpg';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWrapper}>
        <HeaderTabBar title={profile?.fullName || ''} onPress={onPressSetting}>
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
          <Contact
            admire={profile?.admireBy?.length || 0}
            admired={profile?.admireBy?.length || 0}
            ripid={profile?.totalCompletedRipid || 0}
            avatar={profile?.avatar?.source}
          />
          <ListHabit />
          <BIO bio={profile?.description || ''} />
          <SSOInfo
            facebookUrl={profile?.facebookUrl}
            instagramUrl={profile?.instagramUrl}
            emailUrl={profile?.email}
          />
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
    marginHorizontal: SPACING,
  },
});
