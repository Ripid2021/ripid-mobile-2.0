import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Progress from '~/common/Progress';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ONBOARDING_PROGRESS} from '~/constants';
import {bodyText, headlineText} from '~/theme/style';
import {t} from 'i18next';
import {bottomPadding, scaleSize} from '~/theme/size';
import TextInput from '~/common/TextInput';
import Button from '~/common/Button';
import {useAppNavigation} from '~/hooks/useAppNavigation';
import {BROWN, WHITE} from '~/theme/color';
import AvatarPicker from '~/common/AvatarPicker';
import {Image} from 'react-native-image-crop-picker';

const PersonalInformation = () => {
  const navigation = useAppNavigation();
  const [avatar, setAvatar] = useState<Image | null>(null);

  const _handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const _handleContinue = useCallback(() => {
    navigation.navigate('OnboardingStack', {
      screen: 'OnboardingSuccess',
    });
  }, [navigation]);
  return (
    <>
      <Progress index={4} data={ONBOARDING_PROGRESS} />
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={headlineText}>{t('personalInformation')}</Text>
        <AvatarPicker value={avatar} onChange={setAvatar} />
        <TextInput
          label={t('username')}
          labelStyle={bodyText}
          //   placeholder={t('email') || ''}
        />
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

export default PersonalInformation;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: scaleSize(16),
    paddingBottom: bottomPadding * 3,
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
