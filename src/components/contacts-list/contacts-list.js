import React from 'react';
import { useState } from 'react';


import { List } from '@material-ui/core';
import { getContacts } from '../../api';
import ContactListItem from '../contacts-list-item/contacts-list-item';
import { useEffect } from 'react';
import { useContacts } from '../../hooks/use-contacts';





const ContactList = props => {

  const [contacts, setContacts] = useContacts();

  useEffect(() => {
    getContacts()
      .then(data => {
        setContacts(data)
      })
      .catch(err => {
        console.error(err)
      })
  },[])


  return (
    <List>
      {contacts.map(el => (
        <ContactListItem key={el.id} item={el} />
      ))}
    </List>
  )
}



export default ContactList;