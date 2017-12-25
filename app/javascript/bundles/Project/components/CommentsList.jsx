import PropTypes from 'prop-types';
import React from 'react';
import CommentBox from './CommentBox';
import Comment from './Comment'
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {createComment, getComments} from '../ajaxService';

export default class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {comments: Object.assign([],{},this.props.comments)}
        this.submitComment = this.submitComment.bind(this)
    }
    componentDidMount(){
      getComments(this.props.project_id,(comments)=>{
        this.setState({comments})
      })
    }
    submitComment(commentContent){
      createComment(commentContent, this.props.project_id, (newComment)=>{
        this.setState({comments: [
          ...this.state.comments,
          Object.assign({}, newComment)
          ]
        })
      })
    }
    render(){
      let comments = <div></div>

      if(this.state.comments.length != 0){
        debugger
        const comments = this.state.comments.map(comment,key=>{
          return(<Comment {...comment} key={comment.id} />)
        })
      }
        return (
        <div className="container-fluid" id="comments" style={{padding: '50px',backgroundColor:'#fff'}}>
          <div>
            <CommentBox submitComment={this.submitComment} currentUser={this.props.current_user} />
            <List>
              <Subheader>Recent chats</Subheader>
              {comments}
            </List>
          </div>
        </div>);
    }
}