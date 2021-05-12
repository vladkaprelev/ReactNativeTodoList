import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const urgencyPicker = props => {
  const handlePicker = itemValue => {
    props.setSelected(itemValue);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Важность</Text>
      <Picker
        style={styles.picker}
        selectedValue={props.selected}
        onValueChange={handlePicker}>
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    paddingLeft: 15,
  },
  picker: {
    width: 100,
  },
});

export default urgencyPicker;
