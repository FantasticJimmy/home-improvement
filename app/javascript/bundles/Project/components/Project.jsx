import PropTypes from 'prop-types';
import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import CommentsList from './CommentsList';
import CommentBox from './CommentBox';


import {getAuthor} from '../ajaxService';


export default class Project extends React.Component {
    static propTypes = {
        project: PropTypes.object.isRequired
    };
  constructor(props) {
    super(props);
    this.state = {project: Object.assign({},this.props.project), author: {}, comments: [], currentUser: {}}
  }
  componentDidMount(){
    const that = this;
    if(undefined != this.props.project){
        getAuthor(this.state.project.id,function(result,author){
                if(result === 'success'){
                    that.setState({author})
                }
        })
    }
  }
  render() {
    let statusColor;
    switch(this.state.project.status){
        case 'created': 
          statusColor = 'pink';
          break;
        case 'started':
          statusColor = 'red';
          break;
        case 'stopped': 
          statusColor = 'blue';
          break;
        case 'completed': 
          statusColor = 'green';
          break;
        default:
          statusColor = null;
    }
    return (
        <Card className="self-centering project-card">
            <CardHeader
            title={<a style={{textDecoration:'none',color:'black'}} href={"/projects/"+this.state.project.id+"/edit"}>{this.state.project.name}</a>}
            titleStyle={{fontSize:'2em',fontWeight:'bold'}}
            actAsExpander={false}
            style={{padding:'25px'}}
            >
                <div className="float-right flex-centering uppercase" style={{padding:'10px',border:'2px solid ',width:'280px',borderColor: statusColor, color: statusColor,fontSize:'16px',borderRadius:'2px'}}>
                    {this.state.project.status}
                </div>
            </CardHeader>
            <CardText expandable={false} style={{borderTop:'1px solid #E0E0E0',padding:'25px 25px 0 25px'}}>
                <div className="project-card-icon" >
                    <span className="icon-item" ><i className="fas fa-user"></i>&nbsp;<span style={{color:'#004D40', textDecoration: "underline"}}>{this.state.author.name}</span></span> 
                    <span className="icon-item" ><i className="far fa-clock"></i>&nbsp;<span style={{color:'#004D40',textDecoration: "underline"}}>{moment(this.state.project.updated_at).fromNow().slice(0,-4)}</span></span>
                </div>
                <div>
                    <div className="project-card-description inline">
                        {this.state.project.description}
                    </div>
                    <div className="project-card-effort-boxes inline float-right" style={{width:'40%',color:'#78909C'}}>
                        <div className="project-card-est-effort-boxes effort-box flex-centering float-left" style={{flexDirection:'column',width:'49.9%'}}>
                            <div style={{fontSize:'14px',padding:'0 30px', textAlign:'center',fontWeight:'bold'}}>Estimated level of effort</div>
                            <div style={{minHeight:'50px',fontSize:'30px',fontWeight:'bold',marginTop:'10px'}}>{this.state.project.est_effort}</div>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="project-card-act-effort-boxes effort-box flex-centering float-right" style={{flexDirection:'column',width:'49.4%'}}>
                            <div style={{fontSize:'14px',padding:'0 30px', textAlign:'center',fontWeight:'bold',color: this.state.project.act_effort ? 'black' : 'inherit'}}>Actual<br/> level of effort</div>
                            <div style={{minHeight:'50px',fontSize:'30px',fontWeight:'bold',marginTop:'10px',color: statusColor}}>{this.state.project.act_effort}</div>
                        </div>
                    </div>
                </div>
            </CardText>
            <CommentsList project_id={this.state.project.id} currentUser={this.state.currentUser} />
        </Card>
    );
  }
}