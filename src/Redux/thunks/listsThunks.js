import {addListAC, deleteListAC, getListAC} from '../action/lists.action';

const baseURL = 'https://academy2.smw.tom.ru/tararin-ivan/todo-list/lists';

export const fetchLists = access_token => dispatch => {
  fetch(`${baseURL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      const lists = json.data.items;
      dispatch(getListAC(lists));
    })
    .catch(e => console.log('fetchLists', e));
};

export const addList = (attributes, access_token) => dispatch => {
  fetch(`${baseURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({attributes}),
  })
    .then(res => res.json())
    .then(json => {
      const list = json.data.attributes;
      console.log(json);
      dispatch(addListAC(list));
    })
    .catch(e => console.log('add lists', e));
};

export const deleteList = (id, access_token) => dispatch => {
  fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({id}),
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      dispatch(deleteListAC(id));
    })
    .catch(e => console.log('delete lists', e));
};
