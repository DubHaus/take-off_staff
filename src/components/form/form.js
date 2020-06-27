import React from 'react';

import FormInput from '../form-input/form-input';
import { useFormError, useForm, useCleanForm } from '../../hooks/use-forms';

const Form = ({ submitHandler, formName, classes, submitBtn }) => {
  const [items] = useForm(formName);
  const [cleanForm] = useCleanForm(formName);
  const [error, setError] = useFormError(formName);
  const renderItems = Object.entries(items).filter(([name]) => name !== 'isError');


  const onSubmit = (e) => {
    e.preventDefault();
    const isEmptyField = renderItems.findIndex(([, value]) => !value) !== -1;
    if (isEmptyField) {
      setError(true)
    } else {
      submitHandler(items);
      cleanForm();
    }
  }

  return (
    <form onSubmit={onSubmit} className={classes}>
      {Object.entries(items).filter(([name]) => name !== 'isError').map(([name, value]) => (
        <FormInput key={name} inputName={name} title={name} formName={formName} error={error} setIsErr={setError} />
      ))}
      {submitBtn}
    </form>
  )
}

export default Form;