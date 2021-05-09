import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {collectionReducer} from './collectionReducer';
import {taskReducer} from './taskReducer';

const reducer = combineReducers({
  user: userReducer,
  lists: collectionReducer,
  tasks: taskReducer,
});

export default reducer;
