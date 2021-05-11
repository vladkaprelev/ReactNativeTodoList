import React, {useState} from 'react';
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

const ListItemScreen = props => {
  const user = useSelector(state => state.user);
  const token = user.access_token;
  const {count_tasks, id, is_closed, is_completed, name} = props.route.params;
  const [value, setValue] = useState(name);
  const [count, setCount] = useState(count_tasks);

  const handleSafe = () => {
    if (value.length) {
      props.updateList(
        {count_tasks: count, id, is_closed, is_completed, name: value},
        token,
      );
      props.fetchLists(token);
      props.navigation.dispatch(CommonActions.goBack());
    }
  };
  const handleDelete = () => {
    props.deleteList(id, token);
    props.navigation.dispatch(CommonActions.goBack());
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <TextInput style={styles.title} value={value} onChangeText={setValue} />
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
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    lineHeight: 24,
    color: '#3d3d3d',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 35,
    justifyContent: 'space-between',
  },
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({deleteList, updateList, fetchLists}, dispatch);

export default connect(null, mapDispatchToProps)(ListItemScreen);
