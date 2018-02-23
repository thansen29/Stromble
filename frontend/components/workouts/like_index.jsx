import React from 'react';
import LikeComponent from './like_component';
import ModalComponent from '../modals/modal_component';
import CommentItem from './comment_item';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class LikeIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      liked: false,
      anyLikes: false,
      open: false,
      commentField: false,
      body: ''
    };


    this.handleLike = this.handleLike.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeState = this.closeState.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
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

  openModal(){
    this.setState({ open: true });
    this.props.openModal();
  }

  closeState(){
    this.setState({ open: false });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(this.props.workout.id, this.state.body)
    .then(() => {
      this.setState({ body: "" });
    });
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
    let commentItems;
    if(this.props.workout.comments){
      comments = _.values(this.props.workout.comments);
      commentItems = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <CommentItem
              comment={comment}
              currentUser={this.props.currentUser} />
          </li>

        );
      });
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

            <span className="num-kudos">
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

        <div className="comment-section">
          <ul>
            { commentItems }
          </ul>
        </div>

        { comments ? comments.length > 2 ?
          <span className="see-all">
            See all { comments.length } comments
          </span> : null : null
        }

        { this.state.commentField ?
          <form className="comment-form" onSubmit={ this.handleSubmit }>
            <img
              className="item-sm-avatar"
              src={ this.props.currentUser.avatar_url } />

            <input
              className="comment-input"
              placeholder="Add a comment..."
              onChange={this.handleChange('body')}
              value={this.state.body} />

            <button
              onClick={this.handleSubmit}
              className="comment-button">
              Post
            </button>

          </form>
          : null
        }

        { this.props.isOpen && this.state.open ?
          <ModalComponent closeModal={this.props.closeModal}>
            <LikeComponent
              users={this.props.workout.likers}
              title={this.props.workout.title}
              closeState={this.closeState} />
          </ModalComponent> : null
        }
      </section>


    );
  }
}

export default LikeIndex;
