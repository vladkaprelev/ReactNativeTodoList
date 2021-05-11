import * as t from './types';

export const addList = data => ({
  type: t.ADD_LIST,
  payload: data,
});

export const deleteList = id => ({
  type: t.DELETE_LIST,
  payload: id,
});
