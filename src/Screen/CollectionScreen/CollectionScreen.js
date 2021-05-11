import React, {useState} from 'react';
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
import {connect} from 'react-redux';
import {addList} from '../../Redux/action/lists.action';
import {bindActionCreators} from 'redux';

const CollectionScreen = props => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(false);
  const handleAddList = () => {
    const data = {name: value, count: 0, is_closed: false, is_complete: false};
    if (value) {
      props.addList(data);
      setValue('');
      setMessage(false);
    } else {
      setMessage(true);
    }
  };
  return (
    <SafeAreaView>
      <Pickers />
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            onChangeText={value => setValue(value)}
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
        <Tasklist component={ListItem} list={props.lists} />
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
    color: 'red',
  },
});

const mapStateToProps = state => {
  const {lists} = state;
  return {lists};
};

const mapDispatchToProps = dispatch => bindActionCreators({addList}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CollectionScreen);
