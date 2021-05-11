import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Pickers from '../../Components/pickers/Pickers';
import Tasklist from '../../Components/taskList/TaskList';
import ListItem from '../../Components/listItem/ListItem';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addList, fetchLists} from '../../Redux/thunks/listsThunks';

const CollectionScreen = props => {
  const user = useSelector(state => state.user);
  const token = user.access_token;
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(false);
  const [selected, setSelected] = useState('inWork');
  useEffect(() => {
    let is_completed = false;
    switch (selected) {
      case 'inWork':
        is_completed = false;
        props.fetchLists(token, is_completed);
        break;
      case 'complete':
        is_completed = true;
        props.fetchLists(token, is_completed);
        break;
      case 'collections':
        props.fetchLists(token);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  const handleAddList = () => {
    const attributes = {
      name: value,
      count_tasks: 0,
      is_closed: false,
      is_completed: false,
    };
    if (value) {
      props.addLists(attributes, token);
      setValue('');
      setMessage(false);
      props.fetchLists(token);
    } else {
      setMessage(true);
    }
  };
  return (
    <SafeAreaView>
      <Pickers selected={selected} setSelected={setSelected} />
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder="Введите название списка задач"
          />
          <TouchableOpacity style={styles.button} onPress={handleAddList}>
            <Text style={styles.buttonText}>Добавить</Text>
          </TouchableOpacity>
        </View>
        {message ? (
          <Text style={styles.error}>Введите название списка</Text>
        ) : (
          <></>
        )}
        <Tasklist component={ListItem} list={props.lists} type="list" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    fontSize: 16,
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  button: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#4C728F',
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  error: {
    color: '#C1526C',
  },
});

const mapStateToProps = state => {
  const {lists} = state.lists;
  return {lists};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({addLists: addList, fetchLists}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CollectionScreen);
