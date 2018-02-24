import { connect } from 'react-redux';
import React from 'react';
import _ from 'lodash';
import LikeItemContainer from './like_item_container';
import CommentSpecs from '../comments/comment_specs';
import {
  createComment,
  deleteComment
} from '../../../actions/workouts/workout_actions';
const mapStateToProps = (state, ownProps) => {
  return {
    users: _.values(ownProps.users),
    title: ownProps.title,
    currentUser: state.session.currentUser,
    closeState: ownProps.closeState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: (id, body) => dispatch(createComment(id, body)),
    deleteComment: (id) => dispatch(deleteComment(id))
  };
};

const LikeComponent = ({ users, title, currentUser, closeState, workout,
   commentField, createComment, deleteComment  }) => {
  let likeItems = users.map((user) => {
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
         {/* likeItems.length ?
           likeItems :
           <div className="no-entry">This entry has no kudos yet.</div>
         */}
         <section className="modal-comment">
           <CommentSpecs
             currentUser={currentUser}
             workout={workout}
             commentField={commentField}
             createComment={createComment}
             deleteComment={deleteComment}/>
         </section>
       </ul>

     </section>
  );

};

export default connect(mapStateToProps, mapDispatchToProps)(LikeComponent);
