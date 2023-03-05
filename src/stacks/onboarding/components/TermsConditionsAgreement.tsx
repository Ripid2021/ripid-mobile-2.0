import {StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {t} from 'i18next';
import ParsedText from 'react-native-parsed-text';
import {bodyText} from '~/theme/style';
import {CheckBox} from '@rneui/themed';
import {scaleSize} from '~/theme/size';
import {BROWN} from '~/theme/color';

const TermsConditionsAgreement = () => {
  const [checked, setChecked] = useState(true);
  const _handleToggle = useCallback(() => {
    setChecked(prev => !prev);
  }, []);
  const _viewTermsConditions = useCallback(() => {}, []);
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
