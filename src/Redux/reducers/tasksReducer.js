import * as t from '../action/types';

const initialState = {tasks: []};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_TASK: {
      const task = action.payload;
      state.tasks.push({...task});
      return {...state};
    }
    case t.GET_TASK: {
      const attributes = action.payload;
      return {...state, tasks: attributes};
    }
    case t.DELETE_TASK: {
      const id = action.payload;
      return {...state, tasks: state.tasks.filter(item => item.id !== id)};
    }
    case t.UPDATE_TASK: {
      const task = action.payload;
      state.tasks.forEach(item => {
        if (item.id === task.id) {
          return (item = task);
        }
      });
      return {...state};
    }
    default:
      return state;
  }
};
