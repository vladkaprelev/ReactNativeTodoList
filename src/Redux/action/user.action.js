import * as t from './types';

export const setUser = payload => ({type: t.SET_USER, payload});

export const logUserOut = () => ({type: t.LOG_OUT});
