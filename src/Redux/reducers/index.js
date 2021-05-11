import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {listsReducer} from './listsReducer';
import {tasksReducer} from './tasksReducer';

const reducer = combineReducers({
  user: userReducer,
  lists: listsReducer,
  tasks: tasksReducer,
});

export default reducer;
