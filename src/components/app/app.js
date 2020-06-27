import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import { Container } from '@material-ui/core';
import LoginPage from '../../pages//login-page';
import ContactsPage from '../../pages/contacts-page';
import Header from '../header/header';
import { useUser } from '../../hooks/use-user';

const App = props => {
  const [user] = useUser();
  const { isAuth, login } = user;
  const history = useHistory();


  useEffect(() => {
    if (isAuth) history.push('/contacts')
    else history.push('/login')
  }, [isAuth])




  return (
    <Container>
      <Header isAuth={isAuth} login={login} />
      <Switch>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/contacts'>
          <ContactsPage />
        </Route>
      </Switch>
    </Container>


  )
}

export default () => (
  <Router>
    <App />
  </Router>
);