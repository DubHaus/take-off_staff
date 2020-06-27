import React from 'react';

import { TextField, makeStyles } from '@material-ui/core';
import { useFormInput } from '../../hooks/use-forms';

const useStyles = makeStyles((theme) => ({
  formInput: {
    marginBottom: theme.spacing(2)
  }
}));


const FormInput = ({ formName, inputName, title, error = false, setIsErr }) => {
  const [value, setValue] = useFormInput(formName, inputName);
  const classes = useStyles();

  const changeHandler = (e) => {
    if (error) {
      setIsErr(false)
    }
    setValue(e.target.value)
  }

  return (
    <TextField error={error} className={classes.formInput} onChange={changeHandler} value={value} id={`standard-basic-${formName}-${inputName}`} label={title} variant="outlined" />
  )
}

export default FormInput;