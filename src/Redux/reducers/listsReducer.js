import * as t from '../action/types';

const initialState = {lists: []};

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_LIST: {
      const list = action.payload;
      state.lists.push({...list});
      return {...state};
    }
    case t.GET_LIST: {
      const attributes = action.payload;
      return {...state, lists: attributes};
    }
    case t.DELETE_LIST: {
      const id = action.payload;
      return {...state, lists: state.lists.filter(item => item.id !== id)};
    }
    case t.UPDATE_LIST: {
      const list = action.payload;
      state.lists.forEach(item => {
        if (item.id === list.id) {
          return (item = list);
        }
      });
      return {...state};
    }
    default:
      return state;
  }
};
