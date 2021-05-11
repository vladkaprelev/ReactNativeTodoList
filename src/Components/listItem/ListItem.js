import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import {bindActionCreators} from 'redux';
import {connect, useSelector} from 'react-redux';
import {deleteList, updateList} from '../../Redux/thunks/listsThunks';

const ListItem = props => {
  const user = useSelector(state => state.user);
  const token = user.access_token;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const textDecorationLine = toggleCheckBox ? 'line-through' : 'none';

  useEffect(() => {
    setToggleCheckBox(props.item.is_completed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = () => {
    console.log(props.item);
    props.deleteList(props.item.id, token);
  };
  const handleCheckBox = newValue => {
    const {count_tasks, id, is_closed, is_completed, name} = props.item;
    console.log(props.item);
    props.updateList(
      {count_tasks, id, is_closed, is_completed: newValue, name},
      token,
    );
    setToggleCheckBox(newValue);
  };

  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={handleCheckBox}
          tintColors={{true: '#4C728F', false: '#3d3d3d'}}
        />
        <TouchableOpacity style={styles.titleBox}>
          <Text
            style={[styles.title, {textDecorationLine: textDecorationLine}]}>
            {props.item.name}
          </Text>
        </TouchableOpacity>
      </View>
      <Icon
        style={styles.icon}
        name="close"
        type="material"
        onPress={handleDelete}
        component="TouchableHighlight"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    lineHeight: 24,
    color: '#3d3d3d',
  },
  titleBox: {
    marginLeft: 8,
    width: 260,
    paddingVertical: 14,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    marginVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'flex-end',
  },
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({deleteList: deleteList, updateList}, dispatch);

export default connect(null, mapDispatchToProps)(ListItem);
