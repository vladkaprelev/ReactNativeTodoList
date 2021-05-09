import * as type from '../actions/actionTypes';

let initialState = {};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // case type.FETCH_TASK:
    //   const tasks = action.payload;
    //   return {
    //     ...state,
    //     tasks,
    //   };
    // case type.DELETE_TASK: {
    //   const {id} = action.payload;
    //   return {
    //     ...state,
    //     tasks: state.tasks.filter(todo => todo.id !== id),
    //   };
    // }
    default:
      return state;
  }
};
