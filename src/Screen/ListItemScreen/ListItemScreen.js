import React, {useEffect, useState} from 'react';
import {TextInput, View, StyleSheet, SafeAreaView} from 'react-native';
import {bindActionCreators} from 'redux';
import {
  deleteList,
  fetchLists,
  updateList,
} from '../../Redux/thunks/listsThunks';
import {connect, useSelector} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import Button from '../../Components/button/Button';
import AddTaskButton from '../../Components/addTaskButton/AddTaskButton';
import Tasklist from '../../Components/taskList/TaskList';
import ListItem from '../../Components/listItem/ListItem';
import {fetchTasks} from '../../Redux/thunks/tasksThunks';

const ListItemScreen = props => {
  const user = useSelector(state => state.user);
  const token = user.access_token;

  const {item} = props.route.params;
  const taskCount = props.tasks;
  const id = item.id;

  const [value, setValue] = useState(item.name);

  useEffect(() => {
    props.fetchTasks(token, item.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSafe = () => {
    if (value.length) {
      console.log(taskCount.length);
      props.updateList(
        {...item, count_tasks: taskCount.length, name: value},
        token,
      );
      props.fetchLists(token);
      props.navigation.dispatch(CommonActions.goBack());
    }
  };

  const handleDelete = () => {
    props.deleteList(item.id, token);
    props.navigation.dispatch(CommonActions.goBack());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View>
          <TextInput
            style={styles.title}
            value={value}
            onChangeText={setValue}
            placeholder="Введите название списка"
            placeholderTextColor="#C1526C"
          />
          <Tasklist component={ListItem} list={props.tasks} type="task" />
          <AddTaskButton
            onPress={() => props.navigation.navigate('Добавить задачу', {id})}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleSafe}
            title="Сохранить"
            color="#3d3d3d"
            backgroundColor="#ffffff"
          />
          <Button
            onPress={handleDelete}
            title="Удалить список"
            color="#C1526C"
            backgroundColor="#FCF0F0"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#3d3d3d',
    paddingLeft: 8,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 35,
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => {
  const {tasks} = state.tasks;
  return {tasks};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {deleteList, updateList, fetchLists, fetchTasks},
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ListItemScreen);
