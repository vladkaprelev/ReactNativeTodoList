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
      state.lists.filter(item => item.id !== id);
      console.log(state);
      return {...state, lists: state.lists.filter(item => item.id !== id)};
    }
    default:
      return state;
  }
};
