import React from 'react';

import {IconButton, makeStyles} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useFormError} from '../../hooks/use-forms';
import { addContactsItem } from '../../api';
import { useContacts } from '../../hooks/use-contacts';
import Form from '../form/form';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  }
}));

const ContactsAddItem = props => {
  const classes = useStyles();
  const [, setContacts] = useContacts();
  const [, setError] = useFormError('addContacts');

  const submitHandler = (items) => {
    addContactsItem(items)
      .then(newItems => {
        setContacts(newItems);
      })
      .catch(err => {
        console.error(err);
        setError(true)
      })
  }

  const submitBtn =
    <IconButton type='submit' edge="end" aria-label="Add">
      <AddIcon />
    </IconButton>

  return (
    <Form submitHandler={submitHandler} formName='addContacts' classes={classes.form} submitBtn={submitBtn} />
  )
}

export default ContactsAddItem;



