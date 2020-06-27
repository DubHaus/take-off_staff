import useRedux from './use-redux';
import { SET_USER } from '../redux/types';

export const useUser = () => {
  const [user, setUser] = useRedux(
    state => state.user,
    user => ({
      type: SET_USER,
      payload: user
    })
  );

  return [user, setUser]

}