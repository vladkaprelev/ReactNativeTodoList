import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {listsReducer} from './listsReducer';

const reducer = combineReducers({
  user: userReducer,
  lists: listsReducer,
});

export default reducer;
