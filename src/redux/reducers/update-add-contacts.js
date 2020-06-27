import { SET_FORM_INPUT, SET_FORM_IS_ERROR, CLEAN_FORM } from "../types"

export default (state, action) => {
  if (state === undefined) {
    return {
      name: '',
      phone: '',
      isError: false
    }
  }

  switch (action.type) {

    case SET_FORM_INPUT:
      if (action.form === 'addContacts')
        return {
          ...state,
          [action.name]: action.payload
        }
      else return state


    case SET_FORM_IS_ERROR:
      if (action.form === 'addContacts') {
        return {
          ...state,
          isError: action.payload
        }
      } else return state


    case CLEAN_FORM:
      if (action.form === 'addContacts') {
        return {
          ...state,
          name: '',
          phone: ''
        }
      } else return state

    default:
      return state
  }
}