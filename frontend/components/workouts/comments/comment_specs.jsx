import React from 'react';
import CommentSpecsItem from './comment_specs_item';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class CommentSpecs extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      open: false,
      body: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState({ commentField: newProps.commentField });
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(this.props.workout.id, this.state.body)
    .then(() => {
      this.setState({ body: "" });
    });
  }

  render(){
    let comments;
    let commentItems;
    if(this.props.workout.comments){
      comments = _.values(this.props.workout.comments);
      commentItems = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <CommentSpecsItem
              comment={comment}
              currentUser={this.props.currentUser}
              deleteComment={this.props.deleteComment} />
          </li>

        );
      });
    }

    return (
      <section>
        <div className="comment-spec-section">
          <ul>
            { commentItems }
          </ul>
        </div>

          <form className="comment-form" onSubmit={ this.handleSubmit }>
            <img
              className="item-sm-avatar"
              src={ this.props.currentUser.avatar_url } />

            <input
              autoFocus
              className="comment-spec-input"
              placeholder="Add a comment..."
              onChange={this.handleChange('body')}
              value={this.state.body} />

            <button
              onClick={this.handleSubmit}
              className="comment-spec-button">
              Post
            </button>

          </form>

      </section>
    );
  }

}

export default CommentSpecs;
