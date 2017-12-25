import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

export default class AlertComponent extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider>
        <Snackbar
          open={this.props.open}
          message={this.props.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          bodyStyle={{backgroundColor: this.props.good ? "green" : "red"}}
        />
      </MuiThemeProvider>
    );
  }
}