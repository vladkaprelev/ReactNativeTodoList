import * as type from './actionTypes';

export const restoreToken = access_token => {
  return {
    type: type.RESTORE_TOKEN,
    token: access_token,
  };
};

export const logout = () => {
  return {
    type: type.LOGOUT,
  };
};
