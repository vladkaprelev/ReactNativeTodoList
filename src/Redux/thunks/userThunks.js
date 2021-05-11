import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken, setUser} from '../action/user.action';

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
  fetch(`${baseURL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
};

export const autoLogin = access_token => dispatch => {
  console.log(JSON.stringify({refresh_token: access_token}));
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
      console.log(json);
      const token = json.data.access_token;
      AsyncStorage.setItem('token', token).catch(e =>
        console.log('autoLogin set storage', e),
      );
      dispatch(setToken(token));
    });
};

export const getUser = access_token => dispatch => {
  fetch(`${baseURL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then(res => res.json())
    .then(json => console.log(json));
};
