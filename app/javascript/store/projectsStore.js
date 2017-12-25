import {  createStore } from 'redux';
import reducers, { $$initialState } from '../reducers/projectsReducer';

export default (props) => {

  const initialState = {
      projects: props.projects
    }
  return createStore(reducers, initialState);
}