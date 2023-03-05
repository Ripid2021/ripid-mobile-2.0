import {StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Progress from '~/common/Progress';
import {ONBOARDING_PROGRESS} from '~/constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {t} from 'i18next';
import Text from '~/common/Text';
import {bodyText, borderCard, headlineText} from '~/theme/style';
import TextInput from '~/common/TextInput';
import {BROWN, WHITE, YELLOW} from '~/theme/color';
import {bottomPadding, scaleSize} from '~/theme/size';
import Divider from '~/common/Divider';
import TimePicker from '~/common/TimePicker';
import Button from '~/common/Button';
import {useAppNavigation} from '~/hooks/useAppNavigation';

const HabitSetting = () => {
  const navigation = useAppNavigation();
  const [time, setTime] = useState(new Date());

  const _handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const _handleContinue = useCallback(() => {
    navigation.navigate('OnboardingStack', {
      screen: 'Register',
    });
  }, [navigation]);

  return (
    <>
      <Progress index={1} data={ONBOARDING_PROGRESS} />
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={headlineText}>{t('targetSetting')}</Text>
        <View style={borderCard}>
          <TextInput
            label={t('enterTarget')}
            labelStyle={bodyText}
            placeholder={t('exampleTarget') || ''}
            style={{
              fontSize: scaleSize(14),
              minHeight: scaleSize(120),
            }}
            multiline={true}
          />
          <Divider />
          <View style={styles.padding}>
            <Text style={bodyText}>{t('ripidRemindAt')}</Text>
            <TimePicker value={time} onChange={setTime} />
          </View>
          <Divider />
          <TextInput
            label={t('whyMaintainHabit')}
            labelStyle={bodyText}
            placeholder={t('inputHabitTarget') || ''}
            style={{
              fontSize: scaleSize(14),
              minHeight: scaleSize(160),
            }}
            multiline={true}
          />
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.floatingButton}>
        <Button
          onPress={_handleGoBack}
          style={styles.button}
          color={WHITE}
          backgroundColor={BROWN}
          title={t('goBack')}
        />
        <Button
          onPress={_handleContinue}
          style={styles.button}
          title={t('continue')}
        />
      </View>
    </>
  );
};

export default HabitSetting;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: scaleSize(16),
    paddingBottom: bottomPadding * 3,
  },
  padding: {
    paddingHorizontal: scaleSize(8),
  },
  floatingButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: scaleSize(24),
    position: 'absolute',
    bottom: bottomPadding,
    paddingHorizontal: scaleSize(24),
  },
  button: {
    flex: 1,
  },
});
