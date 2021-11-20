import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Header from '../components/Header';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Main from '../components/Main';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
}
