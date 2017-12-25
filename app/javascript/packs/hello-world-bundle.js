import ReactOnRails from 'react-on-rails';

import projectsStore from '../store/projectsStore';
import AlertComponent from '../bundles/Project/components/AlertComponent';
import StoreWrapper from '../bundles/Project/components/StoreWrapper';
import NewProject from '../bundles/Project/components/NewProject';


ReactOnRails.registerStore({
  projectsStore
});

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  StoreWrapper, NewProject, AlertComponent
});
