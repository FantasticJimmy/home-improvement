import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.submitComment = this.submitComment.bind(this)
    }

    submitComment(event,x){
        if(this.refs.commentField.input.value.trim() == ''){return;}
        this.props.submitComment(this.refs.commentField.input.value)
        this.refs.commentField.input.value = ''
    }
    render(){
          return( 
            <div>           
                <TextField
                hintText="Hint Text"
                floatingLabelText="Floating Label Text"
                style={{display:'block'}}
                ref={'commentField'}
                />
                <RaisedButton className="block" label="Comment" primary={true} onClick={this.submitComment} style={{display:'block',maxWidth:'100px'}}/>
            </div>
          )
    }
}