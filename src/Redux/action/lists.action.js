import * as t from './types';

export const addListAC = list => ({
  type: t.ADD_LIST,
  payload: list,
});

export const deleteListAC = id => ({
  type: t.DELETE_LIST,
  payload: id,
});

export const getListAC = lists => ({
  type: t.GET_LIST,
  payload: lists,
});

export const updateListAC = list => ({
  type: t.UPDATE_LIST,
  payload: list,
});
