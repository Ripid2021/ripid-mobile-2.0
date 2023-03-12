import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {bottomPadding, scaleSize} from '~/theme/size';
import {BROWN, GREEN, GREEN_1, GREEN_2, WHITE} from '~/theme/color';
import Text from '~/common/Text';
import {t} from 'i18next';
import {bodyText, headlineText} from '~/theme/style';
import Button from '~/common/Button';
import {useAppNavigation} from '~/hooks/useAppNavigation';

const OnboardingSuccess = () => {
  const navigation = useAppNavigation();
  const _handleSuccess = useCallback(() => {
    navigation.navigate('AuthStack', {
      screen: 'Login',
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.circle2}>
        <View style={styles.circle1}>
          <AntDesign color={GREEN} size={scaleSize(48)} name="checkcircle" />
        </View>
      </View>
      <Text style={[headlineText, styles.text]}>
        {t('onboardingSuccessTitle')}
      </Text>
      <Text style={[bodyText, styles.text]}>
        {t('onboardingSuccessContent')}
      </Text>
      <View style={styles.absButton}>
        <Button onPress={_handleSuccess} title={t('complete')} />
      </View>
    </View>
  );
};

export default OnboardingSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
    paddingHorizontal: scaleSize(32),
  },
  circle1: {
    padding: scaleSize(24),
    backgroundColor: GREEN_1,
    borderRadius: scaleSize(92),
  },
  circle2: {
    padding: scaleSize(24),
    backgroundColor: GREEN_2,
    borderRadius: scaleSize(92),
  },
  text: {
    color: BROWN,
    textAlign: 'center',
  },
  absButton: {
    position: 'absolute',
    bottom: bottomPadding,
    left: scaleSize(24),
    right: scaleSize(24),
  },
});
