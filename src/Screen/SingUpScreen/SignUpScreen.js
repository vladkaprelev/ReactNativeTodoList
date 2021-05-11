import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';

import {styles} from '../../Theme/auth/styles';
import {SafeAreaView, Text, View} from 'react-native';

const SignUpScreen = props => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>To do List</Text>
          <Text style={styles.subtitle}>Регистрация</Text>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={setName}
            keyboardType="default"
            autoCompleteType="name"
          />
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
            onPress={() => props.navigation.navigate('Login Screen')}>
            Already Signed Up? Sign In
          </Text>
        </View>
        <Button
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          title="SIGN UP"
          onPress={() => handleSignUp()}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
