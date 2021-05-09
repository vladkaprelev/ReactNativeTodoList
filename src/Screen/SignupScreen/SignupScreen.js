import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from '../../Theme/auth/authStyles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {signup} from '../../Redux/thunks/userThunks';
import InputSign from '../../Components/inputSign/InputSign';
import ButtonSign from '../../Components/buttonSign/ButtonSign';

const SignupScreen = props => {
  const [data, setData] = useState({});

  const handleSignup = () => {
    props.signup(data);
    setData({});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View>
          <Text style={styles.sectionTitle}>To do List</Text>
          <Text style={styles.sectionSubTitle}>Регистрация</Text>
          <InputSign
            value={data.email}
            onChangeText={email => setData({...data, email})}
            placeholder="email"
            type="email"
            keyboardType="email-address"
            secureTextEntry={false}
          />
          <InputSign
            value={data.name}
            onChangeText={name => setData({...data, name})}
            placeholder="name"
            type="name"
            keyboardType="default"
            secureTextEntry={false}
          />
          <InputSign
            value={data.password}
            onChangeText={password => setData({...data, password})}
            placeholder="password"
            type="password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonBox}>
          <ButtonSign handle={handleSignup} title="Зарегистрироваться" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({signup}, dispatch);

export default connect(null, mapDispatchToProps)(SignupScreen);
