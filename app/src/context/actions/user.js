import { SET_USER, RESET_USER } from '../reducers/userReducer';

export const setUser = user => ({
  type: SET_USER,
  user
})

export const resetUser = user => ({
  type: RESET_USER,
  user
})