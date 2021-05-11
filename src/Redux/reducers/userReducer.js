import * as t from '../action/types';

const initialState = {
  isLogin: false,
  access_token: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_USER: {
      const {userInfo, token} = action.payload;
      return {
        isLogin: true,
        email: userInfo.email,
        access_token: token,
      };
    }
    case t.SET_TOKEN:
      const access_token = action.payload;
      return {
        ...state,
        access_token,
      };
    default:
      return state;
  }
};
