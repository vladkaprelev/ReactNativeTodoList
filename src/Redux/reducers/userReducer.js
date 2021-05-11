import * as t from '../action/types';

const initialState = {
  isLogin: false,
  access_token: 'token',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_USER:
      const {userInfo, access_token} = action.payload;
      return {
        isLogin: true,
        email: userInfo.email,
        access_token,
      };
    default:
      return state;
  }
};
