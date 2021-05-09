import * as type from './actionTypes';

export const restoreToken = token => {
  return {
    type: type.RESTORE_TOKEN,
    token: token,
  };
};

export const logout = () => {
  return {
    type: type.LOGOUT,
  };
};
