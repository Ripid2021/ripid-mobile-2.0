import React, {memo} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useAppSelector} from '~/hooks/useAppSelector';
import {scaleSize} from '~/theme/size';

const GlobalLoading = () => {
  const loading = useAppSelector(state => state.globalReducer.loading);
  // useEffect(() => {
  //   const loading = loadingState.includes(true);
  //   let timer;
  //   if (loading) {
  //     timer = setTimeout(() => {
  //       logger(
  //         JSON.stringify({loadingState, id, accessToken}),
  //         `Loading is longer than ${3 * 1000}ms`,
  //         loading,
  //       );
  //     }, 3 * 1000);
  //   }

  //   return () => {
  //     if (timer) {
  //       clearTimeout(timer);
  //     }
  //   };
  // }, [accessToken, id, loadingState]);
  return loading ? (
    <View style={styles.defaultLoadingStyle}>
      {/* <Image 
        source={Asset.mascot.indicator}
        style={styles.indicator}
        resizeMode="contain"
      /> */}
      <ActivityIndicator size="large" />
    </View>
  ) : null;
};

export default memo(GlobalLoading);

const styles = StyleSheet.create({
  defaultLoadingStyle: {
    position: 'absolute',
    zIndex: 1000,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#000',
    opacity: 0.3,
    alignItems: 'center',
  },
  indicator: {
    width: scaleSize(200),
    height: scaleSize(200),
  },
});
