import React from 'react';


import { Button, makeStyles } from '@material-ui/core';
import { Send } from '@material-ui/icons'
import { useUser } from '../../hooks/use-user';
import { setUser } from '../../api';
import { useFormError } from '../../hooks/use-forms';
import Form from '../form/form';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  form: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));


const AuthForm = props => {
  const classes = useStyles();
  const [, setUserDate] = useUser();
  const [, setIsErr] = useFormError('authentication');

  const submitHandler = (items) => {
    setUser(items)
      .then(user => {
        setUserDate({
          login: user.login,
          isAuth: true,
        })
      })
      .catch(err => {
        console.error(err);
        setIsErr(true);
      })
  }



  const submitBtn = (
    <Button
      type='submit'
      variant="contained"
      color="primary"
      className={classes.button}
      endIcon={<Send />}
    >
      Login
    </Button>
  )

  return (
    <Form submitHandler={submitHandler} formName='authentication' classes={classes.form} submitBtn={submitBtn} />
  )
}

export default AuthForm;