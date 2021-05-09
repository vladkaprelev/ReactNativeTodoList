import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../Screen/LoginScreen/LoginScreen';
import {bindActionCreators} from 'redux';
import {logout, restoreToken} from '../Redux/actions/user';
import {connect} from 'react-redux';
import CollectionScreen from '../Screen/CollectionScreen/CollectionScreen';
import {login, signup} from '../Redux/thunks/userThunks';

export const setObjectValue = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('key', jsonValue);
  } catch (e) {
    console.log(e);
  }
  console.log('Done.');
};

export const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const NavigationService = props => {
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let access_token;

      try {
        access_token = await AsyncStorage.getItem('access_token');
        props.restoreToken(access_token);
      } catch (e) {
        console.log(e);
      }
    };

    bootstrapAsync().catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        props.login(data);
      },
      signOut: () => props.logout(),
      signUp: async data => {
        props.signup(data);
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  console.log('token: ', props.state);
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {props.state.user.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : props.state.user.access_token == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="LogIn"
              component={LoginScreen}
              options={{
                animationTypeForReplace: props.state.user.isSignout
                  ? 'pop'
                  : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="Коллекции" component={CollectionScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const mapStateToProps = state => {
  return {state};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({restoreToken, login, logout, signup}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavigationService);
