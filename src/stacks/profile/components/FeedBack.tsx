import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '~/common/Text';
import {scaleSize, SPACING} from '~/theme/size';
import {BROWN, WHITE} from '~/theme/color';
import {shadow} from '~/theme/shadow';
import {t} from 'i18next';
import Button from '~/common/Button';
import {useAppNavigation} from '~/hooks/useAppNavigation';

const FeedBack = () => {
  const navigation = useAppNavigation();
  const onPressDonate = () => {
    console.log('onPressDonate');
  };
  const onPressFeedBack = () => {
    console.log('onPressFeedBack');
  };
  return (
    <View style={[shadow, styles.container]}>
      <Text style={styles.label}>{t('feedbackToRipid')}</Text>
      <Button onPress={onPressDonate} title={t('donate')} />
      <Button
        onPress={onPressFeedBack}
        color={WHITE}
        style={styles.feedbackButton}
        title={t('feedback')}
      />
    </View>
  );
};

export default FeedBack;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING,
    borderRadius: scaleSize(12),
    marginHorizontal: SPACING,
  },
  label: {
    textAlign: 'center',
    fontSize: scaleSize(18),
    fontWeight: '500',
    paddingBottom: SPACING,
  },
  feedbackButton: {
    backgroundColor: BROWN,
    marginTop: SPACING,
  },
});
