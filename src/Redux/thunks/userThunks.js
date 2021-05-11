import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken, setUser} from '../action/user.action';

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

export const signUserUp = userInfo => {
  fetch(`${baseURL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  }).then(res => res.json());
};

export const autoLogin = access_token => dispatch => {
  fetch(`${baseURL}/refreshAccessToken`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({refresh_token: access_token}),
  })
    .then(res => res.json())
    .then(json => {
      const token = json.data.access_token;
      AsyncStorage.setItem('token', token).catch(e =>
        console.error('autoLogin set storage', e),
      );
      dispatch(setToken(token));
    });
};
