import ReactOnRails from 'react-on-rails';

import AlertComponent from '../bundles/Project/components/AlertComponent';
import ProjectsList from '../bundles/Project/components/ProjectsList';
import NewProject from '../bundles/Project/components/NewProject';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  ProjectsList, NewProject, AlertComponent
});
