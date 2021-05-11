import React from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';

const InputSign = props => {
  return (
    <View style={styles.inputBox}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.input}
        placeholder={props.placeholder}
        autoCompleteType={props.type}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
      {props.message ? <Text style={styles.error}>Required</Text> : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    marginBottom: 20,
  },
  error: {
    color: '#C1526C',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 0,
    borderRadius: 8,
    paddingLeft: 10,
  },
});

export default InputSign;
