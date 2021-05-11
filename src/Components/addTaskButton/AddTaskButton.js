import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const AddTaskButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Icon name="add" type="material" color="#3d3d3d" />
      <Text style={styles.text}>Добавить задачу</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
  text: {
    fontFamily: 'Inter-Medium',
    color: '#3d3d3d',
    fontSize: 18,
    lineHeight: 24,
    marginLeft: 5,
  },
});

export default AddTaskButton;
