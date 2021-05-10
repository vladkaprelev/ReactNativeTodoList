import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {listsReducer} from './listsReducer';
import {taskReducer} from './taskReducer';

const reducer = combineReducers({
  user: userReducer,
  lists: listsReducer,
  tasks: taskReducer,
});

export default reducer;
