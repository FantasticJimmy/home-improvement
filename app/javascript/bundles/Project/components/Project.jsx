import PropTypes from 'prop-types';
import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import {getAuthor} from '../ajaxService';


export default class Project extends React.Component {
    static propTypes = {
        project: PropTypes.object.isRequired
    };
  constructor(props) {
    super(props);
    this.state = {project: Object.assign({},this.props.project), author: {}}
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
    switch(this.state.status){
        case 'created': 
          statusColor = 'yellow';
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
            title={<a style={{textDecoration:'none'}} href={"/projects/"+this.state.project.id}>{this.state.project.name}</a>}
            titleStyle={{fontSize:'2em',fontWeight:'bold'}}
            actAsExpander={false}
            
            >
                <div className="float-right flex-centering uppercase" style={{padding:'10px',border:'1px solid ',width:'40%',borderColor: statusColor}}>
                    Started
                </div>
            </CardHeader>
            <CardText expandable={false} style={{borderTop:'1px solid #E0E0E0',minHeight:'200px'}}>
                <div>

                </div>
                <div className="project-card-icon">
                    <span className="icon-item"><i className="fas fa-user"></i>&nbsp;&nbsp;{this.state.author.name}</span> 
                    <span className="icon-item"><i className="far fa-clock"></i>&nbsp;&nbsp;{moment(this.state.project.updated_at).fromNow().slice(0,-4)}</span>
                </div>
                <div className="">
                    <div className="project-card-description inline" style={{width:'50%', paddingRight:'20px'}}>
                        {this.state.project.description}
                    </div>
                    <div className="project-card-effort-boxes inline" style={{width:'50%', padding:'30px'}}>
                        <div className="project-card-est-effort-boxes effort-box flex-centering" style={{flexDirection:'column'}}>
                            <div>Estimated level of effort</div>
                            <div>{this.state.project.est_effort}</div>
                        </div>
                        <div className="project-card-act-effort-boxes effort-box flex-centering" style={{flexDirection:'column'}}>
                            <div>Actual level of effort</div>
                            <div>{this.state.project.act_effort}</div>
                        </div>
                    </div>
                </div>
            </CardText>
        </Card>
    );
  }
}
