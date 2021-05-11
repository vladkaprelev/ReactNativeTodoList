import React, {useState} from 'react';
import {FlatList} from 'react-native';

const Tasklist = props => {
  const [selectedId] = useState(null);
  const renderItem = ({item}) => {
    return (
      <props.component item={item} type={props.type} onPress={props.onPress} />
    );
  };
  return (
    <FlatList
      data={props.list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
};
export default Tasklist;
