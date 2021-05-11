import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Screen/LoginScreen/LoginScreen';
import SignUpScreen from '../Screen/SingUpScreen/SignUpScreen';
import {useDispatch, useSelector} from 'react-redux';
import CollectionScreen from '../Screen/CollectionScreen/CollectionScreen';
import {autoLogin} from '../Redux/thunks/userThunks';

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
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin(user.access_token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Коллекции" component={CollectionScreen} />
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
