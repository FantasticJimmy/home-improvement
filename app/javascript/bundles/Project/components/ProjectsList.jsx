import PropTypes from 'prop-types';
import React from 'react';
import Project from './Project';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';      


export default class ProjectsList extends React.Component {

  constructor(props) {
    super(props);
    
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {projects: this.props.projects}
  }
  componentWillReceiveProps(nextProps){
    debugger
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    const content = this.state.projects.map((project,key)=>
      <Project key={key} project={project} />
    )
    return (
          <MuiThemeProvider>
            <div>
            {content}
            </div>
          </MuiThemeProvider>
    );
  }
}
