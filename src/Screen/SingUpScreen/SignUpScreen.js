import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import {styles} from '../../Theme/auth/styles';
import {useDispatch} from 'react-redux';
import {signUserUp} from '../../Redux/thunks/userThunks';
import SignUpModal from '../Modal/SignUpModal/SignUpModal';
import InputSign from '../../Components/signInput/SignInput';

const SignUpScreen = props => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    if (data.name && data.email && data.password) {
      setModalVisible(true);
      setMessage(false);
      dispatch(signUserUp(data));
    } else {
      setMessage(true);
    }
  };
  const handleModalButton = () => {
    props.navigation.navigate('Login Screen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>To do List</Text>
          <Text style={styles.subtitle}>Регистрация</Text>
          <InputSign
            value={name}
            onChangeText={setName}
            placeholder="Name"
            autoCompleteType="name"
            keyboardType="default"
            secureTextEntry={false}
            message={message}
          />
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
            onPress={() => props.navigation.navigate('Login Screen')}>
            Already Signed Up? Sign In
          </Text>
        </View>
        <SignUpModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onPrees={handleModalButton}
        />
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
