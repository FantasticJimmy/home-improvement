/* eslint new-cap: 0 */

import Immutable from 'immutable';


export default function projectsReducer($$state, action = null) {
    
  const {project , type} = action;

  switch (type) {
    case 'SUBMIT_PROJECT_SUCCESS': {

      return [
        ...$$state,
        Object.assign({}, project)
      ];
    }

    default: {
      return $$state;
    }
  }
}