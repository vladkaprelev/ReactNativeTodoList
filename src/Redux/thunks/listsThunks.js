import {
  addListAC,
  deleteListAC,
  getListAC,
  updateListAC,
} from '../action/lists.action';

const baseURL = 'https://academy2.smw.tom.ru/tararin-ivan/todo-list/lists';

export const fetchLists = (access_token, is_completed) => async dispatch => {
  await fetch(`${baseURL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      if (is_completed !== undefined) {
        const lists = json.data.items.filter(
          item => item.is_completed === is_completed,
        );
        dispatch(getListAC(lists));
      } else {
        const lists = json.data.items;
        dispatch(getListAC(lists));
      }
    })
    .catch(e => console.log('fetchLists', e));
};

export const addList = (attributes, access_token) => async dispatch => {
  console.log(attributes);
  console.log(access_token);
  await fetch(`${baseURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({attributes}),
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      const list = json.data.attributes;
      dispatch(addListAC(list));
    })
    .catch(e => console.log('add lists', e));
};

export const deleteList = (id, access_token) => async dispatch => {
  await fetch(`${baseURL}/${id}`, {
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

export const updateList = (list, access_token) => dispatch => {
  console.log(list);
  fetch(`${baseURL}/${list.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({attributes: list}),
  })
    .then(res => res.json())
    .then(json => {
      console.log(json.data.attributes);
      dispatch(updateListAC(json.data.attributes));
    })
    .catch(e => console.log('delete lists', e));
};
