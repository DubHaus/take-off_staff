import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';


import ContactList from '../components/contacts-list/contacts-list';
import ContactsAddItem from '../components/contacts-add-item/contacts-add-item';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto'
  }
}));

const ContactsPage = props => {
  const classes = useStyles();

  return (
    <div className="contacts-page">
      <Grid className={classes.root} item xs={12} md={6}>
        <ContactsAddItem />
        <ContactList />
      </Grid>
    </div>
  )
}

export default ContactsPage;