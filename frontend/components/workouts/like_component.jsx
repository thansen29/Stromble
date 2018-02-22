import { connect } from 'react-redux';
import React from 'react';
import _ from 'lodash';
import LikeItemContainer from './like_item_container';

const mapStateToProps = (state, ownProps) => {
  return {
    users: _.values(ownProps.users),
    title: ownProps.title,
    currentUser: state.session.currentUser,
    closeState: ownProps.closeState
  };
};

const LikeComponent = ({ users, title, currentUser, closeState }) => {
  let items = users.map((user) => {
    return (
      <li key={ user.id }>
        <LikeItemContainer user={user} title={title} closeState={closeState} />
      </li>
    );
  });

  return (
     <section className="likes-container">

       <header className="likes-container-header">
         <img className="nav-avatar" src={ currentUser.avatar_url } />
         <span className="like-header-title">{ title }</span>
       </header>

       <ul>
         { items }
       </ul>

     </section>
  );

};

export default connect(mapStateToProps, null)(LikeComponent);
