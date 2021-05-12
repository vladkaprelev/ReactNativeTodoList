import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Screen/LoginScreen/LoginScreen';
import SignUpScreen from '../Screen/SingUpScreen/SignUpScreen';
import {useSelector} from 'react-redux';
import CollectionScreen from '../Screen/CollectionScreen/CollectionScreen';
import ListItemScreen from '../Screen/ListItemScreen/ListItemScreen';
import addTaskScreen from '../Screen/addTaskScreen/addTaskScreen';
import TaskScreen from '../Screen/TaskScreen/TaskScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Коллекции" component={CollectionScreen} />
      <Stack.Screen name="Список задач" component={ListItemScreen} />
      <Stack.Screen name="Добавить задачу" component={addTaskScreen} />
      <Stack.Screen name="Задача" component={TaskScreen} />
    </Stack.Navigator>
  );
};

const NavigationService = () => {
  const user = useSelector(state => state.user);
  return (
    <NavigationContainer>
      {user.isLogin ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default NavigationService;
