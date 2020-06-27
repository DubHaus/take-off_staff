import React from 'react';

import { ListItem, ListItemAvatar, ListItemSecondaryAction, IconButton, Avatar, TextField, makeStyles, Box } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteContactsItem, addContactsItem } from '../../api';
import { useContacts } from '../../hooks/use-contacts';
import ContactListItemInput from './contact-list-item-input';
import { useEffect } from 'react';

const useStyles = makeStyles({
  inputsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    '& input:disabled': {
      color: '#545454',
    }
  }

})

const ContactListItem = ({ item }) => {
  const classes = useStyles();
  const [, setContacts] = useContacts();

  const deleteHandler = () => {
    deleteContactsItem(item.id)
      .then(items => {
        setContacts(items);
      })
  }



  const changeItemHandler = (value) => {
    addContactsItem({
      ...item,
      ...value,
    })
      .then(items => {
        setContacts(items);
      })
  }

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <Box component='div' className={classes.inputsList}>
        <ContactListItemInput defaultValue={item.name} title='Name' onChange={changeItemHandler} name='name' />
        <ContactListItemInput defaultValue={item.phone} title='Phone' onChange={changeItemHandler} name='phone' />
      </Box>

      <ListItemSecondaryAction>
        <IconButton onClick={deleteHandler} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default ContactListItem;