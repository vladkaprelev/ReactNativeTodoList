import React, {useState} from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import InputSign from '../../Components/inputSign/InputSign';
import ButtonSign from '../../Components/buttonSign/ButtonSign';
import styles from '../../Theme/auth/authStyles';
import {bindActionCreators} from 'redux';
import {login} from '../../Redux/thunks/userThunks';
import {connect} from 'react-redux';
import {AuthContext} from '../../Navigation/NavigationService';

const LoginScreen = props => {
  const [data, setData] = useState({});
  const {signIn} = React.useContext(AuthContext);
  const handleLogin = () => {
    console.log('Login');
    signIn(data);
    setData({});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View>
          <Text style={styles.sectionTitle}>To do List</Text>
          <Text style={styles.sectionSubTitle}>Войти</Text>
          <InputSign
            value={data.email}
            onChangeText={email => setData({...data, email})}
            placeholder="email"
            type="email"
            keyboardType="email-address"
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
          <TouchableOpacity onPress={() => console.log('Sign up')}>
            <Text style={styles.text}>Don't have an account yet? Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonBox}>
          <ButtonSign handle={handleLogin} title="Войти" />
        </View>
      </View>
    </SafeAreaView>
  );
};
const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch);

export default connect(null, mapDispatchToProps)(LoginScreen);
