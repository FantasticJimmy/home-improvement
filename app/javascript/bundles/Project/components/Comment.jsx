import PropTypes from 'prop-types';
import React from 'react';
import { ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';



import {getAuthor} from '../ajaxService';


export default  Comment = (props) => {
    return (
        <ListItem
        leftAvatar={<Avatar src="assets/jimmy-avatar.png" />}
        primaryText={<div>{props.user.name} <i className="far fa-clock"></i>{moment(props.created_at).fromNow()}</div>}
        secondaryText={
          <p>
            {props.content}
          </p>
        }
        secondaryTextLines={2}
      />
    );
}
