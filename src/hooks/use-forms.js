import useRedux from "./use-redux"
import { SET_FORM_INPUT, SET_FORM_IS_ERROR, CLEAN_FORM } from "../redux/types";

export const useForm = (formName) => {
  const [value] = useRedux(state => state[formName]);

  return [value]
}

export const useCleanForm = (formName) => {
  const [, clean] = useRedux(null,
    () => ({
      type: CLEAN_FORM,
      form: formName
    }))

  return [clean]
}


export const useFormInput = (formName, inputName) => {
  const [value, setValue] = useRedux(
    state => state[formName][inputName],
    value => ({
      type: SET_FORM_INPUT,
      payload: value,
      form: formName,
      name: inputName
    })
  );
  return [value, setValue];
}


export const useFormError = (formName) => {
  const [err, serErr] = useRedux(
    state => state[formName].isError,
    isErr => ({
      type: SET_FORM_IS_ERROR,
      form: formName,
      payload: isErr
    })
  )

  return [err, serErr];
}