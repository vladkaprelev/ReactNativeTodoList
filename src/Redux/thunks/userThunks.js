import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from '../action/user.action';
import * as t from '../action/types';

const baseURL = 'https://academy2.smw.tom.ru/tararin-ivan/todo-list/user';

export const fetchUser = userInfo => dispatch => {
  fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(json => {
      const token = json.data.access_token;
      AsyncStorage.setItem('token', token).catch(e =>
        console.error('fetch user set storage', e),
      );
      dispatch(setUser({userInfo, token}));
    })
    .catch(e => console.error('fetch user', e));
};

export const signUserUp = userInfo => dispatch => {
  fetch(`${baseURL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(() => dispatch({type: t.SIGN_UP}));
};
