import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputSign = props => {
  return (
    <TextInput
      defaultValue={props.value}
      onChangeText={props.onChangeText}
      style={styles.input}
      placeholder={props.placeholder}
      autoCompleteType={props.type}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Inter-SemiBold',
    color: '#3d3d3d',
    fontSize: 16,
    backgroundColor: '#F2F4F6',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.84,
    elevation: 1,

    borderRadius: 8,
    marginBottom: 20,
    height: 50,
    paddingLeft: 16,
  },
});

export default InputSign;
