import React from 'react';
import LikeComponent from './like_component';
import ModalComponent from '../../modals/modal_component';
import CommentIndex from '../comments/comment_index';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class LikeIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      liked: false,
      anyLikes: false,
      commentField: false,
    };


    this.handleLike = this.handleLike.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeState = this.closeState.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  componentDidMount(){
    if(this.props.workout.liker_ids.includes(this.props.currentUser.id)){
      this.setState({ liked: true });
    }
    if(this.props.workout.liker_ids.length){
      this.setState({ anyLikes: true });
    }
  }

  handleComment(){
    this.setState({ commentField: true });
  }

  handleLike(){
    if(this.props.workout.user_id === this.props.currentUser.id){
      this.openModal();
      return;
    }

    this.props.likeWorkout(this.props.workout.id).then(() => {
      this.setState({ liked: true, anyLikes: true });
    });
  }

  componentWillUnmount(){
    this.closeState();
  }

  openModal(){
    this.setState({ open: true });
    this.props.openModal();
  }

  closeState(){
    this.setState({ open: false });
  }

  render(){
    let likers;
    let likeText =
        <span
          className="like-text"
          onClick={ this.handleLike }>
          Be the first to give kudos!
        </span>;

    if(this.props.workout.likers){
      const likerArr = _.values(this.props.workout.likers);
      likers = likerArr.map((user) => {
        return (
          <span
            className="likers"
            key={ user.id }>
            <Link to={`/users/${user.id}`}>
              <img className="item-sm-avatar" src={ user.avatarUrl } />
            </Link>
          </span>
        );
      });
    }

    let comments;
    if(this.props.workout.comments){
      comments = _.values(this.props.workout.comments);
    }

    return (
      <section className="like-index-container">
        <div className="item-socials">
          { this.state.anyLikes ||
            this.props.workout.user_id === this.props.currentUser.id
            ? null : likeText
          }

          <div className="social-likers-wrapper">
            <span className="item-social-likers">
               { likers }
            </span>

            <span className="num-kudos" onClick={this.openModal}>
              { likers ? `${likers.length} kudos` : null }
            </span>

            <span className="num-kudos" onClick={this.openModal}>
              { comments ? `${comments.length} comments` : null }
            </span>
          </div>

          <span className="item-social-buttons">
            <button
              className="like-button"
              onClick={
                this.state.liked ?
                this.openModal :
                this.handleLike }>
              <i
                className={ this.state.liked
                  ? "fa fa-thumbs-o-up orange"
                  : "fa fa-thumbs-o-up"
                 }
                aria-hidden="true">
              </i>
            </button>

            <button
              onClick={this.handleComment}>
              <i className="chat-icon"></i>
            </button>
          </span>

        </div>

        <CommentIndex
          currentUser={this.props.currentUser}
          workout={this.props.workout}
          commentField={this.state.commentField}
          openModal={this.openModal}
          openState={this.openState}
          createComment={this.props.createComment}
          deleteComment={this.props.deleteComment}/>

        { this.props.isOpen && this.state.open ?
          <ModalComponent closeModal={this.props.closeModal}>
            <LikeComponent
              users={this.props.workout.likers}
              title={this.props.workout.title}
              closeState={this.closeState}
              workout={this.props.workout}
              commentField={this.state.commentField}
              createComment={this.props.createComment}
              deleteComment={this.props.deleteComment}
              handleLike={this.handleLike}/>
          </ModalComponent> : null
        }
      </section>


    );
  }
}

export default LikeIndex;
