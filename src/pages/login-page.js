import React from 'react';
import { useState } from 'react';

import { Container } from '@material-ui/core';
import AuthForm from '../components/auth-form/auth-form';

const LoginPage = props => {

  return (
    <Container maxWidth='sm' >
      <AuthForm />
    </Container>
  )
}

export default LoginPage;