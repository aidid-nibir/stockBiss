import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function App() {
  return <Text style={styles.demoText}>Welcome To StockBiss</Text>;
}

const styles = StyleSheet.create({
  demoText: {
    flex: 1,
    top: '40%',
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
  },
});
