import React from 'react';

import { TextField, makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles({
  input: {
    '& input:disabled': {
      color: '#545454',
    }
  }
})

const ContactListItemInput = ({ defaultValue, title, onChange, name }) => {
  const classes = useStyles();

  const [fieldIsEditable, setFieldIsEditable] = useState(false);
  const [value, setValue] = useState(defaultValue)

  const changeHandler = (e) => {
    setValue(e.target.value);
  }

  const onEndChanging = () => {
    setFieldIsEditable(false)
    onChange({ [name]: value })
  }

  return (
    <TextField
      className={classes.input}
      onBlur={onEndChanging}
      onClick={() => setFieldIsEditable(true)}
      onChange={changeHandler}
      disabled={!fieldIsEditable}
      id={`standard-basic-${title}`}
      value={value}
      label={title} />
  )
}

export default ContactListItemInput;