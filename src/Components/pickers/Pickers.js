import React from 'react';
import {Picker} from '@react-native-picker/picker';

const Pickers = props => {
  const handlePicker = itemValue => {
    props.setSelected(itemValue);
  };

  return (
    <Picker selectedValue={props.selected} onValueChange={handlePicker}>
      <Picker.Item label="Коллекции" value="collections" />
      <Picker.Item label="В работе" value="inWork" />
      <Picker.Item label="Выполнено" value="complete" />
    </Picker>
  );
};

export default Pickers;
