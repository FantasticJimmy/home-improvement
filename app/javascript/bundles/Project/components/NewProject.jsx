import PropTypes from 'prop-types';
import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import TextField from 'material-ui/TextField';

import Toggle from 'material-ui/Toggle';
import Slider from 'material-ui/Slider';

import {createProject,editProject} from '../ajaxService';
export default class NewProject extends React.Component {

constructor(props) {
    super(props);
        this.state = this.props.newProjectForm ?
        {
            open: false,
            project: {
                name: '',
                description: '',
                privacy: 'public',
                est_effort: 8
            }
        }
        :
        {
            project: Object.assign({},this.props.project),
            open: this.props.popForm
        }
    }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  };
  handleSubmit = () =>{
    let that = this;
    const appStore = ReactOnRails.getStore("projectsStore");
    
    // const { actions } = this.props;
    // actions
    //   .submitComment(this.state.comment)
    //   .then(this.resetAndFocus);

    appStore.dispatch({type:'SUBMIT_PROJECT_SUCCESS',project:that.state.project})
    
    if(this.props.newProjectForm){    
        createProject(this.state.project,function(res){
          if(res==='success'){
            that.handleClose();
            setTimeout(function(){window.location.reload()}, 500);
          }
        })
    }else{
        editProject(this.state.project,function(res){
          if(res==='success'){
            that.handleClose();
            setTimeout(function(){window.location.reload()}, 500);
          }
        })
    }
  }
  handleChange = (event, checked) =>{
    let project = this.state.project;
    if(event.target.name === 'privacy'){
        project[event.target.name] = checked ? 'private' : 'public';
    }else{
        project[event.target.name] = event.target.value;
    }
    this.setState({project});
  }

  handleSlider = (event, value) => {
    let project = this.state.project;
    project['est_effort'] = value;
    this.setState({project});
  };
  componentWillReceiveProps(nextProps){
    this.setState({project: nextProps.project, open: nextProps.popForm})
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
      />,
    ];
    return (    
      <MuiThemeProvider>
        <div>
            {        
                this.props.newProjectForm ? 
                (<RaisedButton label="NEW PROJECT" onClick={this.handleOpen} backgroundColor='red' labelColor='white' labelStyle={{fontSize:'12px'}} overlayStyle={{width:'180px'}}/>)
                : 
                (<div></div>)
            }
            <Dialog
            title={this.props.newProjectForm ? "START A NEW PROJECT" : "EDIT PROJECT"}
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
                <div>
                    <TextField
                    hintText="Renovate Floor"
                    floatingLabelText="Project Name"
                    name="name"
                    value={this.state.project.name}
                    onChange = {this.handleChange}                    
                    /><br />
                    <TextField
                    hintText="Do this, do that then do that.."
                    floatingLabelText="Description"
                    name="description"
                    fullWidth={true} 
                    multiLine={true}
                    rows={2}
                    rowsMax={4}  
                    value={this.state.project.description}                    
                    onChange = {this.handleChange}
                    /><br />

                    <Toggle
                    label="Private"
                    name="privacy"
                    defaultToggled={this.state.project.privacy == 'private'}
                    onToggle = {this.handleChange}
                    style={{width:'auto',marginTop:'30px'}}
                    /><br/>
                    <div>
                        <p>Estimtated Effort:</p>
                        <Slider min={0} max={10} value={this.state.project.est_effort} onChange={this.handleSlider} />
                        <p>
                            <span>{'The value of this slider is: '}</span>
                            <span>{this.state.project.est_effort}</span>
                            <span>{' from a range of 0 to 10 inclusive'}</span>
                        </p>
                    </div>
                </div>
            </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}



// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(dispatch)
//   };
// }

// export default connect(mapDispatchToProps)(NewProject);