import { connect } from 'react-redux';
import React from 'react';
import _ from 'lodash';
import LikeItemContainer from './like_item_container';

const mapStateToProps = (state, ownProps) => {
  return {
    users: _.values(ownProps.users),
    title: ownProps.title,
  };
};



  const LikeComponent = ({ users, title }) => {
    let items = users.map((user) => {
      return (
        <li key={ user.id }>
          <LikeItemContainer user={user} title={title} />
        </li>
      );
    });

    return (
      <div>{ items }</div>
    );

  };

export default connect(mapStateToProps, null)(LikeComponent);
