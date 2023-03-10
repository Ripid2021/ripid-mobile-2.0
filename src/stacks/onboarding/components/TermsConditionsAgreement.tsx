import {StyleSheet, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {t} from 'i18next';
import ParsedText from 'react-native-parsed-text';
import {bodyText} from '~/theme/style';
import {CheckBox} from '@rneui/themed';
import {scaleSize} from '~/theme/size';
import {BROWN} from '~/theme/color';
import {useAppNavigation} from '~/hooks/useAppNavigation';
import {useAppSelector} from '~/hooks/useAppSelector';

const TermsConditionsAgreement = () => {
  const navigation = useAppNavigation();
  const lang = useAppSelector(state => state.authReducer.lang);
  const [checked, setChecked] = useState(true);
  const _handleToggle = useCallback(() => {
    setChecked(prev => !prev);
  }, []);
  const TERMS_CONDITIONS_URI = useMemo(
    () => `https://staging.ripid.vn/privacy?lang=${lang}`,
    [lang],
  );
  const _viewTermsConditions = useCallback(() => {
    navigation.navigate('AppStack', {
      screen: 'WebView',
      params: {
        source: {uri: TERMS_CONDITIONS_URI},
        title: t('termsConditions'),
      },
    });
  }, [TERMS_CONDITIONS_URI, navigation]);
  return (
    <View style={styles.container}>
      <CheckBox
        containerStyle={styles.resetCheckbox}
        onIconPress={_handleToggle}
        checkedColor={BROWN}
        checked={checked}
      />
      <ParsedText
        parse={[
          {
            pattern: new RegExp(t('termsConditions') || ''),
            style: styles.underline,
            onPress: _viewTermsConditions,
          },
        ]}
        style={bodyText}>
        {t('agreeWith', {
          text: t('termsConditions'),
        })}
      </ParsedText>
    </View>
  );
};

export default TermsConditionsAgreement;

const styles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleSize(18),
  },
  resetCheckbox: {padding: 0, margin: 0},
});
