import React, {useState} from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import {connect, useSelector} from 'react-redux';
import {addTask, fetchTasks} from '../../Redux/thunks/tasksThunks';
import Button from '../../Components/button/Button';
import {styles} from '../../Theme/task/styles';
import UrgencyPicker from '../../Components/urgencyPicker/UrgencyPicker';

const AddTaskScreen = props => {
  const user = useSelector(state => state.user);
  const token = user.access_token;
  const list_id = props.route.params.id;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selected, setSelected] = useState(1);

  const handleAddTask = () => {
    const attributes = {
      name: title,
      description: description,
      is_completed: false,
      urgency: selected,
      list_id,
    };
    if (title && description) {
      props.addTask(attributes, token);
      setTitle('');
      setDescription('');
      props.fetchTasks(token, list_id);
      props.navigation.dispatch(CommonActions.goBack());
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View>
          <TextInput
            style={styles.title}
            value={title}
            onChangeText={setTitle}
            placeholder="Введите название задачи"
            placeholderTextColor="#C1526C"
          />
          <TextInput
            style={styles.description}
            value={description}
            onChangeText={setDescription}
            placeholder="Введите описание задачи"
            placeholderTextColor="#C1526C"
            multiline
            textAlignVertical="top"
          />
          <UrgencyPicker selected={selected} setSelected={setSelected} />
        </View>
        <View style={styles.button}>
          <Button
            title="Добавить"
            color="#3d3d3d"
            backgroundColor="#ffffff"
            onPress={handleAddTask}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({addTask, fetchTasks}, dispatch);

export default connect(null, mapDispatchToProps)(AddTaskScreen);
