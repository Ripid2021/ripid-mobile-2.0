import {StyleSheet, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Text from '~/common/Text';
import {bodyText} from '~/theme/style';
import {t} from 'i18next';
import {usePasswordValidate} from '~/hooks/usePasswordValidate';
import {scaleSize} from '~/theme/size';
import {GREEN, RED} from '~/theme/color';

type TProps = {
  password: string;
};

const PasswordValidator = ({password = ''}: TProps) => {
  const validateResult = usePasswordValidate(password);

  return (
    <View style={styles.container}>
      <Text style={bodyText}>{t('passwordMustHave')}</Text>
      {validateResult.map(item => {
        const isValid = item.isValid;
        return (
          <View style={styles.row} key={item.key}>
            <AntDesign
              color={isValid ? GREEN : RED}
              size={scaleSize(16)}
              name={isValid ? 'check' : 'close'}
            />
            <Text
              style={[bodyText, styles.title, {color: isValid ? GREEN : RED}]}>
              {item.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default PasswordValidator;

const styles = StyleSheet.create({
  container: {
    marginBottom: scaleSize(16),
    marginHorizontal: scaleSize(8),
  },
  title: {
    fontSize: scaleSize(14),
    marginLeft: scaleSize(8),
  },
  row: {
    flexDirection: 'row',
    marginVertical: scaleSize(4),
  },
});
