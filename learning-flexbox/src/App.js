import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Header from './components/Header';
import Button from './components/Button';

const App = () => (
  <View style={styles.wrapper}>
    <Header title="Ciao" />
    <Header title="buongiorno"
      style={{ backgroundColor: 'red', flex: 1 }} />
    <Header title="salut" style={{ flex: 2}} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      //alignItems: 'center'
  }
});

console.log(Dimensions.get('window'));
export default App;
