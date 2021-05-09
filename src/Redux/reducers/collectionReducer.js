import * as type from '../actions/actionTypes';

let initialState = {};

export const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    // case type.FETCH_COLLECTION:
    //   const lists = action.payload;
    //   return {
    //     ...state,
    //     lists,
    //   };
    // case type.DELETE_COLLECTION: {
    //   const {id} = action.payload;
    //   return {
    //     ...state,
    //     lists: state.lists.filter(todo => todo.id !== id),
    //   };
    // }
    // case type.ITEM_COLLECTION: {
    //   const item = action.payload;
    //   return {
    //     ...state,
    //     item,
    //   };
    // }
    default:
      return state;
  }
};
