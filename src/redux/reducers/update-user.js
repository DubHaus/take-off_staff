import { SET_USER } from "../types"

export default (state, action) => {
  if (state === undefined) {
    return {
      login: null,
      isAuth: false
    }
  }


  switch (action.type) {

    case SET_USER:
      return action.payload

    default:
      return state
  }
}