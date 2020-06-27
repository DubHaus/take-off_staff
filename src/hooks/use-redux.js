import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default (mapStateToProps, mapDispatchToProps) => {
  const state = useSelector(mapStateToProps ? mapStateToProps : state => state);
  const dispatch = useDispatch();
  const setState = useCallback((...props) => dispatch(mapDispatchToProps(...props)), [dispatch, mapDispatchToProps])

  return [state, setState]

}