import PropTypes from 'prop-types';
import React from 'react';
import { ListItem} from 'material-ui/List';



import {getAuthor} from '../ajaxService';


export default  Comment = ({props}) => {
    return (
        <ListItem
        leftAvatar={<Avatar src="images/ok-128.jpg" />}
        primaryText={this.props.author_name}
        secondaryText={
          <p>
            {this.props.content}
          </p>
        }
        secondaryTextLines={2}
      />
    );
}
