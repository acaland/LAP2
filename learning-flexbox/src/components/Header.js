import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// const Header = (props) => (
//   <View style={styles.wrapper}>
//     <Text style={styles.text}>
//       {props.title}</Text>
//   </View>
// );

class Header extends React.Component {
  render() {
    console.log('props di Header ', this.props);
    return (
      <View style={[styles.wrapper, this.props.style]}>
        <Text style={styles.text}>
          {this.props.title}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    //top: 20,
    //flex:1,
    justifyContent: 'center',
    //height: 50,
    flexBasis: 50,
    backgroundColor: '#d5d5d5',
    shadowOffset: { height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
  text: {
    fontSize: 18,
    //borderradius: 5,
    color: 'navy',
    textAlign: 'center'
  }
});

export default Header;
