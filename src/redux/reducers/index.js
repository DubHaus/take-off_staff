import { combineReducers } from "redux";
import updateUser from "./update-user";
import updateContacts from "./update-contacts";
import updateAuthentication from "./update-authentication";
import updateAddContacts from "./update-add-contacts";

export default combineReducers({
  user: updateUser,
  contacts: updateContacts,
  authentication: updateAuthentication,
  addContacts: updateAddContacts
})