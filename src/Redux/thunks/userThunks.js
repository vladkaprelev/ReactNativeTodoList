import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from '../action/user.action';

const baseURL = 'https://academy2.smw.tom.ru/tararin-ivan/todo-list/user';

export const fetchUser = userInfo => dispatch => {
  console.log({userInfo});
  fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      const token = json.data.access_token;
      AsyncStorage.setItem('token', token).catch(e =>
        console.log('fetch user set storage', e),
      );
      dispatch(setUser({userInfo, token}));
    })
    .catch(e => console.log('fetch user', e));
};

export const signUserUp = userInfo => dispatch => {
  fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(data => {
      AsyncStorage.setItem('token', data.token);
      dispatch(setUser(userInfo));
    });
};

export const autoLogin = () => dispatch => {
  fetch('http://localhost:4000/auto_login', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${AsyncStorage.getItem('token')}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      AsyncStorage.setItem('token', data.token);
      console.log(data);
      dispatch(setUser(data.user));
    });
};
