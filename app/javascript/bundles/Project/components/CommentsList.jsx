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
        this.state = {comments: Object.assign([],{})}
        this.submitComment = this.submitComment.bind(this)
    }
    componentDidMount(){
      getComments(this.props.project_id,(result,comments)=>{
        if(result === 'success'){
          this.setState({comments})
        }
      })
    }
    submitComment(commentContent){
      createComment(commentContent, this.props.project_id, (result,newComment)=>{
        if(result === 'success'){
          this.setState({comments: [
            ...this.state.comments,
            Object.assign({}, newComment)
            ]
          })
        }
      })
    }
    render(){
      let comments = <div></div>
      if(this.state.comments.length != 0){
        comments = this.state.comments.sort((a,b)=>{return(moment(b.created_at).unix() - moment(a.created_at).unix())}).map((comment,key)=>{
          return(<Comment {...comment} key={comment.id} />)
        })
      }
        return (
        <div className="container-fluid" id="comments" style={{padding: '0 50px',backgroundColor:'#fff'}}>
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