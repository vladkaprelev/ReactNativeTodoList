import {
  addTaskAC,
  deleteTaskAC,
  getTaskAC,
  updateTaskAC,
} from '../action/tasks.action';

const baseURL = 'https://academy2.smw.tom.ru/tararin-ivan/todo-list/task';

export const fetchTasks = (access_token, list_id) => async dispatch => {
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
      const task = json.data.items.filter(item => item.list_id === list_id);
      dispatch(getTaskAC(task, list_id));
    })
    .catch(e => console.log('fetchTasks', e));
};

export const addTask = (attributes, access_token) => async dispatch => {
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
      const task = json.data.attributes;
      dispatch(addTaskAC(task));
    })
    .catch(e => console.log('add tasks', e));
};

export const deleteTask = (id, access_token) => async dispatch => {
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
      dispatch(deleteTaskAC(id));
    })
    .catch(e => console.log('delete tasks', e));
};

export const updateTask = (task, access_token) => dispatch => {
  console.log(task);
  fetch(`${baseURL}/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({attributes: task}),
  })
    .then(res => res.json())
    .then(json => {
      console.log(json.data.attributes);
      dispatch(updateTaskAC(json.data.attributes));
    })
    .catch(e => console.log('delete tasks', e));
};
