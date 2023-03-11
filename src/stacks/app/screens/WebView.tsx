import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {WebView as BaseWebView} from 'react-native-webview';
import {useAppNavigation, useAppRoute} from '~/hooks/useAppNavigation';

const WebView = () => {
  const navigation = useAppNavigation();
  const route = useAppRoute('WebView');
  const {source, title} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation, title]);
  return <BaseWebView source={source} />;
};

export default WebView;
