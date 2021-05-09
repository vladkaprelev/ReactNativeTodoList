import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonSign = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.handle}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F2F4F6',

    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,

    borderRadius: 8,
    paddingTop: 11,
    paddingBottom: 11,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#3d3d3d',
    textAlign: 'center',
  },
});

export default ButtonSign;
