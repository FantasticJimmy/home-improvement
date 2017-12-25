import PropTypes from 'prop-types';
import React from 'react';
import ProjectsList from './ProjectsList';
import { Provider } from 'react-redux';      

export default () => {
    const appStore = ReactOnRails.getStore("projectsStore");   
    return (
        <Provider store={appStore}>
            <ProjectsList {...appStore.getState()}/>
        </Provider>
    );
};
  