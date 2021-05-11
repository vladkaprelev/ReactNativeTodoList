import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const Pickers = () => {
  const [selected, setSelected] = useState();
  return (
    <Picker
      selectedValue={selected}
      onValueChange={itemValue => setSelected(itemValue)}>
      <Picker.Item label="Коллекции" value="collections" />
      <Picker.Item label="В работе" value="inWork" />
      <Picker.Item label="Выполнено" value="complete" />
    </Picker>
  );
};

export default Pickers;
