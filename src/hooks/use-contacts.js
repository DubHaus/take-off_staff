import useRedux from "./use-redux"
import { SET_CONTACTS } from "../redux/types";
import { useEffect } from "react";

export const useContacts = () => {
  const [contacts, setContacts] = useRedux(
    state => state.contacts,
    contacts => ({
      type: SET_CONTACTS,
      payload: contacts
    })
  );

  return [contacts, setContacts]
}

