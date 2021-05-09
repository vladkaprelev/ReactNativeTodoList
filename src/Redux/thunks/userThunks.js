import * as type from '../actions/actionTypes';
import {setObjectValue} from '../../Navigation/NavigationService';
import {Alert} from 'react-native';

const baseURL = 'https://academy2.smw.tom.ru/tararin-ivan/todo-list/user';
//password: qwerty123

export const signup = data => {
  return async dispatch => {
    try {
      await fetch(`${baseURL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error(error));
      dispatch({type: type.SIGNUP, payload: data});
    } catch (e) {
      Alert.alert(e);
    }
  };
};

export const login = data => {
  return async dispatch => {
    try {
      console.log(data);
      await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(json => {
          console.log('login json ', json);
          const access_token = json.data.access_token;
          setObjectValue(access_token);
          dispatch({
            type: type.LOGIN,
            payload: {data, access_token: access_token},
          });
        })
        .catch(error => console.error(error));
    } catch (e) {
      Alert.alert(e);
    }
  };
};
