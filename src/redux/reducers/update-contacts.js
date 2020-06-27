import { SET_CONTACTS } from "../types"

export default (state, action) => {
  if (state === undefined) {
    return []
  }

  switch(action.type) {

    case SET_CONTACTS:
      return action.payload

    default:
      return state
  }
}