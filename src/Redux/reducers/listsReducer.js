import * as t from '../action/types';

const initialState = [];

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_LIST: {
      const data = action.payload;
      return [...state, {...data, id: state.length + 1}];
    }
    case t.DELETE_LIST: {
      const id = action.payload;
      return state.filter(item => item.id !== id);
    }
    default:
      return state;
  }
};
