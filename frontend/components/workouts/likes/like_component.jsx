import { connect } from 'react-redux';
import React from 'react';
import _ from 'lodash';
import LikeItemContainer from './like_item_container';
import CommentSpecs from '../comments/comment_specs';
import {
  createComment,
  deleteComment
} from '../../../actions/workouts/workout_actions';
import Tabs from '../../tabs/tabs';

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

class LikeComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ownWorkout: false
    };

    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount(){
    if(this.props.currentUser.id === this.props.workout.user_id){
      this.setState({ ownWorkout: true });
    }
  }

  componentWillReceiveProps(newProps){
    if(this.props.workout.liker_ids.includes(this.props.currentUser.id)){
      this.setState({ ownWorkout: true });
    }
  }

  componentWillUnmount(){
    this.props.closeState();
  }

  handleLike(){
    this.props.handleLike();
  }

  render(){
    let likeItems = this.props.users.map((user) => {
      return (
        <li key={ user.id }>
          <LikeItemContainer
            user={ user }
            title={ this.props.title }
            closeState={ this.props.closeState } />
        </li>
      );
    });

    let comments = 0;
    let likers = this.props.workout.liker_ids.length;

    if(this.props.workout.comments){
      comments = _.values(this.props.workout.comments).length;
    }

    if(!likers){
      likeItems =
      <div className="no-entry">This entry has no kudos yet.</div>;
      }

      let commentItems =
      <section className="modal-comment">
        <CommentSpecs
          currentUser={ this.props.currentUser }
          workout={ this.props.workout }
          commentField={ this.props.ommentField }
          createComment={ this.props.createComment }
          deleteComment={ this.props.deleteComment }
          closeState={ this.props.closeState } />
      </section>;

      const tabs = [
        { word: `Kudos (${likers})`, content: likeItems, title: "profile-header", classs: 'header-bg' },
        { word: `Comments (${comments})`, content: commentItems, title: "profile-header", classs: 'header-bg' },
      ];

      return (
        <section className="likes-container">

          <header className="likes-container-header">
            <img className="nav-avatar" src={ this.props.currentUser.avatar_url } />
            <span className="like-header-title">{ this.props.title }</span>
          </header>

          <Tabs panes={ tabs } />

        <div className='kudos-wrapper'>
          { this.state.ownWorkout ?
            <button className="like-modal-button-dis">
              Give Kudos
            </button>
          :
          <button
            className="like-modal-button"
            onClick={ this.handleLike }>
            Give Kudos
          </button>
          }
        </div>

        </section>
      );
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(LikeComponent);
