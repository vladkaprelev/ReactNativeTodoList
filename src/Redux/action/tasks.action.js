import * as t from './types';

export const addTaskAC = task => ({
  type: t.ADD_TASK,
  payload: task,
});

export const deleteTaskAC = id => ({
  type: t.DELETE_TASK,
  payload: id,
});

export const getTaskAC = tasks => ({
  type: t.GET_TASK,
  payload: tasks,
});

export const updateTaskAC = task => ({
  type: t.UPDATE_TASK,
  payload: task,
});
