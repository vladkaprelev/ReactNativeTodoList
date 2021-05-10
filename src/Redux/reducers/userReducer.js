import * as type from '../actions/actionTypes';

let initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.RESTORE_TOKEN: {
      const access_token = action.token;
      console.log('restore token', access_token);
      return {
        ...state,
        access_token,
        isLoading: false,
      };
    }
    case type.LOGIN:
      const {data, access_token} = action.payload;
      return {
        ...state,
        ...data,
        isSignout: false,
        access_token,
      };
    case type.LOGOUT:
      return {
        ...state,
        isSignout: true,
        access_token: null,
      };
    case type.SIGNUP:
      return action.payload;
    default:
      return {...state, isLoading: true, isSignout: false, access_token: null};
  }
};
