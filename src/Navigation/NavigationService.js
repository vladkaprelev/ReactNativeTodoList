import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Screen/LoginScreen/LoginScreen';
import SignUpScreen from '../Screen/SingUpScreen/SignUpScreen';
import {useDispatch, useSelector} from 'react-redux';
import CollectionScreen from '../Screen/CollectionScreen/CollectionScreen';

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
    </Stack.Navigator>
  );
};

const NavigationService = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {user.access_token === null ? <AuthStack /> : <HomeStack />}
    </NavigationContainer>
  );
};

export default NavigationService;
