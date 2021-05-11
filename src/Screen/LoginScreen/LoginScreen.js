import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from '../../Theme/auth/styles';
import {useDispatch} from 'react-redux';
import {fetchUser} from '../../Redux/thunks/userThunks';
import InputSign from '../../Components/signInput/SignInput';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    const data = {
      email: email,
      password: password,
    };
    if (data.email && data.password) {
      setMessage(false);

      dispatch(fetchUser(data));
    } else {
      setMessage(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>To do List</Text>
          <Text style={styles.subtitle}>Войти</Text>
          <InputSign
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCompleteType="email"
            keyboardType="default"
            secureTextEntry={false}
            message={message}
          />
          <InputSign
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            autoCompleteType="password"
            keyboardType="default"
            secureTextEntry={true}
            message={message}
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
