import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import {bindActionCreators} from 'redux';
import {connect, useSelector} from 'react-redux';
import {deleteList, updateList} from '../../Redux/thunks/listsThunks';
import {useNavigation} from '@react-navigation/core';
import {deleteTask, updateTask} from '../../Redux/thunks/tasksThunks';

const ListItem = props => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  const token = user.access_token;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const textDecorationLine = toggleCheckBox ? 'line-through' : 'none';
  const item = props.item;

  useEffect(() => {
    setToggleCheckBox(props.item.is_completed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let handleDelete;
  let handleCheckBox;
  let handleNavigate;
  switch (props.type) {
    case 'list':
      handleDelete = () => {
        props.deleteList(item.id, token);
      };
      handleCheckBox = newValue => {
        props.updateList({...item, is_completed: newValue}, token);
        setToggleCheckBox(newValue);
      };
      handleNavigate = () => {
        navigation.navigate('Список задач', {item});
      };
      break;

    case 'task':
      handleDelete = () => {
        props.deleteTask(item.id, token);
      };
      handleCheckBox = newValue => {
        props.updateTask({...item, is_completed: newValue}, token);
        setToggleCheckBox(newValue);
      };
      handleNavigate = () => {
        navigation.navigate('Задача', {item});
      };
      break;
  }

  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={handleCheckBox}
          tintColors={{true: '#4C728F', false: '#3d3d3d'}}
        />
        <TouchableOpacity style={styles.titleBox} onPress={handleNavigate}>
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
  bindActionCreators(
    {deleteList, updateList, deleteTask, updateTask},
    dispatch,
  );

export default connect(null, mapDispatchToProps)(ListItem);
