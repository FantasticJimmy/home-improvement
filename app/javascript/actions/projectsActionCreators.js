import requestsManager from 'libs/requestsManager';

import * as types from './actionTypes';

export function submitProjectSuccess(project) {
  return {
    type: types.CREATE_PROJECT_SUCCESS,
    project,
  };
}