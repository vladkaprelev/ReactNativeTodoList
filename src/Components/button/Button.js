import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: props.backgroundColor}]}
      onPress={props.onPress}>
      <Text style={[styles.text, {color: props.color}]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 170,
    height: 40,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inner-Medium',
  },
});
export default Button;
