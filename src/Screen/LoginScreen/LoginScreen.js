import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {styles} from '../../Theme/auth/styles';
import {useDispatch} from 'react-redux';
import {fetchUser} from '../../Redux/thunks/userThunks';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignIn = () => {
    const data = {
      email: email,
      password: password,
    };
    dispatch(fetchUser(data));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>To do List</Text>
          <Text style={styles.subtitle}>Войти</Text>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCompleteType="email"
          />
          <Input
            inputStyle={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            autoCompleteType="password"
            secureTextEntry
          />
          <Text
            style={styles.text}
            onPress={() => props.navigation.navigate('Sign Up Screen')}>
            No Acount? Sign Up
          </Text>
        </View>
        <Button
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          title="Sign in"
          onPress={() => handleSignIn()}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
