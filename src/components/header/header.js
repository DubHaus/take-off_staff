import React from 'react';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import { deleteUser } from '../../api';
import { useUser } from '../../hooks/use-user';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 40
  },
  loginIcon: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  login: {
    marginLeft: 'auto',
    marginRight: theme.spacing(3)
  }
}));


const getTitle = (path) => {
  switch (path) {

    case '/contacts':
      return 'Contacts'

    case '/login':
      return 'Login'

    default:
      return ''
  }
}


const Header = ({ isAuth, login }) => {
  const classes = useStyles();
  const history = useHistory();
  const [, setUserDate] = useUser();

  const title = getTitle(history.location.pathname);

  const onLogout = () => {

    deleteUser()
      .then(user => {
        setUserDate({
          login: null,
          isAuth: false,
        })
      })
  }

  const info = isAuth ?
    <React.Fragment>
      <AccountCircle className={classes.loginIcon} />
      <Typography variant="subtitle1" className={classes.login}>
        {login}
      </Typography>
    </React.Fragment>
    : null;

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {info}
        {isAuth ? <Button onClick={onLogout} color="inherit">Logout</Button> : null}
      </Toolbar>
    </AppBar>
  )
}

export default Header;