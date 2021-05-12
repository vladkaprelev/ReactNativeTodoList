import {SafeAreaView, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {connect, useSelector} from 'react-redux';
import Button from '../../Components/button/Button';
import {styles} from '../../Theme/task/styles';
import {CommonActions} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import {updateTask} from '../../Redux/thunks/tasksThunks';
import UrgencyPicker from '../../Components/urgencyPicker/UrgencyPicker';

const TaskScreen = props => {
  const user = useSelector(state => state.user);
  const token = user.access_token;
  const {item} = props.route.params;
  const [title, setTitle] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [selected, setSelected] = useState(item.urgency);

  const handleSafeTask = () => {
    if (title && description) {
      props.updateTask(
        {...item, name: title, description, urgency: selected},
        token,
      );
      setTitle('');
      setDescription('');
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
            title="Сохранить"
            color="#3d3d3d"
            backgroundColor="#ffffff"
            onPress={handleSafeTask}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({updateTask}, dispatch);

export default connect(null, mapDispatchToProps)(TaskScreen);
