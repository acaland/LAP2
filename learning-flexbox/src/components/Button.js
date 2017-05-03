import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const Button = (props) => (
   <TouchableHighlight
     style={styles.wrapper}
     underlayColor="red"
     activeOpacity={0.9}
     onPress={() => console.log('ciao')}
  >
     <Text style={styles.text}>
       {props.title}</Text>
   </TouchableHighlight>
);

const styles = StyleSheet.create({
  wrapper: {
    top: 30,
    height: 50,
    width: 150,
    backgroundColor: 'deepskyblue'
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default Button;
